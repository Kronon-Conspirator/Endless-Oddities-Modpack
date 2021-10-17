////////////////////////
/// Made by LiviiYS  ///
////////////////////////

//////////////////////////////////////////////
// Euphoric unification script              //
//////////////////////////////////////////////

// Set to true to generate the client script for REI unification.
const GENERATE_REI_SCRIPT = true;
// List of part tags to unify.
const PARTS = [
    "c:{}_blocks",
    "c:{}_dusts",
    "c:{}_ingots",
    "c:{}_nuggets",
    "c:{}_plates",
    "c:raw_{}_ores",
    "c:raw_{}_blocks"
];
// List of materials to unify.
const MATERIALS = [
    "aluminum",
    "bauxite",
    "bronze",
    "chrome",
    "coal",
    "copper",
    "diamond",
    "electrum",
    "emerald",
    "gold",
    "invar",
    "iridium",
    "iron",
    "lapis",
    "lead",
    "manganese",
    "nickel",
    "platinum",
    "quartz",
    "ruby",
    "salt",
    "silicon",
    "silver",
    "steel",
    "sulfur",
    "tin",
    "titanium",
    "tungsten",
    "zinc",
];
// Order of mods to unify
const UNIFICATION_ORDER = [	
	"indrev",
	"mythicmetals",
	"croptopia",
	"bewitchment",
    "agape_space",
    "gobber2",
	"workings"
];
// List of tags NOT to unify
const UNIFICATION_BLACKLIST = [
    "c:quartz_blocks",
];
// Map of removed item -> unified variant.
const itemIdToUnified = {};
// List of all unification tags.
const unifiedTagList = [];

function findTagUnification(event, tagName) {
    if (UNIFICATION_BLACKLIST.includes(tagName)) return;

    const tagItems = event.get(tagName).kjsextras_getAllIds();

    // Check if unification is OK
    let doUnify = true;
    tagItems.forEach(id => {
        const namespace = id.split(":")[0];
        // Don't unify if it contains the MC namespace
        if (namespace === "minecraft" ) {
            doUnify = false;
            return;
        }
    });
    if (!doUnify) return;

    let unifyTargetId = undefined;
    UNIFICATION_ORDER.forEach(unificationNamespace => {
        // Do tag unification
        tagItems.forEach(id => {
            // Skip deepslate!
            if (id.includes("deepslate")) return;

            const namespace = id.split(":")[0];
            // If a namespace is not in the order list, crash
            if (!UNIFICATION_ORDER.includes(namespace)) {
                throw new Error(`Missing namespace ${namespace} in the unification order: ${UNIFICATION_ORDER}. Required by item ${id} in tag ${tagName}.`);
            }
            // Otherwise pick the best in the list
            if (namespace === unificationNamespace) {
                if (unifyTargetId === undefined) {
                    unifyTargetId = id;
                }
            }
        });
    });

    if (unifyTargetId === undefined || doUnify === false) return undefined;
    else return "" + unifyTargetId; // Convert to string
}
// Unify common tags
events.listen("items.tags", event => {
    // Regular parts
    MATERIALS.forEach(material => {
        PARTS.forEach(partTagTemplate => {
            const tagName = partTagTemplate.replace("{}", material);

            // Pick unification target
            let unifyTargetId = findTagUnification(event, tagName);
            if (unifyTargetId === undefined) return;
            unifiedTagList.push(tagName);

            // Collect other items for item unification.
            event.get(tagName).kjsextras_getAllIds().forEach(id => {
                if (id in itemIdToUnified) {
                    throw new Error("Item id " + tagStack.id + " already has a unification mapping! " + itemIdToUnified[id]);
                } else if (id !== unifyTargetId) {
                    itemIdToUnified[id] = unifyTargetId;
                    // Remove from tag.
                    event.remove(tagName, id);
                }
            });
        });
    });
    // Ore parts
    MATERIALS.forEach(material => {
        const oreTagName = `c:${material}_ores`;
        const oreItemId = findTagUnification(event, oreTagName);

        if (oreItemId === undefined) return; // No ore found!
        unifiedTagList.push(oreTagName);

        const oreItemIdParts = oreItemId.split(":");
        // Convert ore to deepslate variant.
        const deepslateOreItemId = oreItemIdParts[0] + ":deepslate_" + oreItemIdParts[1];

        // Collect ores, unify deepslate to deepslate and regular to regular.
        event.get(oreTagName).kjsextras_getAllIds().forEach(id => {
            if (id in itemIdToUnified) {
                throw new Error("Item id " + id + " already has a unification mapping! " + itemIdToUnified[id]);
            } else if (id !== oreItemId && id !== deepslateOreItemId) {
                if (id.includes("deepslate")) {
                    itemIdToUnified[id] = deepslateOreItemId;
                } else {
                    itemIdToUnified[id] = oreItemId;
                }
                // Remove from tag.
                event.remove(oreTagName, id);
            }
        });
    });
})
events.listen("recipes", event => {
    // Replace inputs and outputs with unified items.
    for (let id in itemIdToUnified) {
        let unified = itemIdToUnified[id];
        event.replaceInput({}, id, unified);
        event.replaceOutput({}, id, unified);
    }
    // Force inputs to use the tag.
    unifiedTagList.forEach(tag => {
        event.replaceInput({}, tag, tag);
    });
    // Add fallback recipes (output is hidden from REI by KJS Extras)
    for (let id in itemIdToUnified) {
        let unified = itemIdToUnified[id];
        event.recipes.minecraft.crafting_shapeless(unified, id).id("kjsextras_output_hidden:" + id.replace(":", "_"));
    }
    // Remove duplicate recipes
    function autoremove(itemPattern, recipePattern) {
        MATERIALS.forEach(material => {
            let ok = true;
            if (recipePattern === undefined) {
                recipePattern = itemPattern;
            } else {
                ok = itemPattern.replace("{}", material) in itemIdToUnified;
            }
            if (ok) {
                event.remove({ id: recipePattern.replace("{}", material) });
            }
        });
    }
    
    if (GENERATE_REI_SCRIPT) {
        generateReiScript(itemIdToUnified);
    }
});

function generateReiScript(itemIdToUnified) {
    script = `
//////////////////////////////////////////////////////////////////////////
// AOF 4 REI unification script.                                        //
// Generated by the unification script with GENERATE_REI_SCRIPT = true. //
//////////////////////////////////////////////////////////////////////////
const DELETED_ITEMS = ${JSON.stringify(Object.keys(itemIdToUnified))};
events.listen("kjsextras_rei", event => {
    DELETED_ITEMS.forEach(id => event.remove(id));
});
    `;
    console.log("Generated REI unification script. Disable by setting GENERATE_REI_SCRIPT to false.");
    console.log(script);
}

events.listen("recipes.serializer.special.flag", event => {
    // Fix indrev recipe types
    ["compress", "pulverize", "infuse"].forEach(id => event.ignoreSpecialFlag("indrev:" + id));
});