// priority: 100

/**
 * @file Recipe Schemas for the Woodworks mod.
 */

StartupEvents.recipeSchemaRegistry((event) => {
  const components = event.components;

  if (Platform.isLoaded('woodworks')) {
    // Sawmill Recipes
    event.register('woodworks:sawmill', new $RecipeSchema(
      components.get('outputItem')().key('result'),
      components.get('inputItem')().key('ingredient'),
      components.get('intNumber')().key('count').optional(1)
    ));
  }
});