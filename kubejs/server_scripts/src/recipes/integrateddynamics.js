// priority: 10

/**
 * @file Recipe additions for Integrated Dynamics' crafting methods.
 *
 */

/**
 * Integrated Dynamics Recipe Event Handler
 * 
 * Note: When adding recipes, the convention for the mechanical drying basin
 * to be 10x faster than the manual version (ie. duration set to one tenth the value).
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:integrateddynamics/';

  // Drying Basin
  // event.recipes.integrateddynamics.drying_basin(output, duration, fluid, item).id(`${ID_PREFIX}drying_basin/id_goes_here`);

  // Mechanical Drying Basin
  // event.recipes.integrateddynamics.mechanical_drying_basin(output, duration, fluid, item).id(`${ID_PREFIX}mechanical_drying_basin/id_goes_here`);

  // Squeezer
  //event.recipes.integrateddynamics.squeezer([Item.of('immersiveengineering:dust_hop_graphite')], Item.of('#forge:dusts/coal_coke', 8)).id(`${ID_PREFIX}squeezer/dust_hop_graphite_from_coal_coke`);
  //event.recipes.integrateddynamics.squeezer([Item.of('irons_spellbooks:arcane_salvage'), Item.of('irons_spellbooks:arcane_salvage').withChance(0.75)], 'irons_spellbooks:arcane_debris').id(`${ID_PREFIX}squeezer/arcane_salvage_from_arcane_debris`);

  // Mechanical Squeezer
  //event.recipes.integrateddynamics.mechanical_squeezer([Item.of('immersiveengineering:dust_hop_graphite')], Item.of('#forge:dusts/coal_coke', 8), 40).id(`${ID_PREFIX}mechanical_squeezer/dust_hop_graphite_from_coal_coke`);
  //event.recipes.integrateddynamics.mechanical_squeezer([Item.of('irons_spellbooks:arcane_salvage'), Item.of('irons_spellbooks:arcane_salvage').withChance(0.75)], 'irons_spellbooks:arcane_debris', 40).id(`${ID_PREFIX}mechanical_squeezer/arcane_salvage_from_arcane_debris`);
});
