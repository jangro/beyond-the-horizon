// priority: 10

/**
 * @file Recipe additions for Create's crafting methods.
 *
 */

/**
 * Create Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:create/';

  // Mixing
  event.recipes.create.mixing([Fluid.of('minecraft:milk 250')], [Fluid.of('minecraft:water 250'), '#bth:nuts']).heated().id(`${ID_PREFIX}mixing/milk_from_nuts`);

  // Crushing
  event.recipes.create.crushing([Item.of('rats:plastic_waste').withChance(0.5)], 'rats:garbage_pile');

  // Milling
  event.recipes.create.milling([Item.of('rats:plastic_waste').withChance(0.5)], 'rats:garbage_pile');

  // Splashing / Washing
  event.recipes.create.splashing([Item.of('rats:plastic_waste').withChance(0.5)], 'rats:garbage_pile');

  // Compacting
  event.recipes.create.compacting('pneumaticcraft:plastic', '3x rats:raw_plastic');

});
