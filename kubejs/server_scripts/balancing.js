////////////////////////////////
/// Made by MrBones         /// 
/// based on All of Fabric ///
/////////////////////////////


events.listen("recipes", function(event) {

	// Angel Ring
	event.remove({ output: "kibe:angel_ring" });
	event.shaped(item.of("kibe:angel_ring"), [
	['dml-refabricated:glitch_ingot', "bosses_of_mass_destruction:levitation_block",'dml-refabricated:glitch_ingot'],
	['minecraft:elytra',"kibe:diamond_ring",'minecraft:elytra'],
	['minecraft:end_crystal',null,'minecraft:dragon_breath'],
	]);

	// Light Ring
	event.remove({ output: "kibe:light_ring" });
	event.shaped(item.of("kibe:light_ring"), [
	["kibe:big_torch",'torcherino:double_compressed_torcherino',"kibe:big_torch"],
	["terrarianslimes:illuminant_slime_block", "kibe:diamond_ring", "conjuring:distilled_spirit"],
	['betterend:neon_cactus', "blockus:glowing_obsidian", 'minecraft:glow_berries'],
	]);
////////--MCDOOM--//////////////////////////////////////////////////////////////
	
	// Doom Gun Crafter
	event.remove({ output: "doom:gun_table" });
	event.shaped(item.of("doom:gun_table"), [
	[null, "minecraft:anvil",null],
	['minecraft:comparator',    "hwg:gun_table",'minecraft:comparator'],
	['mythicmetals:quadrillum_block','mythicmetals:quadrillum_block','mythicmetals:quadrillum_block'],
	]);
	
	// argent Bolt (From MCdoom)
	event.remove({ output: "doom:argent_bolt" });
	event.shaped(item.of("doom:argent_bolt"), [
	[null,null ,"doom:argent_energy"],
	[null, "minecraft:blaze_rod", null],
	["doom:argent_energy", null, null],
	]);
	
	// Unmyker Bolt (From MCdoom)
	event.remove({ output: "doom:unmaykr_bolt" });
	event.shaped(item.of("doom:unmaykr_bolt"), [
	["doom:argent_energy",null ,"doom:argent_block"],
	[null, "doom:argent_bolt", null],
	["doom:argent_block", null,"doom:argent_energy"],
	]);
	
/////--schmucks--//////////////////////////
	
	//schmucks magic dust
	event.remove({ output: "schmucks:magic" });
	event.shaped(item.of("schmucks:magic",4), [
	[null,"mythicmetals:carmot_dust",null],
	['minecraft:redstone','conjuring:scope_gem','minecraft:redstone'],
	[null,"mythicmetals:carmot_dust",null],
	]);
/////--Slotlink--//////////////////////////	

	event.remove({ output: "slotlink:multi_dim_remote" });
	event.shaped(item.of("slotlink:multi_dim_remote"), [
	[null,"dml-refabricated:physically_condensed_matrix_fragment",null],
	['dimdoors:stable_fabric',"slotlink:unlimited_remote",'dimdoors:stable_fabric'],
	[ "doom:argent_block",'minecraft:nether_star', "doom:argent_block"],
	]);
	
	event.remove({ output: "slotlink:limited_remote" });
	event.shaped(item.of("slotlink:limited_remote"), [
	["dml-refabricated:soot_redstone","minecraft:diamond","dml-refabricated:soot_redstone"],
	["artifality:incremental_orb","slotlink:request","artifality:incremental_orb"],
	[ "dml-refabricated:soot_redstone","minecraft:diamond", "dml-refabricated:soot_redstone"],
	]);

/////--Origins--////////////////////////////////////////////
	
	// Origins Orb
	event.shaped(item.of('origins:orb_of_origin', 1), [
	['doom:argent_energy', 'bewitchment:cleansing_balm'],
	]);

/////--Gobber--//////////////////////////////////////////

	// Dragon Armor Helmet
	event.replaceInput(
	{ id: "gobber2:gobber2_helmet_dragon_no_flight" },
	"minecraft:dragon_head",
	"gobber2:dragon_star"
	);

	// Dragon Armor Chestplate
	event.replaceInput(
	{ id: "gobber2:gobber2_chestplate_dragon_no_flight" },
	"minecraft:dragon_head",
	"gobber2:dragon_elytra"
	);

	// Dragon Armor Leggings
	event.replaceInput(
	{ id: "gobber2:gobber2_leggings_dragon_no_flight" },
	"minecraft:dragon_head",
	"gobber2:dragon_star"
	);

	// Dragon Armor Boots
	event.replaceInput(
	{ id: "gobber2:gobber2_boots_dragon_no_flight" },
	"minecraft:dragon_head",
	"gobber2:dragon_star"
	);


})