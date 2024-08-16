// priority: 10

/**
 * @file Additions, removals, and changes for Clayworks baking recipes in Beyond the Horizon.
 */

/**
 * Baking Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:baking/';

  /**
   * Adds a baking recipe for the kiln.
   * @param {(string|Item)} output Resulting baked item.
   * @param {(string|Item)} input Ingredient to be baked.
   * @param {number} [xp] Experience given by baking the item.
   */
  const bake = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.recipes.clayworks.baking(output, input, xp).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  // Applied Energistics 2
  bake('ae2:smooth_sky_stone_block', 'ae2:sky_stone_block', 0.35);

  // Botania
  bake('botania:cracked_livingrock_bricks', 'botania:livingrock_bricks');

  // Create Deco
  bake('createdeco:cracked_blue_bricks', 'createdeco:blue_bricks');
  bake('createdeco:cracked_dean_bricks', 'createdeco:dean_bricks');
  bake('createdeco:cracked_dusk_bricks', 'createdeco:dusk_bricks');
  bake('createdeco:cracked_red_bricks', 'minecraft:bricks');
  bake('createdeco:cracked_pearl_bricks', 'createdeco:pearl_bricks');
  bake('createdeco:cracked_scarlet_bricks', 'createdeco:scarlet_bricks');
  bake('createdeco:cracked_umber_bricks', 'createdeco:umber_bricks');
  bake('createdeco:cracked_verdant_bricks', 'createdeco:verdant_bricks');

  // Forbidden and Arcanus
  bake('forbidden_arcanus:cracked_polished_darkstone_bricks', 'forbidden_arcanus:polished_darkstone_bricks');

  // Immersive Engineering
  bake('immersiveengineering:concrete_brick_cracked', 'immersiveengineering:concrete_brick');
  bake('immersiveengineering:hempcrete_brick_cracked', 'immersiveengineering:hempcrete_brick');
});
