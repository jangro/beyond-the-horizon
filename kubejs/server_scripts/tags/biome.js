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

  // Remove unwanted When Dungeons Arise structures
  event.removeAll('dungeons_arise:has_structure/heavenly_challenger_biomes');
  event.removeAll('dungeons_arise:has_structure/heavenly_conqueror_biomes');
  event.removeAll('dungeons_arise:has_structure/heavenly_rider_biomes');
  event.removeAll('dungeons_arise:has_structure/illager_corsair_biomes');
  event.removeAll('dungeons_arise:has_structure/illager_galley_biomes');
  event.removeAll('dungeons_arise:has_structure/mechanical_nest_biomes');
  event.removeAll('dungeons_arise:has_structure/mushroom_house_biomes');
  event.removeAll('dungeons_arise:has_structure/mushroom_mines_biomes');
  event.removeAll('dungeons_arise:has_structure/scorched_mines_biomes');
  event.removeAll('dungeons_arise:has_structure/small_blimp_biomes');
  event.removeAll('dungeons_arise:has_structure/wishing_well_biomes');

  // Disable empty minecolonies
  event.removeAll('minecolonies:has_structure/asian_colony');
  event.removeAll('minecolonies:has_structure/caledonia_colony');
  event.removeAll('minecolonies:has_structure/colonial_colony');
  event.removeAll('minecolonies:has_structure/desertoasis_colony');
  event.removeAll('minecolonies:has_structure/incan_colony');
  event.removeAll('minecolonies:has_structure/lostmesacity_colony');
  event.removeAll('minecolonies:has_structure/medieval_birch_colony');
  event.removeAll('minecolonies:has_structure/medieval_dark_oak_colony');
  event.removeAll('minecolonies:has_structure/medieval_oak_colony');
  event.removeAll('minecolonies:has_structure/medieval_spruce_colony');
  event.removeAll('minecolonies:has_structure/shire_colony');
  event.removeAll('minecolonies:has_structure/warpednetherlands_colony');

});
