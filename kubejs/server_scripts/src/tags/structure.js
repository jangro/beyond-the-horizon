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

  // event.add('bth:in_dark_forest', [
  //   'bth_structures:magician_house',
  //   'graveyard:has_structure/mushroom_grave',
  //   'idas:pillager_camp',
  //   'idas:witches_treestump',
  //   'idas:wizard_tower',
  // ]);

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
    '#minecraft:village'
  ]);

});
