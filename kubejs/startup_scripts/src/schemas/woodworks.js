// priority: 100

/**
 * @file Recipe Schemas for the Woodworks mod.
 */

StartupEvents.recipeSchemaRegistry((event) => {
  const components = event.components;

  if (Platform.isLoaded('woodworks')) {
    // Sawmill Recipes
    event.register('woodworks:sawmill', new $RecipeSchema(
      components.get('anyString')().key('result'), // Using string here as Woodworks doesn't use normal results.
      components.get('inputItem')().key('ingredient'),
      components.get('intNumber')().key('count').optional(1)
    ));
  }
});