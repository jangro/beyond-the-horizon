// priority: 110

/**
 * @file Structure Tag Modifications for Beyond the Horizon.
 *
 * Documentation: https://kubejs.com/wiki/tutorials/tags
 */

/**
 * Biome Tag Event Handler
 */
ServerEvents.tags('worldgen/structure', event => {

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

  event.add('supplementaries:way_sign_destinations', [
    'bth_structures:tower_forest',
    'bth_structures:tower_frozen',
    'bth_structures:tower_scarlet',
    'bth_structures:ruined_hangar',
    'bth_structures:tinkerer_house',
    'bth_structures:magician_house',
    '#ctov:village',
  ]);

});
