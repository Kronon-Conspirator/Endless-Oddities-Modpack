////////////////////////
///  Made by LiviiYS ///
////////////////////////
settings.useOriginalRecipeForFilters = true
events.listen("recipes", function (event) {
  // Wooden Bucket / Small Logs
  event.remove({ output: "blockus:oak_small_logs" });
  event.remove({ output: "blockus:spruce_small_logs" });
  event.remove({ output: "blockus:birch_small_logs" });
  event.remove({ output: "blockus:jungle_small_logs" });
  event.remove({ output: "blockus:acacia_small_logs" });
  event.remove({ output: "blockus:dark_oak_small_logs" });
  event.remove({ output: "blockus:white_oak_small_logs" });
  
    // Chests to vanilla chest
  event.replaceInput({}, "minecraft:chest", "#c:wooden_chests");

  // barrel to vanilla barrel
  event.replaceInput({}, "minecraft:barrel", "#c:wooden_barrels");
});
