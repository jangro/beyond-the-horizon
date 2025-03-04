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

    // This can handle IE's json recipes but for our own recipes we can't use
    // Fluid.of(...), instead we have to use '{ tag: "minecraft:water", amount: 1000 }'
    // SV: Not perfect but I can't figure out a better way to do it. Tried using mapOut() to convert the fluid to the correct format but no success.
    const ieInputFluid = new $RecipeComponentBuilder(2)
      .add(components.get('id')().key('tag'))
      .add(components.get('intNumber')().key('amount'))
      .inputRole();

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
        // TODO: See below.
        components.get('outputFluid')().key('fluid').defaultOptional(),
        components.get('inputItem')().key('input'),
        components.get('intNumber')().key('energy').alwaysWrite().optional(6400)
      )
    );

    // Squeezer
    event.register('immersiveengineering:squeezer',
      new $RecipeSchema(
        // TODO: Finish squeezer support - As seen below it uses unusual
        // names for the fluid keys, input ingredient ('basePredicate'), etc.
        // recipe ref:
        // "fluid": {
        //"Amount": 120,
        //"FluidName": "immersiveengineering:plantoil"
        //},

        //"input": {
        //  "basePredicate": {
        //    "tag": "forge:dusts/coal_coke"
        //  },
        //  "count": 8
        //},
        //"result": {
        //  "tag": "forge:dusts/hop_graphite"
        //}
        components.get('outputFluid')().key('fluid').defaultOptional(),
        components.get('inputItem')().key('input'),
        components.get('intNumber')().key('energy').alwaysWrite().optional(6400),
        ieOutputItem.key('result').defaultOptional(),
      )
    );

    // Alloysmelter
    event.register('immersiveengineering:alloy',
      new $RecipeSchema(
        ieOutputItem.key('result'),
        ieInputItem.key('input0'),
        ieInputItem.key('input1'),
        components.get('intNumber')().key('time').alwaysWrite().optional(200),
      )
    );

    // Mixer
    event.register('immersiveengineering:mixer',
      new $RecipeSchema(
        components.get('outputFluid')().key('result'),
        ieInputFluid.key('fluid'),
        ieInputItem.asArray().key('inputs').defaultOptional(),
        components.get('intNumber')().key('energy').alwaysWrite().optional(1600),
      )
    );

    // Arc Furnace
    // TODO

    // Blast Furnace Fuel
    // TODO

    // Fertilizer
    // TODO

    // Garden Cloche
    // TODO


  }
});
