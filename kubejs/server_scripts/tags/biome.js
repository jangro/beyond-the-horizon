// priority: 110

/**
 * @file Biome Tag Modifications for Beyond the Horizon.
 */

/**
 * Biome Tag Event Handler
 */
ServerEvents.tags('worldgen/biome', event => {
  
  // This example is currently pointless - it removes all the tags for the regular tower and then adds the same ones back in.
  // It's purely informative at this point. :)
  event.get('totw_modded:has_structure/regular_tower').removeAll();
  event.add('totw_modded:has_structure/regular_tower', [
    '#minecraft:is_taiga',
    'minecraft:plains',
    'minecraft:sunflower_plains',
    'minecraft:savanna',
    '#minecraft:is_forest',
    'minecraft:swamp',
    '#minecraft:is_mountain',
    '#minecraft:is_hill',
  ]);

});