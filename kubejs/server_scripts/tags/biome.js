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

  // Remove these structures from all biomes:
  [
    'dungeons_arise:has_structure/heavenly_challenger_biomes',
    'dungeons_arise:has_structure/heavenly_conqueror_biomes',
    'dungeons_arise:has_structure/heavenly_rider_biomes',
    'dungeons_arise:has_structure/illager_corsair_biomes',
    'dungeons_arise:has_structure/illager_galley_biomes',
    'dungeons_arise:has_structure/mechanical_nest_biomes',
    'dungeons_arise:has_structure/mushroom_house_biomes',
    'dungeons_arise:has_structure/mushroom_mines_biomes',
    'dungeons_arise:has_structure/scorched_mines_biomes',
    'dungeons_arise:has_structure/small_blimp_biomes',
    'dungeons_arise:has_structure/wishing_well_biomes',

    'eidolon:has_structure/stray_tower_biomes',
    
    'minecolonies:has_structure/asian_colony',
    'minecolonies:has_structure/caledonia_colony',
    'minecolonies:has_structure/colonial_colony',
    'minecolonies:has_structure/desertoasis_colony',
    'minecolonies:has_structure/incan_colony',
    'minecolonies:has_structure/lostmesacity_colony',
    'minecolonies:has_structure/medieval_birch_colony',
    'minecolonies:has_structure/medieval_dark_oak_colony',
    'minecolonies:has_structure/medieval_oak_colony',
    'minecolonies:has_structure/medieval_spruce_colony',
    'minecolonies:has_structure/shire_colony',
    'minecolonies:has_structure/warpednetherlands_colony',

    'totw_modded:has_structure/badlands_tower',
    'totw_modded:has_structure/derelict_tower',
    'totw_modded:has_structure/derelict_grass_tower',
    'totw_modded:has_structure/desert_tower',
    'totw_modded:has_structure/ice_tower',
    'totw_modded:has_structure/jungle_tower',
    'totw_modded:has_structure/ocean_tower',
    'totw_modded:has_structure/ocean_warm_tower',
    'totw_modded:has_structure/regular_tower',

    'valhelsia_structures:has_structure/witch_hut',

  ].forEach((tag) => event.removeAll(tag));

  // Eidolon - Stray Towers spawn only in snowy mountains.
  event.add('eidolon:has_structure/stray_tower_biomes', '#bth:is_snowy_mountain');

  // TOTW - Regular Towers spawn only in mountains + Ice Towers in snowy mountains.
  event.add('totw_modded:has_structure/ice_tower', '#bth:is_snowy_mountain');
  event.add('totw_modded:has_structure/regular_tower', '#minecraft:is_mountain');
});
