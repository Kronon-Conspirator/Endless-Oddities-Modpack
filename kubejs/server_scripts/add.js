
////////////////////////////////
/// Made by MrBones         /// 
/// based on All of Fabric ///
/////////////////////////////

events.listen("recipes", function (event) {

  // Sticks
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);
  // gilded blackstone
	event.shaped(item.of('minecraft:gilded_blackstone',2), [
    ['minecraft:blackstone', "minecraft:gold_nugget"],
    ["minecraft:gold_nugget", 'minecraft:blackstone'],
  ]);
    // Oak Sign
  event.replaceInput(
    { id: "minecraft:oak_sign" },
    "minecraft:oak_planks",
    "#minecraft:planks"
  );
    // Cobweb
  event.shaped(item.of("minecraft:cobweb"), [
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
  ]);
  // Salt Conversion
   event.shapeless('croptopia:salt', ['bewitchment:salt']);
   event.shapeless('bewitchment:salt', ['croptopia:salt']);
  
  // Torchrino's Lanterino swapback
   event.shapeless('torcherino:torcherino', ['torcherino:lanterino']);
   event.shapeless('torcherino:compressed_torcherino', ['torcherino:compressed_lanterino']);
   event.shapeless('torcherino:double_compressed_torcherino', ['torcherino:double_compressed_lanterino']);
  
  // atbyw stick fix
   event.shapeless('minecraft:stick', ['atbyw:bamboo_stick']);
   
     //Bullet (From MCdoom), additional crafting
    event.shaped(item.of("doom:bullets"), [
    ["hwg:bullets", "minecraft:gunpowder",null]
	]);
	// ChainGun Bullet (From MCdoom), additional crafting
	  event.shaped(item.of("doom:chaingunbullets"), [
    [null, "doom:bullets",null],
    ["minecraft:iron_nugget", "minecraft:gunpowder", "minecraft:iron_nugget"],
    [null, "minecraft:iron_nugget", null],
  ]);
  	// Shotgun Bullet (From MCdoom), additional crafting
	  event.shaped(item.of("doom:shotgun_shell"), [
    [null, "doom:bullets",null],
    [null, "minecraft:gunpowder", null],
    [null, "minecraft:iron_nugget", null],
  ]);
	// Indrev Servo Swap
	event.shapeless('indrev:servo_retriever', ['indrev:servo_output','gobber2:gobber2_staff_transformation']);
	event.shapeless('indrev:servo_output', ['indrev:servo_retriever','gobber2:gobber2_staff_transformation']);
	// Kibe Curse drop
	event.shaped(item.of('kibe:cursed_droplets',2), [
    [null, "hellish-materials:vuld_drop",null],
    ["hellish-materials:vuld_drop", "minecraft:ghast_tear", "hellish-materials:vuld_drop"],
    [null, "hellish-materials:vuld_drop", null],
  ]);
  	// End Gobber Ore Crafting
	event.shaped(item.of('gobber2:gobber2_ore_end'), [
    ["betterend:ender_dust", "betterend:flavolite","betterend:ender_dust"],
    ["betterend:flavolite", "betterend:ender_ore", "betterend:flavolite"],
    ["betterend:ender_dust", "betterend:flavolite", "betterend:ender_dust"],
  ]);
  
});