// priority: 10

/**
 * @file Shapeless recipe additions for Beyond the Horizon.
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:crafting/';

  // Beyond the Horizon
  event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:bth_guide_book"}'), ['minecraft:book', 'minecraft:spyglass']).id(`${ID_PREFIX}bth_guide_book`);

  // Minecraft
  event.shapeless('minecraft:yellow_dye', 'forbidden_arcanus:yellow_orchid').id(`${ID_PREFIX}yellow_dye_from_yellow_orchid`);

  // Create
  event.shapeless('create:brass_sheet', ['#forge:ingots/brass', 'immersiveengineering:hammer']).id(`${ID_PREFIX}brass_sheet_hammering`);

  // Create Crafts & Additions
  event.shapeless('createaddition:gold_wire', ['#forge:plates/gold', 'immersiveengineering:wirecutter']).id(`${ID_PREFIX}gold_wire_cutting`);
  event.shapeless('createaddition:iron_wire', ['#forge:plates/iron', 'immersiveengineering:wirecutter']).id(`${ID_PREFIX}iron_wire_cutting`);

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ]).id(`${ID_PREFIX}compost_from_sawdust`);

  // Forbidden and Arcanus
  event.shapeless('4x forbidden_arcanus:ender_pearl_fragment', 'minecraft:ender_pearl').id(`${ID_PREFIX}ender_pearl_fragments_from_ender_pearl`);

  // Quark
  event.shapeless('2x quark:myalite', ['minecraft:cobblestone', 'minecraft:amethyst_block', 'quark:myalite_crystal']).id(`${ID_PREFIX}myalite`);
  event.shapeless('quark:dusky_myalite', ['ars_nouveau:sourcestone', 'quark:myalite_crystal']).id(`${ID_PREFIX}dusky_myalite`);
});
