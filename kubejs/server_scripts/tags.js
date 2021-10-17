
////////////////////////////////
/// Made by MrBones         /// 
/// based on All of Fabric ///
/////////////////////////////

settings.useOriginalRecipeForFilters = true
events.listen('item.tags', event => {
	event.add("dankstorage:blacklisted_storage", 'minecraft:stone');
});
