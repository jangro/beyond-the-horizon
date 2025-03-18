// priority: 5                  

/**
 * @file Server Loaded Script
 * 
 * Useful for setting things like modded gamerules, or other server-wide settings.
 */

/**
 * Server loaded event handler
 */
ServerEvents.loaded(event => {
  if (!event.server.persistentData.contains('gamerules_v1')){
    console.log('Setting gamerules v1');
    event.server.persistentData.put('gamerules_v1', true);
    event.server.runCommandSilent('/gamerule doFireTick false');
    event.server.runCommandSilent('/gamerule keepWallet true');
    event.server.runCommandSilent('/gamerule artifacts.rootedBoots.enabled false');
  } 
});
