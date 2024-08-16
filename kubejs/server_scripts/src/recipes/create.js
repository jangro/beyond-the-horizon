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

  // Compacting
  event.recipes.create.compacting('pneumaticcraft:plastic', '3x rats:raw_plastic').heated().id(`${ID_PREFIX}compacting/plastic_from_raw_plastic`);

  // Crushing
  event.recipes.create.crushing([Item.of('rats:plastic_waste').withChance(0.5)], 'rats:garbage_pile').id(`${ID_PREFIX}crushing/plastic_waste_from_garbage_pile`);

  // Milling
  event.recipes.create.milling([Item.of('rats:plastic_waste').withChance(0.5)], 'rats:garbage_pile').id(`${ID_PREFIX}milling/plastic_waste_from_garbage_pile`);

  // Mixing
  event.recipes.create.mixing([Fluid.of('minecraft:milk 250')], [Fluid.of('minecraft:water 250'), '#bth:nuts']).heated().id(`${ID_PREFIX}mixing/milk_from_nuts`);
  event.recipes.create.mixing('minecraft:paper', [Fluid.of('minecraft:water 500'), '2x #forge:dusts/wood']).id(`${ID_PREFIX}mixing/paper_from_sawdust`);

  // Splashing
  event.recipes.create.splashing([Item.of('rats:plastic_waste').withChance(0.5)], 'rats:garbage_pile').id(`${ID_PREFIX}splashing/plastic_waste_from_garbage_pile`);

});
