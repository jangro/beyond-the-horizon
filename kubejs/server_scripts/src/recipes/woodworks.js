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
  // Here's an example:
  event.recipes.woodworks.sawmill('4x everycomp:abnww/enlightened_end/indigo_boards', '#enlightened_end:indigo_stems').id(`${ID_PREFIX}indigo_boards_from_indigo_stems`);

  // Add ladders from BBB to Woodworks sawmill (original recipes removed in remove.js)
  VANILLA_WOOD_LOG_TYPES.forEach((type) => {
    event.recipes.woodworks.sawmill(`4x bbb:${type}_ladder`, `#minecraft:${type}_logs`).id(`${ID_PREFIX}${type}_ladder_from_${type}_log`);
    event.recipes.woodworks.sawmill(`bbb:${type}_ladder`, `minecraft:${type}_planks`).id(`${ID_PREFIX}${type}_ladder_from_${type}_planks`);
  });
  VANILLA_WOOD_STEM_TYPES.forEach((type) => {
    event.recipes.woodworks.sawmill(`4x bbb:${type}_ladder`, `#minecraft:${type}_stems`).id(`${ID_PREFIX}${type}_ladder_from_${type}_stem`);
    event.recipes.woodworks.sawmill(`bbb:${type}_ladder`, `minecraft:${type}_planks`).id(`${ID_PREFIX}${type}_ladder_from_${type}_planks`);
  });

  event.recipes.woodworks.sawmill(`4x minecraft:ladder`, `#minecraft:oak_logs`).id(`${ID_PREFIX}vanilla_ladder_from_oak_log`);
  event.recipes.woodworks.sawmill(`minecraft:ladder`, `minecraft:oak_planks`).id(`${ID_PREFIX}vanilla_ladder_from_oak_planks`);
});
