// priority: 10

/**
 * @file Additions, removals, and changes for Woodworks sawmill recipes in Beyond the Horizon.
 */

/**
 * Sawmill Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:sawmill/';

  // TODO: A *lot* of Every Compat's Sawmill recipes are straight-up broken (wrong input item/tag ID, for example). 
  // Need to remove and recreate them correctly.

  // Enlightend
  event.recipes.woodworks.sawmill('everycomp:abnww/enlightened_end/indigo_boards', '#enlightened_end:indigo_stems', 4).id(`${ID_PREFIX}indigo_boards_from_indigo_stems`);

});
