// priority: 10

/**
 * @file Recipe additions for Exposure's crafting methods.
 *
 */

/**
 * Exposure Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:exposure/';

  // Simplified developed color film recipe
  event.custom({
    "type": "exposure:film_developing",
    "film": {
      "item": "exposure:color_film"
    },
    "ingredients": [
      [
        {
          "type": "forge:partial_nbt",
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:mundane\"}"
        },
        {
          "type": "forge:partial_nbt",
          "item": "minecraft:potion",
          "nbt": "{Potion:\"mundane\"}"
        }
      ]
    ],
    "result": {
      "item": "exposure:developed_color_film"
    }
  }).id(`${ID_PREFIX}developed_color_film`);
});
