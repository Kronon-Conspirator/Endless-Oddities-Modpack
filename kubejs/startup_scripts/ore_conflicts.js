////////////////////////////////
///  Made by Chronos_Sacaria ///
////////////////////////////////

const ORES_TO_REMOVE = [
    // Platinum Mod
    //'platinum:platinum_ore', 'platinum:deepslate_platinum_ore',
    // Industrial Revolution
    //'indrev:silver_ore', 'indrev:deepslate_silver_ore', 'indrev:tin_ore', 'indrev:deepslate_tin_ore', 'indrev:tungsten_ore', 'indrev:deepslate_tungsten_ore',
    // Agape Space
    //'agape_space:aluminum_ore'
	// Bewitchment
	'bewitchment:salt_ore','bewitchment:silver_ore','bewitchment:deepslate_salt_ore','bewitchment:deepslate_silver_ore',
];

onEvent('worldgen.remove', event =>{
    event.removeOres(ores => {
        ores.blocks = ORES_TO_REMOVE;
    })
});