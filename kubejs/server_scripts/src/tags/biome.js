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
    'bth_structures:has_structure/tower_forest',
    'bth_structures:has_structure/tower_frozen',
    'bth_structures:has_structure/tower_scarlet',

    'eidolon:has_structure/stray_tower_biomes',

    'graveyard:has_structure/altar',
    'graveyard:has_structure/dead_tree',
    'graveyard:has_structure/haunted_house',
    'graveyard:has_structure/giant_mushroom',
    'graveyard:has_structure/large_graveyard',
    'graveyard:has_structure/medium_graveyard',
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

    'irons_spellbooks:has_structure/evoker_fort',
    'irons_spellbooks:has_structure/mountain_tower',
    'irons_spellbooks:has_structure/pyromancer_tower',

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

    'paraglider:has_structure/nether_horned_statue',
    'paraglider:has_structure/tarrey_town_goddess_statue',
    'paraglider:has_structure/underground_horned_statue',

    'ribbits:has_structure/ribbit_village',

    'terralith:has_structure/desert_outpost',
    'terralith:has_structure/fortified_village',
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

    'valhelsia_structures:has_structure/big_tree',
    'valhelsia_structures:has_structure/has_forge',
    'valhelsia_structures:has_structure/player_house',
    'valhelsia_structures:has_structure/spawner_dungeon',

  ].forEach((tag) => event.removeAll(tag));

  // BTH
  event.add('bth:house_biomes', ['minecraft:flower_forest', 'minecraft:forest', 'minecraft:cherry_grove', 'terralith:sakura_grove', 'terralith:sakura_valley']);
  event.add('bth:spooky_biomes', ['nyctophobia:haunted_forest', 'nyctophobia:tall_dark_forest']);

  // BTH Structures
  event.add('bth_structures:has_structure/tower_frozen', '#bth:is_frozen_tower_biome');
  event.add('bth_structures:has_structure/tower_forest', '#bth:is_forest_tower_biome');
  event.add('bth_structures:has_structure/tower_scarlet', '#bth:is_scarlet_tower_biome');

  // Eidolon - Stray Towers spawn only in snowy mountains.
  event.add('eidolon:has_structure/stray_tower_biomes', '#bth:is_frozen_tower_biome');

  // The Graveyard
  event.add('graveyard:has_structure/haunted_house', ['nyctophobia:haunted_forest']);
  event.add('graveyard:has_structure/medium_graveyard', ['#bth:spooky_biomes']);
  event.add('graveyard:has_structure/small_grave', ['#bth:spooky_biomes']);
  event.add('graveyard:has_structure/ruins', ['#bth:spooky_biomes']);
  event.add('graveyard:has_structure/giant_mushroom', ['minecraft:mushroom_fields']);

  // Haunted Harvest
  event.add('hauntedharvest:has_abandoned_farm', ['nyctophobia:haunted_forest']);

  // Iron's Spellbooks
  event.add('irons_spellbooks:has_structure/evoker_fort', ['minecraft:snowy_plains']);
  event.add('irons_spellbooks:has_structure/mountain_tower', ['minecraft:stony_peaks', 'terralith:rocky_mountains']);
  event.add('irons_spellbooks:has_structure/pyromancer_tower', ['terralith:volcanic_peaks', 'terralith:scarlet_mountains', 'terralith:yellowstone']);

  // Integrated Dungeons and Structures (IDAS)
  event.add('bth_idas:brickhouse_biomes', ['minecraft:birch_forest']);
  event.add('bth_idas:castle_biomes', ['terralith:forested_highlands']);
  event.add('bth_idas:cottage_biomes', ['minecraft:old_growth_birch_forest']);
  event.add('bth_idas:enchanting_tower_biomes', ['ars_nouveau:archwood_forest']);
  event.add('bth_idas:pillager_camp_biomes', ['minecraft:dark_forest']);
  event.add('bth_idas:wizard_tower_biomes', ['minecraft:dark_forest']);
  event.add('bth_idas:tinkers_workshop_biomes', ['minecraft:savanna_plateau']);
  event.add('bth_idas:tinkers_citadel_biomes', ['terralith:savanna_badlands']);
  event.add('idas:has_structure/ancient_mines_biomes', ['minecraft:old_growth_birch_forest']);
  event.add('idas:has_structure/apothecary_abode_biomes', ['terralith:lavender_forest', 'terralith:lavender_valley', 'terralith:moonlight_valley']);
  event.add('idas:has_structure/archmages_tower_biomes', ['terralith:moonlight_grove', 'terralith:moonlight_valley']);
  event.add('idas:has_structure/bearclaw_inn_biomes', ['minecraft:old_growth_spruce_taiga', 'minecraft:old_growth_pine_taiga']);
  event.add('idas:has_structure/beekeepers_house_biomes', ['minecraft:forest']);
  event.add('idas:has_structure/dig_site_biomes', ['minecraft:plains', 'minecraft:meadow', 'terralith:highlands']);
  event.add('idas:has_structure/farmhouse_biomes', ['terralith:brushland']);
  event.add('idas:has_structure/hauntedhouse_biomes', ['nyctophobia:deep_dark_forest']);
  event.add('idas:has_structure/hermits_hollow_biomes', ['minecraft:plains']);
  event.add('idas:has_structure/hunters_cabin_biomes', ['terralith:highlands', 'terralith:forested_highlands', 'terralith:lush_valley']);
  event.add('idas:has_structure/pillager_fortress_biomes', ['terralith:shield', 'terralith:snowy_shield', 'terralith:alpine_highlands']);
  event.add('idas:has_structure/polar_bear_den_biomes', ['minecraft:snowy_plains']);
  event.add('idas:has_structure/red_desert_biomes', ['terralith:ancient_sands', 'terralith:bryce_canyon']);
  event.add('idas:has_structure/redhorn_guild_biomes', ['terralith:forested_highlands']);
  event.add('idas:has_structure/ruins_of_the_deep_biomes', ['minecraft:taiga']);
  event.add('idas:has_structure/train_ruins_biomes', ['terralith:highlands']);
  event.add('idas:has_structure/tree_of_wisdom_biomes', ['minecraft:dark_forest', 'nyctophobia:deep_dark_forest', 'terralith:blooming_valley']);
  event.add('idas:has_structure/witches_treestump_biomes', ['minecraft:dark_forest']);

  // Nebulus Oak Tree (the medium sized custom tree)
  event.add('bth:nebulus_tree_biomes', ['minecraft:plains']);

  // Ribbit village
  event.add('ribbits:has_structure/ribbit_village', ['minecraft:swamp']);

  // Terralith
  event.add('terralith:has_structure/mage_complex', ['terralith:moonlight_grove', 'terralith:moonlight_valley']);

  // Valhelsia Structures
  event.add('valhelsia_structures:has_structure/big_tree', ['minecraft:meadow']);
  event.add('valhelsia_structures:has_structure/player_house', ['#bth:house_biomes']);
  event.add('valhelsia_structures:has_structure/spawner_dungeon', ['#minecraft:is_forest']);

  // Prevent jungle temples from spawning in Ratlantis
  event.removeAll('minecraft:has_structure/jungle_temple');
  event.add('minecraft:has_structure/jungle_temple', ['minecraft:jungle', 'minecraft:bamboo_jungle']);

});
