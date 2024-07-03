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

  // .energizing([inputs, ...], output, energy)
  event.recipes.powah.energizing(['alexscaves:uranium'], 'powah:uraninite', 3000);

});
