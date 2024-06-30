// priority: 10

/**
 * @file Recipe additions for Immersive Engineering's crafting methods.
 *
 */

/**
 * Immersive Engineering Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:immersiveengineering/';

  // Not an important recipe, just for testing functionality
  event.recipes.immersiveengineering.metal_press('upgrade_aquatic:prismarine_rod', 'minecraft:prismarine_shard', 'immersiveengineering:mold_rod').id(`${ID_PREFIX}metalpress/prismarine_rod`);

});
