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
 
  // Remove all Waystones recipes
  event.remove({mod: `waystones`});

  // Remove recipes by recipe ID:
  [
    'minecraft:bread',
    'aether:aether_saddle',
    'create:smelting/bread', 
    'create:smoking/bread', 
    'eidolon:raven_feather_arrows',
    'immersive_aircraft:hull',
    'immersive_aircraft:hull_reinforcement',
    'minecolonies:baked_bread',
    'minecolonies:baked_bread_campfire_cooking', 
    'minecolonies:baked_bread_smoking', 
    'pneumaticcraft:speed_upgrade',
    'pneumaticcraft:speed_upgrade_from_glycerol',
    'rats:upgrades/aristocrat_upgrade',
    'supplementaries:soap_clean_upgrade_aquatic_bedroll',
    'supplementaries:soap_clean_valhelsia_structures_sleeping_bag',
    /wardrobe:.*backpack/,
  ].forEach((recipeID) => event.remove({id: recipeID}));
});
