// priority: 10

/**
 * @file Recipe additions for EnderIO's crafting methods.
 *
 */

/**
 * EnderIO Recipe Event Handler
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

  // Electrum
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 1500,
    "experience": 1.0,
    "inputs": [
      {
        "count": 1,
        "ingredient": {
          "tag": "forge:dusts/electrum"
        }
      }
    ],
    "result": {
      "item": "createaddition:electrum_ingot"
    }
  }).id(`${ID_PREFIX}alloy_smelting/electrum_ingot`);

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

  // Sag mill recipe for copper
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "forge:ores/copper"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 5,
          "item": "create:crushed_raw_copper"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "item": "create:crushed_raw_copper"
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
  }).id(`${ID_PREFIX}sag_milling/copper`);

  // Sag mill recipe for iron
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "forge:ores/iron"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "create:crushed_raw_iron"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "item": "create:crushed_raw_iron"
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
  }).id(`${ID_PREFIX}sag_milling/iron`);

  // Sag mill recipe for gold
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "forge:ores/gold"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "create:crushed_raw_gold"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "item": "create:crushed_raw_gold"
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
  }).id(`${ID_PREFIX}sag_milling/gold`);

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

  // Sag mill recipe for obsidian
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "forge:obsidian"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "create:powdered_obsidian"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "item": "create:powdered_obsidian"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "item": "minecraft:obsidian"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/obsidian`);

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

  // Sag mill recipe for ancient debris
  // Base multiplier 1.75x
  // End steel grinding ball 2.4x
  // Vibrant grinding ball 3.6x
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 3600,
    "input": {
      "item": "minecraft:ancient_debris"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "minecraft:netherite_scrap"
        },
        "optional": false
      },
      {
        "chance": 0.75,
        "item": {
          "item": "minecraft:netherite_scrap"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/ancient_debris`);

  // Sag mill recipe for arcance debris
  // Base multiplier 1.75x
  // End steel grinding ball 2.4x
  // Vibrant grinding ball 3.6x
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 3600,
    "input": {
      "item": "irons_spellbooks:arcane_debris"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "irons_spellbooks:arcane_salvage"
        },
        "optional": false
      },
      {
        "chance": 0.75,
        "item": {
          "item": "irons_spellbooks:arcane_salvage"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/arcane_debris`);

  // Sag mill recipe for stella arcanum
  // Base multiplier 1.3x
  // End steel grinding ball 2.2x
  // Vibrant grinding ball 3x
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 3600,
    "input": {
      "item": "forbidden_arcanus:stella_arcanum"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "item": "forbidden_arcanus:stellarite_piece"
        },
        "optional": false
      },
      {
        "chance": 0.5,
        "item": {
          "item": "forbidden_arcanus:stellarite_piece"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/stella_arcanum`);

});
