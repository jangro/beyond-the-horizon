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
  if (!event.server.persistentData.contains('gamerules_v2')){
    console.log('Setting gamerules v2');
    event.server.persistentData.put('gamerules_v2', true);
    event.server.runCommandSilent('/gamerule xpOnDeath true');
    event.server.runCommandSilent('/gamerule xpDecaySetting 20');
    event.server.runCommandSilent('/gamerule spawnDeadBody -1');
    event.server.runCommandSilent('/gamerule spiritItemDisable true');
  }
});
