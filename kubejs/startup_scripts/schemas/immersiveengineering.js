// priority: 100

StartupEvents.recipeSchemaRegistry((e) => {
  // Input/output component types
  const Components = e.components

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

  let baseIngredient = new $RecipeComponentBuilder(1)
      .add(anyString.key('item'))

  let crusherOutputItem = outputItem.or(
    new $RecipeComponentBuilder(2)
      .add(baseIngredient.key('base_ingredient'))
      .add(intNumber.key('count')) // count doesn't transfer on replaceOutput
      .outputRole()
  )

  // Immersive Engineering
  if (Platform.isLoaded('immersiveengineering')) {
    e.register(
      'immersiveengineering:hammer_crushing',
      new $RecipeSchema(outputItem.key('result'), inputItem.key('input'))
    )

    e.register(
      'immersiveengineering:metal_press',
      new $RecipeSchema(
        outputItem.key('result'),
        inputItem.key('input'),
        anyString.key('mold'),
        intNumber.key('energy').alwaysWrite().optional(2400),
      )
    )

    // FIXME: add secondaries and count (not easy!)
    e.register(
      'immersiveengineering:crusher',
      new $RecipeSchema(
        crusherOutputItem.key('result'),
        inputItem.key('input'),
        intNumber.key('energy').alwaysWrite().optional(6000),
        outputItemArray.key('secondaries').alwaysWrite().optional([]),
      )
    )

    console.log('Recipe Schemas for create loaded.')
  }
})
