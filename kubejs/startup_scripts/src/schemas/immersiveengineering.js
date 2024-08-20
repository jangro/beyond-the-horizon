// priority: 100

StartupEvents.recipeSchemaRegistry((event) => {
  // Input/output component types
  const Components = event.components

  const anyString = Components.get('anyString')()
  const bool = Components.get('bool')()
  const id = Components.get('id')()
  const intNumber = Components.get('intNumber')()
  const filteredString = Components.get('filteredString')
  const floatNumber = Components.get('floatNumber')()

  const inputItem = Components.get('inputItem')()
  const inputItemArray = Components.get('inputItemArray')()
  const outputItem = Components.get('outputItem')()
  const outputItemArray = Components.get('outputItemArray')()
  const inputFluid = Components.get('inputFluid')()
  const fluidTag = Components.get('tag')({ registry: 'fluid' })
  const fluidOrTagInput = inputFluid.or(
    new $RecipeComponentBuilder(2)
      .add(fluidTag.key('fluidTag'))
      .add(intNumber.key('amount'))
      .inputRole()
  )
  const outputFluid = Components.get('outputFluid')()

  const inputFluidOrItem = Components.get('inputFluidOrItem')()
  const outputFluidOrItem = Components.get('outputFluidOrItem')()

  let ieInputItem = inputItem.or(
    new $RecipeComponentBuilder(2)
      .add(inputItem.key('base_ingredient'))
      .add(intNumber.key('count'))
      .inputRole()
  );

  let ieOutputItem = outputItem.or(
    new $RecipeComponentBuilder(2)
      .add(outputItem.key('base_ingredient'))
      .add(intNumber.key('count'))
      .outputRole()
  );

  // Immersive Engineering
  if (Platform.isLoaded('immersiveengineering')) {
    event.register(
      'immersiveengineering:hammer_crushing',
      new $RecipeSchema(outputItem.key('result'), inputItem.key('input'))
    );

    event.register(
      'immersiveengineering:metal_press',
      new $RecipeSchema(
        ieOutputItem.key('result'),
        ieInputItem.key('input'),
        anyString.key('mold'),
        intNumber.key('energy').alwaysWrite().optional(2400),
      )
    );

    event.register(
      'immersiveengineering:crusher',
      new $RecipeSchema(
        ieOutputItem.key('result'),
        ieInputItem.key('input'),
        intNumber.key('energy').alwaysWrite().optional(6000),
        outputItemArray.key('secondaries').alwaysWrite().optional([]),
      )
    );

  }
});
