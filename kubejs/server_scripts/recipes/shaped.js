// priority: 10

/**
 * @file Shaped recipe additions for Beyond the Horizon.
 * 
 * Note: Recipes should be in this order:
 * 1) Beyond the Horizon (pack-specific content)
 * 2) Minecraft (vanilla)
 * 3) Other mods, alphabetically.
 * 
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:crafting/'; // Recipe ID

  // Beyond the Horizon
  event.shaped(Item.of('eccentrictome:tome', ECCENTRIC_TOME_NBT), [
    ' S ',
    'SBS',
    ' S '
  ], {
    S: '#forge:bookshelves',
    B: 'minecraft:book'
  }).id(`${ID_PREFIX}filled_eccentric_tome`);

  // Minecraft
  event.shaped('minecraft:saddle', [
    'SLS',
    'ILI'
  ], {
    S: '#forge:string',
    L: '#forge:leather',
    I: '#forge:ingots/iron'
  }).id(`${ID_PREFIX}saddle`);


});
