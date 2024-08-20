// priority: 100

/**
 * @file Recipe Schemas for the Woodworks mod.
 */

StartupEvents.recipeSchemaRegistry((event) => {
  const components = event.components;

  if (Platform.isLoaded('woodworks')) {
    // Sawmill Recipes
    event.register('woodworks:sawmill', new $RecipeSchema(
      components.get('outputItemIdWithCount')().key('result'),
      components.get('inputItem')().key('ingredient'),
    ));
  }
});