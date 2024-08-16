// priority: 0

/**
 * @file JEI Recipe Removal for Beyond the Horizon.
 */

/**
 * JEI Recipe Hiding Event Handler
 */
JEIEvents.removeRecipes(event => {
  // Remove Automatic Shapeless Crafting Recipes
  event.remove('create:automatic_shapeless', [
    'integrateddynamics:special/facade', // Facades are hidden as normal crafting recipes anyway.
  ]);
});