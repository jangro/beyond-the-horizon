// priority: 100

StartupEvents.recipeSchemaRegistry((e) => {
  const $RecipeSchema = Java.loadClass(
    'dev.latvian.mods.kubejs.recipe.schema.RecipeSchema'
  )
  const $RecipeComponentBuilder = Java.loadClass(
    'dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder'
  )

  // Input/output component types
  const Components = e.components

  const anyString = Components.get('anyString')()
  const bool = Components.get('bool')()
  const id = Components.get('id')()
  const intNumber = Components.get('intNumber')()
  const filteredString = Components.get('filteredString')
  const floatNumber = Components.get('floatNumber')()

  const inputItem = Components.get('inputItem')()
  const outputItem = Components.get('outputItem')()
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

    /*
      XXX: in this state it only works for one item in, one item out
      recipes so 'count' needs to be fixed as well, in addition to
      secondaries.
    e.register(
      'immersiveengineering:crusher',
      new $RecipeSchema(
        outputItem.key('result'),
        inputItem.key('input'),
        intNumber.key('energy').optional(6000),
        // TODO: add secondaries
      )
    )
    */

    console.log('Recipe Schemas for create loaded.')
  }
})
