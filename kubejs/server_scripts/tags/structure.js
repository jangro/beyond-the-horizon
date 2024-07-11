// priority: 110

/**
 * @file Biome Tag Modifications for Beyond the Horizon.
 *
 * Documentation: https://kubejs.com/wiki/tutorials/tags
 */

/**
 * Biome Tag Event Handler
 */
ServerEvents.tags('worldgen/structure', event => {

  [
    'bth_structures:tower_forest',
    'bth_structures:tower_frozen',
    'bth_structures:tower_scarlet',
  ].forEach(tower => {
    event.add('bth_structures:tower', tower);
  });

  [
    'bth_structures:tower_forest_skylands_autumn',
    'bth_structures:tower_forest_skylands_spring',
    'bth_structures:tower_forest_skylands_summer',
    'bth_structures:tower_frozen_skylands_winter',
  ].forEach(tower => {
    event.add('bth_structures:tower_skylands', tower);
  });

});
