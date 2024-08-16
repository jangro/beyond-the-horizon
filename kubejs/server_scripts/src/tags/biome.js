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

  // Create biome tag for scarlet tower
  event.add('bth:is_scarlet_tower_biome', 'terralith:scarlet_mountains');
  event.add('bth:is_scarlet_tower_biome', 'terralith:volcanic_peaks');

  // Create biome tag for forest towers (snowy biomes removed below)
  event.add('bth:is_forest_tower_biome', event.get('minecraft:is_mountain').getObjectIds());

  // Fill Snowy Mountain Biome tag and remove snowy biomes from forest tower tag.
  const snowy_biomes = event.get('forge:is_snowy').getObjectIds();
  const forest_and_snowy_tower_biomes = event.get('bth:is_forest_tower_biome').getObjectIds();
  snowy_biomes.forEach(snowyBiomeID => {
    forest_and_snowy_tower_biomes.forEach(mountainBiomeID => {
      if (snowyBiomeID == mountainBiomeID) {
        event.add('bth:is_frozen_tower_biome', mountainBiomeID);
        event.get('bth:is_forest_tower_biome').remove(mountainBiomeID);
      }
    });
  });

  // Remove these structures from all biomes:
  [
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

    // We plan to have spires only generate in Glacio when adding Ad Astra so disable it here
    'terralith:has_structure/spire',

  ].forEach((tag) => event.removeAll(tag));

  // Eidolon - Stray Towers spawn only in snowy mountains.
  event.add('eidolon:has_structure/stray_tower_biomes', '#bth:is_frozen_tower_biome');

  // BTH - Tower biome settings
  event.add('bth_structures:has_structure/tower_frozen', '#bth:is_frozen_tower_biome');
  event.add('bth_structures:has_structure/tower_forest', '#bth:is_forest_tower_biome');
  event.add('bth_structures:has_structure/tower_scarlet', '#bth:is_scarlet_tower_biome');

  // Prevent jungle temples from spawning in Ratlantis (how to remove a single biome (rats:ratlantis?)
  // [Vaelzan]: It uses the Minecraft jungle temple tag by default, so that might be why you couldn't remove the individual biome.
  // TODO: It's probably better to modify that tag instead and leave YUNG's one alone?
  event.removeAll('betterjungletemples:has_structure/better_jungle_temple');
  event.add('betterjungletemples:has_structure/better_jungle_temple', ['minecraft:jungle', 'minecraft:sparse_jungle', 'minecraft:bamboo_jungle']);

});
