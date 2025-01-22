// priority: 10

/**
 * @file Fixes the Valhelsia Furniture recipes broken by KubeJS.
 * Relevant KJS Ticket: https://kubejs.com/support/tickets/DA71A5F2
 * 
 * Script adapted from here: https://github.com/ValhelsiaTeam/Valhelsia-Furniture/issues/10#issuecomment-1865811613
 */

/**
 * Recipe Event Handler
 */
ServerEvents.recipes(event => {
  
  /**
   * Fixes a furniture recipe.
   */
  const fixRecipe = (recipe) => {
    const recipeId = recipe.getId();
    const jIngredients = recipe.json.get('key');
    const keys = jIngredients.keySet();
    const ingredients = {};
    keys.forEach(key => {
      let valueOuter = jIngredients.get(key);
      let valueInner = valueOuter.get('ingredient');
      // valueInner is 'null' when dealing with vanilla wood types
      if (`${valueInner}` === 'null') {
        valueInner = valueOuter;
      }
      const forge = valueInner.get('forge_value');
      // forge is not 'null' when dealing with sticks (I think)
      if (`${forge}` === 'null') {
        ingredients[key] = valueOuter;
      }  else {
        let value = forge;
        const x = `${value.get('item')}`.replace(/"/g, '');
        const y = `${value.get('tag')}`.replace(/"/g, '');
        const input = (x === 'null') ? `#${y}` : x;
        ingredients[key] = input;
      }
    });
    event.remove({ id: recipeId });
    event.shaped(recipe.originalRecipeResult, recipe.json.get('pattern'), ingredients).id(recipeId);
  };

  // Fix Valhelsia Furniture vanilla wood types recipes.
  event.forEachRecipe({ output: /valhelsia_furniture:\S+/ }, recipe => {
    fixRecipe(recipe);
  });

  // Fix Valhelsia Furniture everycompat wood types recipes.
  event.forEachRecipe({ output: /everycomp:vf\S+/ }, recipe => {
    fixRecipe(recipe);
  });

});