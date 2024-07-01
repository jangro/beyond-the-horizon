// priority: 100

/**
 * @file Recipe Schemas for the Clayworks mod.
 */

StartupEvents.recipeSchemaRegistry((event) => {
  const components = event.components;

  if (Platform.isLoaded('clayworks')) {
    // Kiln Recipes
    event.register('clayworks:baking', new $RecipeSchema(
      components.get('outputItem')().key('result'),
      components.get('inputItem')().key('ingredient'),
      components.get('floatNumber')().key('experience').optional(0.1),
      components.get('intNumber')().key('cookingtime').optional(100)
    ));
  }
});