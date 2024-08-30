// priority: 10

/**
 * @file Recipe additions for Powah's crafting methods.
 *
 */

/**
 * Powah Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:powah/';

  // Aether
  event.recipes.powah.energizing(['aether:cold_aercloud', 'aether:blue_aercloud', 'aether:golden_aercloud'], '3x deep_aether:sterling_aercloud', 6000).id(`${ID_PREFIX}energizing/sterling_aercloud`);

  // Powah
  event.recipes.powah.energizing(['alexscaves:uranium'], 'powah:uraninite', 3000).id(`${ID_PREFIX}energizing/uraninite`);

});
