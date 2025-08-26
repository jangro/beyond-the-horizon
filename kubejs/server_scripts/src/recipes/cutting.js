// priority: 10

/**
 * @file Cutting board recipe additions for Beyond the Horizon.
 */

function addLogStrippingRecipe(event, inputItem, outputItem, id) {
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      { "item": inputItem }
    ],
    "result": [
      { "item": outputItem },
      { "item": 'farmersdelight:tree_bark' }
    ],
    "sound": "eidolon:item.axe.strip",
    "tool": {
      "type": "farmersdelight:tool_action",
      "action": "axe_strip"
    }
  }).id(id);
}

/**
 * Cutting Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:cutting/';

  addLogStrippingRecipe(event, "ars_elemental:yellow_archwood_log", "ars_elemental:stripped_yellow_archwood_log", `${ID_PREFIX}yellow_archwood_log`);
  addLogStrippingRecipe(event, "ars_elemental:yellow_archwood", "ars_elemental:stripped_yellow_archwood", `${ID_PREFIX}yellow_archwood`);
  addLogStrippingRecipe(event, "ars_nouveau:blue_archwood_log", "ars_nouveau:stripped_blue_archwood_log", `${ID_PREFIX}blue_archwood_log`);
  addLogStrippingRecipe(event, "ars_nouveau:blue_archwood_wood", "ars_nouveau:stripped_blue_archwood_wood", `${ID_PREFIX}blue_archwood_wood`);
  addLogStrippingRecipe(event, "ars_nouveau:green_archwood_log", "ars_nouveau:stripped_green_archwood_log", `${ID_PREFIX}green_archwood_log`);
  addLogStrippingRecipe(event, "ars_nouveau:green_archwood_wood", "ars_nouveau:stripped_green_archwood_wood", `${ID_PREFIX}green_archwood_wood`);
  addLogStrippingRecipe(event, "ars_nouveau:purple_archwood_log", "ars_nouveau:stripped_purple_archwood_log", `${ID_PREFIX}purple_archwood_log`);
  addLogStrippingRecipe(event, "ars_nouveau:purple_archwood_wood", "ars_nouveau:stripped_purple_archwood_wood", `${ID_PREFIX}purple_archwood_wood`);
  addLogStrippingRecipe(event, "ars_nouveau:red_archwood_log", "ars_nouveau:stripped_red_archwood_log", `${ID_PREFIX}red_archwood_log`);
  addLogStrippingRecipe(event, "ars_nouveau:red_archwood_wood", "ars_nouveau:stripped_red_archwood_wood", `${ID_PREFIX}red_archwood_wood`);
  addLogStrippingRecipe(event, "eidolon:illwood_log", "eidolon:stripped_illwood_log", `${ID_PREFIX}illwood_log`);

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "createaddition:honey_cake"
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    },
    "result": [
      {
        "item": "bth:honey_cake_slice",
        "count": 7
      }
    ]
  }).id(`${ID_PREFIX}honey_cake`);

});
