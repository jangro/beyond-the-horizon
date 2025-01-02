// priority: 10

/**
 * @file Recipe additions for Powah's crafting methods.
 *
 */

/**
 * Powah Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:enderio/';

  // The output replacement doesn't work for alloy furnace so remove and re-add uranium smelting recipes
  // TODO: schema for alloy furnace and sagmill
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 1500,
    "experience": 1.0,
    "inputs": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:ores/uranium"
        }
      }
    ],
    "result": {
      "item": "alexscaves:uranium"
    }
  }).id(`${ID_PREFIX}alloy_smelting/uranium`);

  // Alloy smelting recipe for fluix crystal
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {
        "count": 1,
        "ingredient": {
          "item": "ae2:charged_certus_quartz_crystal"
        }
      },
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:dusts/redstone"
        }
      },
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:gems/quartz"
        }
      }
    ],
    "result": {
      "count": 2,
      "item": "ae2:fluix_crystal"
    }
  });

  // Sag mill recipe for uranium
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "forge:ores/uranium"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "alexscaves:uranium"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "item": "alexscaves:uranium"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "item": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/uranium`);

  // Sag mill recipe for silver
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "forge:ores/silver"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "create:crushed_raw_silver"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "item": "create:crushed_raw_silver"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "item": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/silver`);

  // Sag mill recipe for lead
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "forge:ores/lead"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "create:crushed_raw_lead"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "item": "create:crushed_raw_lead"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "item": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/lead`);

  // Sag mill recipe for certus quartz
  event.custom({
    "type": "enderio:sag_milling",
    "bonus": "none",
    "energy": 2400,
    "input": {
      "tag": "forge:gems/certus_quartz"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "ae2:certus_quartz_dust"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/certus_quartz`);

  // Sag mill recipe for fluix
  event.custom({
    "type": "enderio:sag_milling",
    "bonus": "none",
    "energy": 2400,
    "input": {
      "tag": "forge:gems/fluix"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "ae2:fluix_dust"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/fluix_crystal`);

});
