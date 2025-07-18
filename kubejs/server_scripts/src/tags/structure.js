// priority: 110

/**
 * @file Structure Tag Modifications for Beyond the Horizon.
 *
 * Documentation: https://kubejs.com/wiki/tutorials/tags
 */

/**
 * Structure Tag Event Handler
 */
ServerEvents.tags('worldgen/structure', event => {
  // Beyond the Horizon Tags
  event.add('bth_structures:tower', [
    'bth_structures:tower_forest',
    'bth_structures:tower_frozen',
    'bth_structures:tower_scarlet',
  ]);

  event.add('bth_structures:tower_skylands', [
    'bth_structures:tower_forest_skylands_autumn',
    'bth_structures:tower_forest_skylands_spring',
    'bth_structures:tower_forest_skylands_summer',
    'bth_structures:tower_frozen_skylands_winter',
  ]);

  event.add('bth:common', [
    'ars_nouveau:guardian_wilden_den',
    'ars_nouveau:hunter_wilden_den',
    'ars_nouveau:stalker_wilden_den',
    'betterjungletemples:jungle_temple',
    'bth_structures:aether_portal_floating',
    'bth_structures:aether_portal_framed',
    'bth_structures:battle_grounds',
    'bth_structures:dw20',
    'bth_structures:elven_gateway',
    'bth_structures:magician_house',
    'bth_structures:ruined_hangar',
    'bth_structures:tinkerer_house',
    'bth_structures:wagon',
    'graveyard:dead_tree',
    'graveyard:haunted_house',
    'graveyard:medium_graveyard',
    'graveyard:mushroom_grave',
    'graveyard:small_graveyard',
    'idas:ancient_mines',
    'idas:animal_den/forest_den',
    'idas:animal_den/polar_bear_den',
    'idas:apothecary_abode',
    'idas:bearclaw_inn',
    'idas:beekeepers_house',
    'idas:brickhouse',
    'idas:castle',
    'idas:cottage',
    'idas:desert_market/desert_market',
    'idas:desert_market/desert_market_red',
    'idas:dig_site/dig_site',
    'idas:enchantingtower',
    'idas:farmhouse',
    'idas:fishermans_lodge',
    'idas:frozen_crypt',
    'idas:hermits_hollow',
    'idas:hunters_cabin',
    'idas:pillager_camp',
    'idas:redhorn_guild',
    'idas:witches_treestump',
    'idas:wizard_tower',
    'irons_spellbooks:evoker_fort',
    'irons_spellbooks:impaled_icebreaker',
    'irons_spellbooks:mangrove_hut',
    'irons_spellbooks:mountain_tower',
    'irons_spellbooks:pyromancer_tower',
    'minecraft:ruined_portal',
    'minecraft:ruined_portal_desert',
    'minecraft:ruined_portal_jungle',
    'minecraft:ruined_portal_mountain',
    'minecraft:ruined_portal_swamp',
    'nebulusoaktree:oak_tree',
    'valhelsia_structures:big_tree',
    'valhelsia_structures:castle',
    'valhelsia_structures:castle_ruin',
    'valhelsia_structures:desert_house',
    'valhelsia_structures:forge',
    'valhelsia_structures:player_house',
    'valhelsia_structures:spawner_dungeon',
    'valhelsia_structures:tower_ruin',
    'valhelsia_structures:witch_hut',
  ]);

  event.add('bth:rare', [
    'ae2:meteorite',
    'idas:ars_nouveau/archmages_tower',
    'idas:bazaar',
    'idas:desert_pyramid',
    'idas:dig_site/dig_site_desert',
    'idas:labyrinth',
    'idas:pillager_fortress',
    'idas:ruins_of_the_deep',
    'idas:tinkers_citadel',
    'idas:tinkers_workshop',
    'idas:train_ruins',
    'idas:tree_of_wisdom',
    'idas:treetop_tavern',
    'idas:winter_wagon',
    'minecolonies:amazon_camp',
    'minecolonies:barbarian_camp',
    'minecolonies:desert_camp',
    'minecolonies:ship',
  ]);

  event.add('bth:submerged', [
    'betteroceanmonuments:ocean_monument',
    'idas:sunken_ship/sunken_ship',
    'seavil:undersea_village',
  ]);

  event.add('bth:skylands', [
    'bth:skylands_abandoned_farm',
    'bth:skylands_brickhouse',
    'bth:skylands_cottage',
    'bth:skylands_polar_den',
    'bth_structures:tower_forest_skylands_autumn',
    'bth_structures:tower_forest_skylands_spring',
    'bth_structures:tower_forest_skylands_summer',
    'bth_structures:tower_frozen_skylands_winter',
  ]);

  event.add('bth:in_spooky', [
    'graveyard:dead_tree',
    'graveyard:haunted_house',
    'graveyard:medium_graveyard',
    'graveyard:small_graveyard',
    'idas:haunted_manor',
    'bth_structures:magician_house',
    'graveyard:has_structure/mushroom_grave',
    'idas:pillager_camp',
    'idas:witches_treestump',
    'idas:wizard_tower',
  ]);

  event.add('bth:in_plains', [
    'bth_structures:dw20',
    'bth_structures:wagon',
    'idas:farmhouse',
    'idas:hermits_hollow',
    'nebulusoaktree:oak_tree',
  ]);

  event.add('bth:in_meadow', [
    'bth_structures:ruined_hangar',
    'idas:dig_site/dig_site',
    'valhelsia_structures:big_tree',
    'valhelsia_structures:spawner_dungeon',
  ]);

  event.add('bth:in_taiga', [
    'idas:bearclaw_inn',
    'idas:hunters_cabin',
    'valhelsia_structures:forge',
  ]);

  event.add('bth:camps', [
    'idas:lumber_camp/lumber_camp_acacia',
    'idas:lumber_camp/lumber_camp_birch',
    'idas:lumber_camp/lumber_camp_dark_oak',
    'idas:lumber_camp/lumber_camp_jungle',
    'idas:lumber_camp/lumber_camp_oak',
    'idas:lumber_camp/lumber_camp_spruce',
    'idas:washing_camp',
  ]);

  event.add('bth:in_birch', [
    'idas:ancient_mines',
    'idas:brickhouse',
    'idas:cottage',
  ]);

  event.add('bth:in_forested_highlands', [
    'idas:castle',
    'idas:redhorn_guild',
    'valhelsia_structures:castle',
  ]);

  event.add('bth:pillager_outposts', [
    'minecraft:pillager_outpost',
    'towns_and_towers:pillager_outpost_badlands',
    'towns_and_towers:pillager_outpost_beach',
    'towns_and_towers:pillager_outpost_birch_forest',
    'towns_and_towers:pillager_outpost_desert',
    'towns_and_towers:pillager_outpost_flower_forest',
    'towns_and_towers:pillager_outpost_forest',
    'towns_and_towers:pillager_outpost_grove',
    'towns_and_towers:pillager_outpost_jungle',
    'towns_and_towers:pillager_outpost_meadow',
    'towns_and_towers:pillager_outpost_mushroom_fields',
    'towns_and_towers:pillager_outpost_ocean',
    'towns_and_towers:pillager_outpost_old_growth_taiga',
    'towns_and_towers:pillager_outpost_savanna',
    'towns_and_towers:pillager_outpost_savanna_plateau',
    'towns_and_towers:pillager_outpost_snowy_beach',
    'towns_and_towers:pillager_outpost_snowy_plains',
    'towns_and_towers:pillager_outpost_snowy_slopes',
    'towns_and_towers:pillager_outpost_sparse_jungle',
    'towns_and_towers:pillager_outpost_sunflower_plains',
    'towns_and_towers:pillager_outpost_swamp',
    'towns_and_towers:pillager_outpost_taiga',
    'towns_and_towers:pillager_outpost_snowy_taiga',
    'towns_and_towers:pillager_outpost_wooded_badlands',
    'towns_and_towers:exclusives/pillager_outpost_mediterranean',
    'towns_and_towers:exclusives/pillager_outpost_tudor',
    'towns_and_towers:exclusives/pillager_outpost_classic',
    'towns_and_towers:exclusives/pillager_outpost_oriental',
    'towns_and_towers:exclusives/pillager_outpost_swedish',
    'towns_and_towers:exclusives/pillager_outpost_iberian',
    'towns_and_towers:exclusives/pillager_outpost_rustic',
    'ctov:pillager_outpost_beach',
    'ctov:pillager_outpost_dark_forest',
    'ctov:pillager_outpost_desert',
    'ctov:pillager_outpost_jungle',
    'ctov:pillager_outpost_badlands',
    'ctov:pillager_outpost_mountain',
    'ctov:pillager_outpost_plains',
    'ctov:pillager_outpost_savanna',
    'ctov:pillager_outpost_snowy',
    'ctov:pillager_outpost_swamp',
    'ctov:pillager_outpost_taiga',
  ]);

  event.add('bth:villages', [
    'ctov:large/village_beach',
    'ctov:large/village_christmas',
    'ctov:large/village_desert',
    'ctov:large/village_desert_oasis',
    'ctov:large/village_dark_forest',
    'ctov:large/village_jungle',
    'ctov:large/village_jungle_tree',
    'ctov:large/village_mesa',
    'ctov:large/village_mesa_fortified',
    'ctov:large/village_mountain',
    'ctov:large/village_mountain_alpine',
    'ctov:large/village_mushroom',
    'ctov:large/village_plains',
    'ctov:large/village_plains_fortified',
    'ctov:large/village_savanna',
    'ctov:large/village_savanna_na',
    'ctov:large/village_snowy_igloo',
    'ctov:large/village_swamp',
    'ctov:large/village_swamp_fortified',
    'ctov:large/village_taiga',
    'ctov:large/village_taiga_fortified',
    'ctov:medium/village_beach',
    'ctov:medium/village_christmas',
    'ctov:medium/village_desert',
    'ctov:medium/village_desert_oasis',
    'ctov:medium/village_dark_forest',
    'ctov:medium/village_jungle',
    'ctov:medium/village_jungle_tree',
    'ctov:medium/village_mesa',
    'ctov:medium/village_mesa_fortified',
    'ctov:medium/village_mountain',
    'ctov:medium/village_mountain_alpine',
    'ctov:medium/village_mushroom',
    'ctov:medium/village_plains',
    'ctov:medium/village_plains_fortified',
    'ctov:medium/village_savanna',
    'ctov:medium/village_savanna_na',
    'ctov:medium/village_snowy_igloo',
    'ctov:medium/village_swamp',
    'ctov:medium/village_swamp_fortified',
    'ctov:medium/village_taiga',
    'ctov:medium/village_taiga_fortified',
    'ctov:small/village_beach',
    'ctov:small/village_christmas',
    'ctov:small/village_desert',
    'ctov:small/village_desert_oasis',
    'ctov:small/village_dark_forest',
    'ctov:small/village_jungle',
    'ctov:small/village_jungle_tree',
    'ctov:small/village_mesa',
    'ctov:small/village_mesa_fortified',
    'ctov:small/village_mountain',
    'ctov:small/village_mountain_alpine',
    'ctov:small/village_mushroom',
    'ctov:small/village_plains',
    'ctov:small/village_plains_fortified',
    'ctov:small/village_savanna',
    'ctov:small/village_savanna_na',
    'ctov:small/village_snowy_igloo',
    'ctov:small/village_swamp',
    'ctov:small/village_swamp_fortified',
    'ctov:small/village_taiga',
    'ctov:small/village_taiga_fortified',
    'towns_and_towers:village_badlands',
    'terralith:fortified_village',
    'terralith:fortified_desert_village',
    'towns_and_towers:village_beach',
    'towns_and_towers:village_birch_forest',
    'towns_and_towers:village_flower_forest',
    'towns_and_towers:village_forest',
    'towns_and_towers:village_snowy_slopes',
    'towns_and_towers:village_jungle',
    'towns_and_towers:village_meadow',
    'towns_and_towers:village_mushroom_fields',
    'towns_and_towers:village_ocean',
    'towns_and_towers:village_old_growth_taiga',
    'towns_and_towers:village_grove',
    'towns_and_towers:village_savanna_plateau',
    'towns_and_towers:village_sunflower_plains',
    'towns_and_towers:village_snowy_taiga',
    'towns_and_towers:village_sparse_jungle',
    'towns_and_towers:village_swamp',
    'towns_and_towers:village_wooded_badlands',
    'towns_and_towers:exclusives/village_mediterranean',
    'towns_and_towers:exclusives/village_swedish',
    'towns_and_towers:exclusives/village_tudor',
    'towns_and_towers:exclusives/village_wandering_trader_camp',
    'towns_and_towers:exclusives/village_classic',
    'towns_and_towers:exclusives/village_rustic',
    'towns_and_towers:exclusives/village_iberian',
    'towns_and_towers:exclusives/village_nilotic',
    'towns_and_towers:exclusives/village_piglin',
  ]);

  // Minecraft Tags

  // Forge Tags

  // Supplementaries Tags
  event.add('supplementaries:way_sign_destinations', [
    'bth_structures:tower_forest',
    'bth_structures:tower_frozen',
    'bth_structures:tower_scarlet',
    'bth_structures:ruined_hangar',
    'bth_structures:tinkerer_house',
    'bth_structures:magician_house',
    'bth_structures:dw20',
    'bth_structures:wagon',
  ]);

});
