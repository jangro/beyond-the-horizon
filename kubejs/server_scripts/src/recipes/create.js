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

  // Haunting
  event.recipes.create.haunting('quark:soul_sandstone', 'minecraft:sandstone').id(`${ID_PREFIX}haunting/soul_sandstone_from_sandstone`);
  event.recipes.create.haunting('valhelsia_structures:soul_brazier', 'valhelsia_structures:brazier').id(`${ID_PREFIX}haunting/soul_brazier_from_brazier`);
  event.recipes.create.haunting('valhelsia_structures:unlit_soul_lantern', 'valhelsia_structures:unlit_lantern').id(`${ID_PREFIX}haunting/unlit_soul_lantern_from_unlit_lantern`);
  
  // Mechanical Crafting
  event.recipes.create.mechanical_crafting('valhelsia_structures:dungeon_door', [
    'CCCC',
    'HWWH',
    'CWWC',
    'HSSH',
    'CCCC'
  ], {
    C: '#forge:ingots/steel',
    W: 'minecraft:dark_oak_planks',
    H: 'create:shaft',
    S: '#forge:plates/steel',
  }).id(`${ID_PREFIX}mechanical_crafting/dungeon_door`);

  // Milling
  event.recipes.create.milling(Item.of('rats:plastic_waste').withChance(0.5), 'rats:garbage_pile').id(`${ID_PREFIX}milling/plastic_waste_from_garbage_pile`);

  // Mixing
  event.recipes.create.mixing(Fluid.of('minecraft:milk 250'), [Fluid.of('minecraft:water 250'), '#bth:nuts']).heated().id(`${ID_PREFIX}mixing/milk_from_nuts`);
  event.recipes.create.mixing('minecraft:paper', [Fluid.of('minecraft:water 500'), '2x #forge:dusts/wood']).id(`${ID_PREFIX}mixing/paper_from_sawdust`);
  event.recipes.create.mixing('pneumaticcraft:speed_upgrade', [Fluid.of('pneumaticcraft:lubricant 500'), '2x pneumaticcraft:glycerol', '2x #pneumaticcraft:upgrade_components']).id(`${ID_PREFIX}mixing/speed_upgrade_from_glycerol`);

  // Splashing
  event.recipes.create.splashing(Item.of('rats:plastic_waste').withChance(0.5), 'rats:garbage_pile').id(`${ID_PREFIX}splashing/plastic_waste_from_garbage_pile`);
  event.recipes.create.splashing('valhelsia_structures:unlit_lantern', 'minecraft:lantern').id(`${ID_PREFIX}splashing/unlit_lantern_from_lantern`);
  event.recipes.create.splashing('valhelsia_structures:unlit_soul_lantern', 'minecraft:soul_lantern').id(`${ID_PREFIX}splashing/unlit_soul_lantern_from_soul_lantern`);

});
