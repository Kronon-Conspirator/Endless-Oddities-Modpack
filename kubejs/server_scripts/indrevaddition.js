
////////////////////////////////
/// Made by MrBones         /// 
/// based on All of Fabric ///
/////////////////////////////

const MATS = [
"adamantite",
"aetherium",
"aquarium",
"banglum",
"carmot",
"kyber",
"manganese",
"midas_gold",
"mythril",
"orichalcum",
"prometheum",
"runite",
"starrite",
"stormyx",
"tantalite",
"truesilver",
"unobtainium",
"ur",
"vermiculite", 
"zinc"
];

events.listen("recipes", function (event) {
	
	MATS.forEach(mats => {
	  event.custom({
		type: "indrev:pulverize",
		ingredients: [
		  Ingredient.of('mythicmetals:'+ mats + '_ingot').toJson()
		],
		results: [
		  Item.of('mythicmetals:'+ mats + '_dust').toResultJson()
		  
		],
		processingTime: 200
		})
	});
});