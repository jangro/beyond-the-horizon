// priority: 110

/**
 * @file Creative Mode Tab modifications for Beyond the Horizon.
 * 
 * Note: Adding things to creative mode tabs also makes them visible in JEI.
 * 
 */

StartupEvents.modifyCreativeTab('minecraft:combat', event => {
  event.add('bth:coconut_maul');
  event.add('bth:terminus');
});

StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
  event.add('minecraft:bundle');
});
