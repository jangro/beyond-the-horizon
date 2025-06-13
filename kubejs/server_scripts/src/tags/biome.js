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
  event.get('bth:is_forest_tower_biome').remove('minecraft:meadow');

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
    // These have a shaft leading up to skylands so limit biomes or remove completely to avoid that
    'bettermineshafts:has_structure/better_mineshaft_overgrown',
    'bettermineshafts:has_structure/better_mineshaft_lush',

    'bth_structures:has_structure/tower_forest',
    'bth_structures:has_structure/tower_frozen',
    'bth_structures:has_structure/tower_scarlet',
    'bth_structures:magician_house',

    'eidolon:has_structure/stray_tower_biomes',

    // This structure possibly cause chunky to hang so disable it
    'galosphere:has_structure/pink_salt_shrine',

    'graveyard:has_structure/altar',
    'graveyard:has_structure/dead_tree',
    'graveyard:has_structure/haunted_house',
    'graveyard:has_structure/giant_mushroom',
    'graveyard:has_structure/large_graveyard',
    'graveyard:has_structure/medium_graveyard',
    'graveyard:has_structure/mushroom_grave',
    'graveyard:has_structure/small_desert_grave',
    'graveyard:has_structure/small_desert_graveyard',
    'graveyard:has_structure/small_grave',
    'graveyard:has_structure/small_graveyard',
    'graveyard:has_structure/small_mountain_grave',
    'graveyard:has_structure/small_savanna_grave',
    'graveyard:has_structure/ruins',

    'hauntedharvest:has_abandoned_farm',

    'idas:has_structure/ancient_mines_biomes',
    'idas:has_structure/apothecary_abode_biomes',
    'idas:has_structure/archmages_tower_biomes',
    'idas:has_structure/bearclaw_inn_biomes',
    'idas:has_structure/beekeepers_house_biomes',
    'idas:has_structure/dig_site_biomes',
    'idas:has_structure/farmhouse_biomes',
    'idas:has_structure/hauntedhouse_biomes',
    'idas:has_structure/hunters_cabin_biomes',
    'idas:has_structure/hermits_hollow_biomes',
    'idas:has_structure/pillager_fortress_biomes',
    'idas:has_structure/polar_bear_den_biomes',
    'idas:has_structure/red_desert_biomes',
    'idas:has_structure/redhorn_guild_biomes',
    'idas:has_structure/ruins_of_the_deep_biomes',
    'idas:has_structure/sunken_ship_coral_biomes',
    'idas:has_structure/tree_of_wisdom_biomes',
    'idas:has_structure/witches_treestump_biomes',

    'integrated_stronghold:has_structure/integrated_stronghold',

    'irons_spellbooks:has_structure/evoker_fort',
    'irons_spellbooks:has_structure/mountain_tower',
    'irons_spellbooks:has_structure/pyromancer_tower',

    'lost_aether_content:has_pink_aerclouds',

    // Remove abandoned colonies completely
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

    // Adjust biomes for barbarian camps
    'minecolonies:has_structure/barbarian_camp',

    'paraglider:has_structure/nether_horned_statue',
    'paraglider:has_structure/tarrey_town_goddess_statue',
    'paraglider:has_structure/underground_horned_statue',

    'ribbits:has_structure/ribbit_village',

    'terralith:has_structure/desert_outpost',
    'terralith:has_structure/mage_complex',
    'terralith:has_structure/mage_tower',
    'terralith:has_structure/rubble_desert',
    'terralith:has_structure/rubble_forest',
    'terralith:has_structure/rubble_forest',
    'terralith:has_structure/rubble_jungle',
    'terralith:has_structure/rubble_mesa',
    'terralith:has_structure/rubble_mountain',
    'terralith:has_structure/spire', // save for Ad Astra's Glacio
    'terralith:has_structure/witch_hut',

    'tetra:has_structure/forged_ruins',

    'valhelsia_structures:has_structure/big_tree',
    'valhelsia_structures:has_structure/castle',
    'valhelsia_structures:has_structure/has_forge',
    'valhelsia_structures:has_structure/player_house',
    'valhelsia_structures:has_structure/spawner_dungeon',

  ].forEach((tag) => event.removeAll(tag));

  //
  // BTH: Set biomes for each structure set in bth:worldgen/structure_set/*
  //

  // BTH: Birch forest
  [
    'bth_idas:brickhouse_biomes',
    'bth_idas:cottage_biomes',
    'idas:has_structure/ancient_mines_biomes',
  ].forEach((tag) => event.add(tag, ['minecraft:birch_forest', 'minecraft:old_growth_birch_forest']));

  // BTH: Forested highlands
  [
    'bth_idas:castle_biomes',
    'idas:has_structure/redhorn_guild_biomes',
    'valhelsia_structures:has_structure/castle',
  ].forEach((tag) => event.add(tag, ['terralith:forested_highlands']));

  // BTH: Meadow
  [
    'bth_structures:ruined_hangar',
    'idas:has_structure/dig_site_biomes',
    'valhelsia_structures:has_structure/spawner_dungeon',
  ].forEach((tag) => event.add(tag, ['minecraft:meadow']));

  // BTH: Plains
  [
    'idas:has_structure/farmhouse_biomes',
    'idas:has_structure/hermits_hollow_biomes',
    'nebulusoaktree:oak_tree_biomes',
  ].forEach((tag) => event.add(tag, ['minecraft:plains']));

  // BTH: Sparse jungle
  [
    'idas:has_structure/hermits_hollow_biomes',
  ].forEach((tag) => event.add(tag, ['minecraft:sparse_jungle']));

  // BTH: Spooky
  [
    'bth_idas:pillager_camp_biomes',
    'bth_idas:wizard_tower_biomes',
    'bth_structures:magician_house',
    'graveyard:has_structure/mushroom_grave',
    'idas:has_structure/witches_treestump_biomes',
    'graveyard:has_structure/dead_tree',
    'graveyard:has_structure/haunted_house',
    'graveyard:has_structure/medium_graveyard',
    'graveyard:has_structure/small_graveyard',
    'graveyard:has_structure/ruins',
    'idas:has_structure/hauntedhouse_biomes', // this one doesn't generate for some reason...
  ].forEach((tag) => event.add(tag, ['minecraft:dark_forest', 'nyctophobia:deep_dark_forest']));

  // BTH: Taiga
  [
    'idas:has_structure/bearclaw_inn_biomes',
    'idas:has_structure/hunters_cabin_biomes',
    'valhelsia_structures:has_structure/has_forge',
  ].forEach((tag) => event.add(tag, ['minecraft:taiga', 'minecraft:old_growth_spruce_taiga', 'minecraft:old_growth_pine_taiga']));

  // Houses from various mods
  event.add('bth:house_biomes', ['terralith:blooming_valley', 'terralith:arid_highlands', 'terralith:brushland',
                                 'minecraft:flower_forest', 'minecraft:forest', 'minecraft:cherry_grove',
                                 'terralith:sakura_grove', 'terralith:sakura_valley']);

  // Better Mineshafts (don't let this generate under skylands)
  event.add('bettermineshafts:has_structure/better_mineshaft_overgrown', ['minecraft:old_growth_birch_forest', 'minecraft:old_growth_spruce_taiga', 'minecraft:old_growth_pine_taiga']);

  // BTH Aether portals
  event.add('bth_structures:has_structure/aether_portal_framed', ['terralith:lavender_forest', 'terralith:lavender_valley', 'terralith:moonlight_grove', 'terralith:moonlight_valley']);

  // BTH Towers
  event.add('bth_structures:has_structure/tower_frozen', '#bth:is_frozen_tower_biome');
  event.add('bth_structures:has_structure/tower_forest', '#bth:is_forest_tower_biome');
  event.add('bth_structures:has_structure/tower_scarlet', '#bth:is_scarlet_tower_biome');

  // Eidolon - Stray Towers spawn only in snowy mountains.
  event.add('eidolon:has_structure/stray_tower_biomes', '#bth:is_frozen_tower_biome');

  event.add('graveyard:has_structure/ruins', ['terralith:shrubland']);
  event.add('graveyard:has_structure/dead_tree', ['terralith:ice_marsh']);

  // Iron's Spellbooks
  event.add('irons_spellbooks:has_structure/evoker_fort', ['minecraft:snowy_plains']);
  event.add('irons_spellbooks:has_structure/mountain_tower', ['minecraft:stony_peaks', 'terralith:rocky_mountains']);
  event.add('irons_spellbooks:has_structure/pyromancer_tower', ['terralith:volcanic_peaks', 'terralith:scarlet_mountains', 'terralith:yellowstone']);

  // Integrated Dungeons and Structures (IDAS)
  // Structures that are not part in our custom structure sets
  event.add('bth_idas:enchanting_tower_biomes', ['ars_nouveau:archwood_forest']);
  event.add('bth_idas:tinkers_workshop_biomes', ['minecraft:savanna', 'minecraft:savanna_plateau']);
  event.add('bth_idas:tinkers_citadel_biomes', ['terralith:savanna_badlands']);
  event.add('idas:has_structure/apothecary_abode_biomes', ['terralith:lavender_forest', 'terralith:lavender_valley', 'terralith:moonlight_valley']);
  event.add('idas:has_structure/archmages_tower_biomes', ['terralith:moonlight_grove', 'terralith:moonlight_valley']);
  event.add('idas:has_structure/beekeepers_house_biomes', ['minecraft:flower_forest']);
  event.add('idas:has_structure/pillager_fortress_biomes', ['terralith:shield', 'terralith:snowy_shield', 'terralith:alpine_highlands']);
  event.add('idas:has_structure/polar_bear_den_biomes', ['minecraft:snowy_plains']);
  event.add('idas:has_structure/red_desert_biomes', ['terralith:ancient_sands', 'terralith:bryce_canyon']);
  event.add('idas:has_structure/ruins_of_the_deep_biomes', ['minecraft:taiga']);
  event.add('idas:has_structure/train_ruins_biomes', ['terralith:brushland', 'terralith:highlands']);
  event.add('idas:has_structure/tree_of_wisdom_biomes', ['minecraft:dark_forest', 'nyctophobia:deep_dark_forest']);

  // Integrated Stronghold (prevent from generating in oceans)
  event.add('integrated_stronghold:has_structure/integrated_stronghold',
            ['#minecraft:is_mountain', '#minecraft:is_taiga', '#minecraft:is_plains', '#minecraft:is_desert', '#minecraft:is_badlands',
             '#minecraft:is_jungle', '#minecraft:is_taiga', '#minecraft:is_savanna', '#minecraft:is_hill', '#minecraft:is_forest']);

  // Haunted Harvest
  event.add('hauntedharvest:has_abandoned_farm', ['minecraft:forest']);

  // Ribbit village
  event.add('ribbits:has_structure/ribbit_village', ['minecraft:swamp']);

  // Terralith
  event.add('terralith:has_structure/mage_complex', ['terralith:moonlight_grove', 'terralith:moonlight_valley']);

  // Tetra (prevent ruins from generating in oceans by removing the #forge:is_cold/overworld biome tag)
  event.add('tetra:has_structure/forged_ruins', ['#minecraft:is_mountain', '#minecraft:is_taiga']);

  // Valhelsia Structures
  event.add('valhelsia_structures:has_structure/player_house', ['#bth:house_biomes']);

  // Prevent jungle temples from spawning in Ratlantis
  event.removeAll('minecraft:has_structure/jungle_temple');
  event.add('minecraft:has_structure/jungle_temple', ['minecraft:jungle', 'minecraft:bamboo_jungle']);

  // Cottage
  event.add('bth_idas:cottage_biomes', ['minecraft:stony_shore']);

  // MineColonies barbarian camp (snowy biomes removed)
  event.add('minecolonies:has_structure/barbarian_camp', [
    'minecraft:plains',
    '#forge:is_plains',
    'minecraft:sunflower_plains',
    'minecraft:forest',
    '#minecraft:is_forest',
    'minecraft:flower_forest',
    'minecraft:birch_forest',
    'minecraft:old_growth_birch_forest',
    'minecraft:windswept_hills',
    'minecraft:windswept_forest',
    'minecraft:meadow'
  ]);

});
