// priority: 100

/**
 * @file Recipe removals for Beyond the Horizon.
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {

  // Remove recipes for all VS sleeping bags.
  COLORS.forEach((color) => event.remove({id: `valhelsia_structures:${color}_sleeping_bag`}));

  // Remove recipes by recipe ID:
  [
    'supplementaries:soap_clean_valhelsia_structures_sleeping_bag',
  ].forEach((recipeID) => event.remove({id: recipeID}));
});
