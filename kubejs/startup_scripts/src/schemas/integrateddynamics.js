// priority: 100

/**
 * @file Recipe Schemas for the Integrated Dynamics mod.
 * 
 * Note: When adding recipes, the convention is for the mechanical drying basin
 * to be 10x faster than the manual version (ie. duration set to one tenth the value).
 */

StartupEvents.recipeSchemaRegistry((event) => {
  if (Platform.isLoaded('integrateddynamics')) {
    const components = event.components;

    let idOutputItem = 
      (new $RecipeComponentBuilder(2)
        .add(components.get('outputItem')().key('item'))
        .add(components.get('floatNumberRange')({min:0, max:1}).key('chance').defaultOptional())
        .outputRole()).or(components.get('outputItem')());

    let outputFluidAndOrItems = new $RecipeComponentBuilder(2)
      .add(idOutputItem.asArray().key('items').defaultOptional())
      .add(components.get('outputFluid')().key('fluid').defaultOptional())
      .outputRole();

    // Drying Basin Recipes
    event.register('integrateddynamics:drying_basin', new $RecipeSchema(
      components.get('outputFluidOrItem')().key('result'),
      components.get('intNumber')().key('duration'),
      components.get('inputFluid')().key('fluid').defaultOptional(),
      components.get('inputItem')().key('item').defaultOptional()
    ));

    // Mechanical Drying Basin Recipes
    event.register('integrateddynamics:mechanical_drying_basin', new $RecipeSchema(
      components.get('outputFluidOrItem')().key('result'),
      components.get('intNumber')().key('duration'),
      components.get('inputFluid')().key('fluid').defaultOptional(),
      components.get('inputItem')().key('item').defaultOptional()
    ));

    // Squeezer Recipes
    event.register('integrateddynamics:squeezer', new $RecipeSchema(
      outputFluidAndOrItems.key('result'),
      components.get('inputItem')().key('item')
    ));

    // Mechanical Squeezer Recipes
    event.register('integrateddynamics:mechanical_squeezer', new $RecipeSchema(
      outputFluidAndOrItems.key('result'),
      components.get('inputItem')().key('item'),
      components.get('intNumber')().key('duration')
    ));
  }
});