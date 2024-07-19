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

  // This list contain all biomes with is_mountain tag. Commented out are the less mountainous ones.
  const tower_mountains = [
    // 'minecraft:cherry_grove',
    'minecraft:frozen_peaks',
    'minecraft:jagged_peaks',
    'minecraft:snowy_slopes',
    'minecraft:stony_peaks',
    'terralith:caldera',
    'terralith:emerald_peaks',
    'terralith:rocky_mountains',
    // 'terralith:scarlet_mountains'
    // 'terralith:volcanic_peaks',
    // 'terralith:snowy_cherry_grove',
  ];

  // Create mountain tag for towers (more mountainous mountains than regular is_mountain).
  event.add('bth:is_tower_mountain', tower_mountains);

  // Create biome tag for scarlet tower
  event.add('bth:is_scarlet_tower_mountain', 'terralith:scarlet_mountains');
  event.add('bth:is_scarlet_tower_mountain', 'terralith:volcanic_peaks');

  // Fill Snowy Moutain Biome tag.
  const snowy_biomes = event.get('forge:is_snowy').getObjectIds();
  const tower_mountain_biomes = event.get('bth:is_tower_mountain').getObjectIds();
  snowy_biomes.forEach(snowyBiomeID => {
    tower_mountain_biomes.forEach(mountainBiomeID => {
      if (snowyBiomeID == mountainBiomeID) {
        event.add('bth:is_frozen_tower_mountain', mountainBiomeID);
        event.get('bth:is_tower_mountain').remove(mountainBiomeID);
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

    'bth_structures:has_structure/tower_forest',
    'bth_structures:has_structure/tower_frozen',
    'bth_structures:has_structure/tower_scarlet',

    'terralith:has_structure/witch_hut',

    // XXX: Remove this one for one. The exclusion_zone option doesn't work and I don't
    // want the meadow tower to spawn too close to the mountain towers.
    'bth_structures:has_structure/tower_forest_meadow',

    // We plan to have spires only generate in Glacio when adding Ad Astra so disable it here
    'terralith:has_structure/spire',

  ].forEach((tag) => event.removeAll(tag));

  // Eidolon - Stray Towers spawn only in snowy mountains.
  event.add('eidolon:has_structure/stray_tower_biomes', '#bth:is_frozen_tower_mountain');

  // BTH - Tower biome settings
  event.add('bth_structures:has_structure/tower_frozen', '#bth:is_frozen_tower_mountain');
  event.add('bth_structures:has_structure/tower_forest', '#bth:is_tower_mountain');
  event.add('bth_structures:has_structure/tower_scarlet', '#bth:is_scarlet_tower_mountain');

  // Prevent hunter's houses from spawning in yellowstone biomes. Yellowstone biome is tagged
  // #minecraft:is_taiga and hunter houses generate in that tag so we have to remove all, then add
  // back only the biomes we want.
  event.removeAll('hunters_return:has_structure/hunter_house');
  event.add('hunters_return:has_structure/hunter_house', [
    '#minecraft:is_forest',
    'minecraft:taiga',
    'minecraft:snowy_taiga',
    'minecraft:old_growth_pine_taiga',
    'minecraft:old_growth_spruce_taiga'
  ]);

  // Prevent jungle temples from spawning in Ratlantis (how to remove a single biome (rats:ratlantis?)
  // [Vaelzan]: It uses the Minecraft jungle temple tag by default, so that might be why you couldn't remove the individual biome.
  // TODO: It's probably better to modify that tag instead and leave YUNG's one alone?
  event.removeAll('betterjungletemples:has_structure/better_jungle_temple');
  event.add('betterjungletemples:has_structure/better_jungle_temple', ['minecraft:jungle', 'minecraft:sparse_jungle', 'minecraft:bamboo_jungle']);

});
