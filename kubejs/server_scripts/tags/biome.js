// priority: 110

/**
 * @file Biome Tag Modifications for Beyond the Horizon.
 * 
 * Documentation: https://kubejs.com/wiki/tutorials/tags
 */

/**
 * Biome Tag Event Handler
 */
ServerEvents.tags('worldgen/biome', event => {

  // Fill Snowy Moutain Biome tag.
  const snowy_biomes = event.get('forge:is_snowy').getObjectIds();
  const mountain_biomes = event.get('minecraft:is_mountain').getObjectIds();
  snowy_biomes.forEach(snowyBiomeID => {
    mountain_biomes.forEach(mountainBiomeID => {
      if (snowyBiomeID == mountainBiomeID) {
        event.add('bth:is_snowy_mountain', mountainBiomeID);
      }
    });
  });

  // Eidolon - Stray Towers only in snowy mountains.
  event.removeAll('eidolon:has_structure/stray_tower_biomes');
  event.add('eidolon:has_structure/stray_tower_biomes', '#bth:is_snowy_mountain');

  // TOTW - Only allow towers to spawn in mountains, and disable the broken 'derelict' towers.
  event.removeAll('totw_modded:has_structure/badlands_tower');
  event.removeAll('totw_modded:has_structure/derelict_tower');
  event.removeAll('totw_modded:has_structure/derelict_grass_tower');
  event.removeAll('totw_modded:has_structure/desert_tower');
  event.removeAll('totw_modded:has_structure/ice_tower');
  event.add('totw_modded:has_structure/ice_tower', '#bth:is_snowy_mountain');
  event.removeAll('totw_modded:has_structure/jungle_tower');
  event.removeAll('totw_modded:has_structure/ocean_tower');
  event.removeAll('totw_modded:has_structure/ocean_warm_tower');
  event.removeAll('totw_modded:has_structure/regular_tower');
  event.add('totw_modded:has_structure/regular_tower', '#minecraft:is_mountain');

});
