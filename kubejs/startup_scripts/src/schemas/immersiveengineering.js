// priority: 100

/**
 * @file Recipe Schemas for the Immersive Engineering mod.
 */
StartupEvents.recipeSchemaRegistry((event) => {
  const components = event.components;

  if (Platform.isLoaded('immersiveengineering')) {
    // IE's input / output components.
    let ieInputItem = components.get('inputItem')().or(
      new $RecipeComponentBuilder(2)
        .add(components.get('inputItem')().key('base_ingredient'))
        .add(components.get('intNumber')().key('count'))
        .inputRole()
    );
  
    let ieOutputItem = components.get('outputItem')().or(
      new $RecipeComponentBuilder(2)
        .add(components.get('outputItem')().key('base_ingredient'))
        .add(components.get('intNumber')().key('count'))
        .outputRole()
    );

    // Hammer Crushing
    event.register(
      'immersiveengineering:hammer_crushing',
      new $RecipeSchema(
        components.get('outputItem')().key('result'), 
        components.get('inputItem')().key('input')
      )
    );

    // Metal Press
    event.register(
      'immersiveengineering:metal_press',
      new $RecipeSchema(
        ieOutputItem.key('result'),
        ieInputItem.key('input'),
        components.get('id')().key('mold'),
        components.get('intNumber')().key('energy').alwaysWrite().optional(2400),
      )
    );

    // Crusher
    event.register(
      'immersiveengineering:crusher',
      new $RecipeSchema(
        ieOutputItem.key('result'),
        ieInputItem.key('input'),
        components.get('intNumber')().key('energy').alwaysWrite().optional(6000),
        components.get('outputItemArray')().key('secondaries').alwaysWrite().optional([]),
      )
    );

    // Fermenter
    event.register('immersiveengineering:fermenter',
      new $RecipeSchema(
        components.get('outputFluid')().key('fluid'), 
        components.get('inputItem')().key('input'),
        components.get('intNumber')().key('energy').alwaysWrite().optional(6400)
      )
    );

    // Squeezer
    event.register('immersiveengineering:squeezer',
      new $RecipeSchema(
        components.get('outputFluid')().key('fluid'), 
        components.get('inputItem')().key('input'),
        components.get('intNumber')().key('energy').alwaysWrite().optional(6400)
      )
    );
  }
});
