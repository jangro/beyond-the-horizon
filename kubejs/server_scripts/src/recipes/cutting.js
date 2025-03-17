// priority: 10

/**
 * @file Cutting board recipe additions for Beyond the Horizon.
 */

/**
 * Cutting Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:cutting/';


  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "eidolon:illwood_log"
      }
    ],
    "result": [
      {
        "item": "eidolon:stripped_illwood_log"
      },
      {
        "item": "farmersdelight:tree_bark"
      }
    ],
    "sound": "eidolon:item.axe.strip",
    "tool": {
      "type": "farmersdelight:tool_action",
      "action": "axe_strip"
    }
  }).id(`${ID_PREFIX}illwood_log`);

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
