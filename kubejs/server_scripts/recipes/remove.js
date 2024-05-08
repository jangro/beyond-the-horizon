// priority: 100

/**
 * @file Recipe removals for Beyond the Horizon.
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {

  // Remove recipes for all sleeping bags & bedrolls.
  COLORS.forEach((color) => event.remove({id: `upgrade_aquatic:${color}_bedroll`}));
  COLORS.forEach((color) => event.remove({id: `valhelsia_structures:${color}_sleeping_bag`}));

  // Remove recipes by recipe ID:
  [
    'supplementaries:soap_clean_upgrade_aquatic_bedroll',
    'supplementaries:soap_clean_valhelsia_structures_sleeping_bag',
    'wardrobe:backpack',
    'wardrobe:large_backpack',
    'wardrobe:travel_backpack'
  ].forEach((recipeID) => event.remove({id: recipeID}));
});
