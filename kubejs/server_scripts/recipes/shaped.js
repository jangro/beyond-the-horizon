// priority: 10

/**
 * @file Shaped recipe additions for Beyond the Horizon.
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:crafting/'; // Recipe ID

  event.shaped('minecraft:saddle', [
    'SLS',
    'ILI'
  ], {
    S: '#forge:string',
    L: '#forge:leather',
    I: '#forge:ingots/iron'
  }).id(`${ID_PREFIX}saddle`);
});
