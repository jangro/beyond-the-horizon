// priority: 110

/**
 * @file Biome Tag Modifications for Beyond the Horizon.
 */

/**
 * Biome Tag Event Handler
 */
ServerEvents.tags('worldgen/biome', event => {

  // Only allow towers to spawn in mountains
  event.get('totw_modded:has_structure/desert_tower').removeAll();
  event.get('totw_modded:has_structure/ice_tower').removeAll();
  event.add('totw_modded:has_structure/ice_tower', [
    'minecraft:frozen_peak',
  ]);
  event.get('totw_modded:has_structure/derelict_tower').removeAll();
  event.add('totw_modded:has_structure/derelict_tower', [
    '#minecraft:is_mountain',
  ]);
  event.get('totw_modded:has_structure/derelict_grass_tower').removeAll();
  event.get('totw_modded:has_structure/jungle_tower').removeAll();
  event.get('totw_modded:has_structure/badlands_tower').removeAll();
  event.get('totw_modded:has_structure/ocean_warm_tower').removeAll();
  event.get('totw_modded:has_structure/ocean_tower').removeAll();
  event.get('totw_modded:has_structure/regular_tower').removeAll();
  event.add('totw_modded:has_structure/regular_tower', [
    '#minecraft:is_mountain',
  ]);

});
