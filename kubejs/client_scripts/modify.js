// Another Quality Modpack 2 //
//////////////////////////////
events.listen("rei.hide.items", function (event) 
{
	var k_g = ["mk1","mk2","mk3","mk4","mk5",];
	var kcg = 'kibe:cobblestone_generator_';
	var kbg = 'kibe:basalt_generator_';
	
	k_g.forEach(function(item,index){event.hide(kbg + item);event.hide(kcg + item)})
})