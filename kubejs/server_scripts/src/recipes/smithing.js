// priority: 10

/**
 * @file Smithing recipe additions for Beyond the Horizon.
 */

/**
 * Smithing Recipe Event Handler
 */
ServerEvents.recipes(event => {

  event.smithing(
    'forbidden_arcanus:netherite_blacksmith_gavel',
    'minecraft:netherite_upgrade_smithing_template',
    'forbidden_arcanus:diamond_blacksmith_gavel',
    'minecraft:netherite_ingot'
  );

});
