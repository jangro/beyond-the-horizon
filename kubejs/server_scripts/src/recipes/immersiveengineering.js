// priority: 10

/**
 * @file Recipe additions for Immersive Engineering's crafting methods.
 *
 */

/**
 * Immersive Engineering Recipe Event Handler
 */
ServerEvents.recipes(event => {
  if (!Platform.isLoaded('immersiveengineering')) {
    return;
  }

  const ID_PREFIX = 'bth:immersiveengineering/';

  /**
   * Creates an Immersive Engineering Unpacking Recipe.
   * @param {(OutputItem|string)} output Output item(s).
   * @param {(InputItem|string)} input Input item(s).
   */
  const unpack = (output, input) => {
    event.recipes.immersiveengineering.metal_press(output, input, 'immersiveengineering:mold_unpacking').id(`${ID_PREFIX}metal_press/unpacking/${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  // Alloy Kiln Recipes
  if (Platform.isLoaded('enderio')) {
    event.recipes.immersiveengineering.alloy('enderio:copper_alloy_ingot', '#forge:ingots/copper', '#forge:silicon').id(`${ID_PREFIX}alloy/copper_alloy_ingot`);
    event.recipes.immersiveengineering.alloy('enderio:pulsating_alloy_ingot', '#forge:ingots/iron', '#forge:ender_pearls').id(`${ID_PREFIX}alloy/pulsating_alloy_ingot`);
    event.recipes.immersiveengineering.alloy('enderio:redstone_alloy_ingot', '#forge:dusts/redstone', '#forge:silicon').id(`${ID_PREFIX}alloy/redstone_alloy_ingot`);
    event.recipes.immersiveengineering.alloy('enderio:soularium_ingot', ['minecraft:soul_sand', 'minecraft:soul_soil'], '#forge:ingots/gold').id(`${ID_PREFIX}alloy/soularium_ingot`);
    event.recipes.immersiveengineering.alloy('enderio:vibrant_alloy_ingot', '#forge:ingots/energetic_alloy', '#forge:ender_pearls').id(`${ID_PREFIX}alloy/vibrant_alloy_ingot`);
  }

  // Metal Press Recipes - Gears
  // Create
  if (Platform.isLoaded('create')) {
    event.recipes.immersiveengineering.metal_press('create:cogwheel', 'create:andesite_alloy', 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/cogwheel`);
  }
  // Immersive Engineering
  event.recipes.immersiveengineering.metal_press('immersiveengineering:sawblade', {base_ingredient: '#forge:ingots/steel', count: 6}, 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/sawblade`);

  // PneumaticCraft
  if (Platform.isLoaded('pneumaticcraft')) {
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:compressed_iron_gear', {base_ingredient: '#forge:ingots/compressed_iron', count: 4}, 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/compressed_iron_gear`);
  }

  // Metal Press Recipes - Plates / Sheets
  // Ad Astra
  if (Platform.isLoaded('ad_astra')) {
    event.recipes.immersiveengineering.metal_press('ad_astra:calorite_plate', '#forge:ingots/calorite', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/calorite_plate`);
    event.recipes.immersiveengineering.metal_press('ad_astra:desh_plate', '#forge:ingots/desh', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/desh_plate`);
    event.recipes.immersiveengineering.metal_press('ad_astra:ostrum_plate', '#forge:ingots/ostrum', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/ostrum_plate`);
  }
  
  // Create
  if (Platform.isLoaded('create')) {
    // Create Deco
    if (Platform.isLoaded('createdeco')) {
      event.recipes.immersiveengineering.metal_press('createdeco:andesite_sheet', 'create:andesite_alloy', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/andesite_sheet`);
      event.recipes.immersiveengineering.metal_press('createdeco:industrial_iron_sheet', 'createdeco:industrial_iron_ingot', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/industrial_iron_sheet`);
      event.recipes.immersiveengineering.metal_press('createdeco:netherite_sheet', '#forge:ingots/netherite', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/netherite_sheet`);
    }
  }

  // PneumaticCraft
  if (Platform.isLoaded('pneumaticcraft')) {
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:plastic', {base_ingredient: 'rats:raw_plastic', count: 3}, 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metalpress/plastic_from_raw_plastic`);
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:plastic', '#pneumaticcraft:plastic_bricks', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/plastic_from_plastic_bricks`);
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:plastic', '#pneumaticcraft:smooth_plastic_bricks', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/plastic_from_smooth_plastic_bricks`);
  }

  // Tetra
  if (Platform.isLoaded('tetra')) {
    event.recipes.immersiveengineering.metal_press('tetra:vent_plate', 'tetra:metal_scrap', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/vent_plate_from_metal_scrap`);
  }

  // Metal Press Recipes - Rods

  // Upgrade Aquatic
  if (Platform.isLoaded('upgrade_aquatic')) {
    event.recipes.immersiveengineering.metal_press('upgrade_aquatic:prismarine_rod', 'minecraft:prismarine_shard', 'immersiveengineering:mold_rod').id(`${ID_PREFIX}metal_press/prismarine_rod`);
  }

  // Metal Press Recipes - Unpacking
  
  // Minecraft
  unpack('9x minecraft:dried_kelp', 'minecraft:dried_kelp_block');
  unpack('4x minecraft:nether_wart', 'minecraft:nether_wart_block');

  // Atmospheric
  if (Platform.isLoaded('atmospheric')) {
    unpack('9x atmospheric:aloe_leaves', 'atmospheric:aloe_bundle');
    unpack('9x atmospheric:barrel_cactus', 'atmospheric:barrel_cactus_batch');
    unpack('9x atmospheric:passion_vine', 'atmospheric:passion_vine_bundle');
  }

  // Autumnity
  if (Platform.isLoaded('autumnity')) {
    unpack('9x autumnity:snail_goo', 'autumnity:snail_goo_block');
  }

  // Farmer's Delight
  // TODO - Fruit + Vegetable Crate Unpacking

  // Neapolitan
  if (Platform.isLoaded('neapolitan')) {
    unpack('3x neapolitan:banana', 'neapolitan:banana_bunch');
    unpack('9x neapolitan:banana', 'neapolitan:banana_crate');
  }

  // Metal Press Recipes - Other
  if (Platform.isLoaded('ae2')) {
    event.recipes.immersiveengineering.metal_press('ae2:printed_calculation_processor', '#forge:gems/certus_quartz', 'ae2:calculation_processor_press').id(`${ID_PREFIX}metal_press/printed_calculation_processor`);
    event.recipes.immersiveengineering.metal_press('ae2:calculation_processor_press', '#forge:storage_blocks/iron', 'ae2:calculation_processor_press').id(`${ID_PREFIX}metal_press/calculation_processor_press`);
    event.recipes.immersiveengineering.metal_press('ae2:printed_engineering_processor', '#forge:gems/diamond', 'ae2:engineering_processor_press').id(`${ID_PREFIX}metal_press/printed_engineering_processor`);
    event.recipes.immersiveengineering.metal_press('ae2:engineering_processor_press', '#forge:storage_blocks/iron', 'ae2:engineering_processor_press').id(`${ID_PREFIX}metal_press/engineering_processor_press`);
    event.recipes.immersiveengineering.metal_press('ae2:printed_engineering_processor', '#forge:ingots/gold', 'ae2:logic_processor_press').id(`${ID_PREFIX}metal_press/printed_logic_processor`);
    event.recipes.immersiveengineering.metal_press('ae2:printed_logic_processor', '#forge:storage_blocks/iron', 'ae2:logic_processor_press').id(`${ID_PREFIX}metal_press/logic_processor_press`);
    event.recipes.immersiveengineering.metal_press('ae2:printed_silicon', '#forge:silicon', 'ae2:silicon_press').id(`${ID_PREFIX}metal_press/printed_silicon`);
    event.recipes.immersiveengineering.metal_press('ae2:silicon_press', '#forge:storage_blocks/iron', 'ae2:silicon_press').id(`${ID_PREFIX}metal_press/silicon_press`);
  }

  // Crusher Recipes
  // Replace IE recipes to switch grit/dust for Create crushed ores
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) => {
    event.remove({id: `immersiveengineering:crusher/ingot_${material}`});
    event.remove({id: `immersiveengineering:crusher/ore_${material}`});
    event.remove({id: `immersiveengineering:crusher/raw_block_${material}`});
    event.remove({id: `immersiveengineering:crusher/raw_ore_${material}`});

    event.recipes.immersiveengineering.crusher(
      `create:crushed_raw_${material}`,
      `#forge:ingots/${material}`
    ).id(`${ID_PREFIX}crusher/ingot_${material}`);

    event.recipes.immersiveengineering.crusher(
      `2x create:crushed_raw_${material}`,
      `#forge:ores/${material}`
    ).id(`${ID_PREFIX}crusher/ore_${material}`);

    event.recipes.immersiveengineering.crusher(
      `12x create:crushed_raw_${material}`,
      `#forge:storage_blocks/raw_${material}`
    ).id(`${ID_PREFIX}crusher/raw_block_${material}`);

    event.recipes.immersiveengineering.crusher(
      `create:crushed_raw_${material}`,
      `#forge:raw_materials/${material}`
    ).id(`${ID_PREFIX}crusher/raw_ore_${material}`);
  });

  event.remove({id: 'immersiveengineering:crusher/nether_gold'});
  event.recipes.immersiveengineering.crusher(
    '2x create:crushed_raw_gold',
    'minecraft:nether_gold_ore'
  ).id(`${ID_PREFIX}crusher/nether_gold`);

  // Minecraft
  event.recipes.immersiveengineering.crusher('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id(`${ID_PREFIX}crusher/nether_wart`);

  // Applied Energistics
  if (Platform.isLoaded('ae2')) {
    event.recipes.immersiveengineering.crusher('ae2:certus_quartz_dust', '#ae2:all_certus_quartz').id(`${ID_PREFIX}crusher/certus_quartz_dust`);
    event.recipes.immersiveengineering.crusher('ae2:ender_dust', 'minecraft:ender_pearl').id(`${ID_PREFIX}crusher/ender_dust`);
    event.recipes.immersiveengineering.crusher('ae2:fluix_dust', 'ae2:fluix_crystal').id(`${ID_PREFIX}crusher/fluix_dust`);
    event.recipes.immersiveengineering.crusher('ae2:sky_dust', 'ae2:sky_stone_block').id(`${ID_PREFIX}crusher/sky_stone_dust`);

  }

  // Create Crafts & Additions
  if (Platform.isLoaded('createaddition')) {
    event.recipes.immersiveengineering.crusher('createaddition:diamond_grit', '#forge:gems/diamond').id(`${ID_PREFIX}crusher/diamond_grit`);
  }

  if (Platform.isLoaded('enderio')) {
    event.recipes.immersiveengineering.crusher('enderio:powdered_quartz', 'minecraft:quartz').id(`${ID_PREFIX}crusher/powdered_quartz_from_quartz`);
  } 

  // Hammer Crushing Recipes
  // Applied Energistics
  if (Platform.isLoaded('ae2')) {
    event.recipes.immersiveengineering.hammer_crushing('ae2:certus_quartz_dust', '#ae2:all_certus_quartz').id(`${ID_PREFIX}hammer_crushing/certus_quartz_dust`);
    event.recipes.immersiveengineering.hammer_crushing('ae2:ender_dust', 'minecraft:ender_pearl').id(`${ID_PREFIX}hammer_crushing/ender_dust`);
    event.recipes.immersiveengineering.hammer_crushing('ae2:fluix_dust', 'ae2:fluix_crystal').id(`${ID_PREFIX}hammer_crushing/fluix_dust`);
    event.recipes.immersiveengineering.hammer_crushing('ae2:sky_dust', 'ae2:sky_stone_block').id(`${ID_PREFIX}hammer_crushing/sky_stone_dust`);
  }

  // Create Crafts & Additions
  if (Platform.isLoaded('createaddition')) {
    event.recipes.immersiveengineering.hammer_crushing('createaddition:diamond_grit', '#forge:gems/diamond').id(`${ID_PREFIX}hammer_crushing/diamond`);
  }

  if (Platform.isLoaded('enderio')) {
    event.recipes.immersiveengineering.hammer_crushing('enderio:powdered_quartz', 'minecraft:quartz').id(`${ID_PREFIX}hammer_crushing/powdered_quartz_from_quartz`);
  } 

  if (Platform.isLoaded('create')) {
    event.recipes.immersiveengineering.hammer_crushing('create:crushed_raw_zinc', '#forge:ores/zinc').id(`${ID_PREFIX}hammer_crushing/zinc`);
  }

  // Fermenter Recipes

  // Farmer's Delight
  if (Platform.isLoaded('farmersdelight')) {
    event.recipes.immersiveengineering.fermenter(Fluid.of('immersiveengineering:ethanol 80'), '#forge:seeds/rice').id(`${ID_PREFIX}fermenter/rice`);
  }

  // Mixer recipes ( output fluid, input fluid tag, input items array, energy[optional] )

  // BTH sugar water
  event.recipes.immersiveengineering.mixer(Fluid.of('bth:sugar_water 1000'), {tag: 'minecraft:water', amount: 1000}, ['minecraft:sugar']).id(`${ID_PREFIX}mixer/sugar_water`);

  // BTH soul mixture
  event.recipes.immersiveengineering.mixer(Fluid.of('bth:soul_mixture 1000'), {tag: 'minecraft:water', amount: 1000}, ['minecraft:sugar']).id(`${ID_PREFIX}mixer/soul_mixture`);

  // Refinery recipes

  // BTH ender fuel
  event.custom({
    "type": "immersiveengineering:refinery",
    "energy": 4000,
    "input0": {
      "amount": 500,
      "tag": "bth:liquid_chorus"
    },
    "input1": {
      "amount": 500,
      "tag": "bth:soul_mixture"
    },
    "result": {
      "amount": 1000,
      "fluid": "bth:ender_fuel"
    }
  }).id(`${ID_PREFIX}refinery/ender_fuel`);



  // Squeezer Recipes
  
  // Minecraft
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:lava 250'), 'minecraft:blaze_powder').id(`${ID_PREFIX}squeezer/blaze_powder`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 1000'), 'minecraft:ice').id(`${ID_PREFIX}squeezer/ice`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 1000'), 'minecraft:snow_block').id(`${ID_PREFIX}squeezer/snow_block`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 250'), 'minecraft:snowball').id(`${ID_PREFIX}squeezer/snowball`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 125'), 'minecraft:snow').id(`${ID_PREFIX}squeezer/snow`);

  // Ecologics
  if (Platform.isLoaded('ecologics')) {
    event.recipes.immersiveengineering.squeezer(Fluid.of('immersiveengineering:plantoil 100'), 'ecologics:walnut').id(`${ID_PREFIX}squeezer/walnuts`);
  }
  
  // Immersive Engineering
  event.recipes.immersiveengineering.squeezer(Fluid.of('immersiveengineering:plantoil 120'), '#forge:seeds/hemp').id(`${ID_PREFIX}squeezer/hemp`);

  // Integrated Dynamics
  if (Platform.isLoaded('integrateddynamics')) {
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:liquid_chorus 125'), 'minecraft:popped_chorus_fruit').id(`${ID_PREFIX}squeezer/popped_chorus_fruit`);
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:liquid_chorus 125'), 'integrateddynamics:proto_chorus').id(`${ID_PREFIX}squeezer/proto_chorus`);
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:menril_resin 1000'), 'integrateddynamics:menril_log').id(`${ID_PREFIX}squeezer/menril_log`);
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:menril_resin 250'), 'integrateddynamics:menril_planks').id(`${ID_PREFIX}squeezer/menril_planks`);
  }

  // Starbunclemania
  if (Platform.isLoaded('starbunclemania')) {
    event.recipes.immersiveengineering.squeezer(Fluid.of('starbunclemania:source_fluid 100'), 'ars_nouveau:sourceberry_bush').id(`${ID_PREFIX}squeezer/sourceberries`);
  }

  // Supplementaries
  if (Platform.isLoaded('supplementaries')) {
    event.recipes.immersiveengineering.squeezer(Fluid.of('immersiveengineering:plantoil 100'), '#forge:seeds/flax').id(`${ID_PREFIX}squeezer/flax`);
  }

  // Garden Cloche
  // Blazing bamboo (replace when we have schema)
  event.custom({
    "type":"immersiveengineering:cloche",
    "input": {
      "item":"blazingbamboo:blazing_bamboo_item"
    },
    "render": {
      "type":"stacking",
      "block":"blazingbamboo:blazing_bamboo"
    },
    "results": [{
        "item":"blazingbamboo:blazing_bamboo_item"
    }],
    "soil": {
      "item": "minecraft:netherrack"
    },
    "time": 560
  }).id(`${ID_PREFIX}garden_cloche/blazing_bamboo`);

  // BTH NanoBot Soda (8 bottles per bucket - can be adjust if needed)
  event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 125,
      "tag": "bth:nanobot_soda"
    },
    "input": {
      "item": "bth:nanobot_soda_bottle_empty"
    },
    "results": [
      {
        "item": "bth:nanobot_soda_bottle"
      }
    ]
  });

  event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 1000,
      "tag": "bth:hyper_nutritious_goo"
    },
    "input": {
      "item": "minecraft:bucket"
    },
    "results": [
      {
        "item": "bth:hyper_nutritious_goo_bucket"
      }
    ]
  });

});
