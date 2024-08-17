// priority: 100

/**
 * @file Recipe Schemas for the Create Crafts & Additions mod.
 */
StartupEvents.recipeSchemaRegistry((event) => {
  // Input/output component types
  const Components = event.components

  const anyString = Components.get('anyString')();
  const bool = Components.get('bool')();
  const id = Components.get('id')();
  const intNumber = Components.get('intNumber')();
  const filteredString = Components.get('filteredString');
  const floatNumber = Components.get('floatNumber')();

  const inputItem = Components.get('inputItem')();
  const outputItem = Components.get('outputItem')();
  const inputFluid = Components.get('inputFluid')();
  const fluidTag = Components.get('tag')({ registry: 'fluid' });
  const fluidOrTagInput = inputFluid.or(
    new $RecipeComponentBuilder(2)
      .add(fluidTag.key('fluidTag'))
      .add(intNumber.key('amount'))
      .inputRole()
  );
  const outputFluid = Components.get('outputFluid')();

  const inputFluidOrItem = Components.get('inputFluidOrItem')();
  const outputFluidOrItem = Components.get('outputFluidOrItem')();

  let $HeatCondition;
  let heatCondition;

  if (Platform.isLoaded('create')) {
    $HeatCondition = Java.loadClass('com.simibubi.create.content.processing.recipe.HeatCondition');
    heatCondition = Components.get('enum')({ class: $HeatCondition });
  }

  // Create Crafts & Additions
  if (Platform.isLoaded('createaddition')) {
    // Rolling Machine Recipes
    event.register('createaddition:rolling', new $RecipeSchema(
      outputItem.key('result'), 
      inputItem.key('input')
    ));

    // Charging Recipes
    event.register('createaddition:charging', new $RecipeSchema(
      outputItem.key('result'),
      inputItem.key('input'),
      intNumber.key('energy'),
      intNumber.key('maxChargeRate').optional(0)
    ));

    // Liquid Burning Recipes
    event.register('createaddition:liquid_burning', new $RecipeSchema(
      fluidOrTagInput.key('input'),
      intNumber.key('burnTime'),
      bool.key('superheated').optional(false)
    ));
  }
});
