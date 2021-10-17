//      Made by LiviiYS       //
///////////////////////////////

events.listen("recipes", function (event) {

  // Remove Kibe Generators due to ticking entity crashes

  var kibe_gen = [
    "mk1",
    "mk2",
    "mk3",
    "mk4",
    "mk5",
    ];

  kibe_gen.forEach(function(item, index) { 
    event.remove({output: 'kibe:cobblestone_generator_' + item})
    event.remove({output: 'kibe:basalt_generator_' + item})
  })
})