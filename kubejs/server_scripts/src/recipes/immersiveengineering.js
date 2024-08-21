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

  // Metal Press Recipes - Gears
  // Create
  if (Platform.isLoaded('create')) {
    event.recipes.immersiveengineering.metal_press('create:cogwheel', 'create:andesite_alloy', 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/cogwheel`);
  }
  // Immersive Engineering
  event.recipes.immersiveengineering.metal_press('immersiveengineering:sawblade', '6x #forge:ingots/steel', 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/sawblade`);

  // PneumaticCraft
  if (Platform.isLoaded('pneumaticcraft')) {
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:compressed_iron_gear', '4x #forge:ingots/compressed_iron', 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/compressed_iron_gear`);
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
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:plastic', '3x rats:raw_plastic').id(`${ID_PREFIX}metalpress/plastic_from_raw_plastic`);
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:plastic', '#pneumaticcraft:plastic_bricks').id(`${ID_PREFIX}metal_press/plastic_from_plastic_bricks`);
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:plastic', '#pneumaticcraft:smooth_plastic_bricks').id(`${ID_PREFIX}metal_press/plastic_from_smooth_plastic_bricks`);
  }

  // Tetra
  if (Platform.isLoaded('tetra')) {
    event.recipes.immersiveengineering.metal_press('tetra:vent_plate', 'tetra:metal_scrap').id(`${ID_PREFIX}metal_press/vent_plate_from_metal_scrap`);
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

  // Crusher Recipes
  // Replace IE recipes to switch grit/dust for Create crushed ores
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) =>
  {
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

  // Fermenter Recipes

  // Farmer's Delight
  if (Platform.isLoaded('farmersdelight')) {
    event.recipes.immersiveengineering.fermenter(Fluid.of('immersiveengineering:ethanol 80'), '#forge:seeds/rice').id(`${ID_PREFIX}fermenter/rice`);
  }

  // Squeezer Recipes
  
  // Minecraft
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:lava 250'), 'minecraft:blaze_powder').id(`${ID_PREFIX}squeezer/blaze_powder`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 1000'), 'minecraft:ice').id(`${ID_PREFIX}squeezer/ice`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 1000'), 'minecraft:snow_block').id(`${ID_PREFIX}squeezer/snow_block`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 250'), 'minecraft:snowball').id(`${ID_PREFIX}squeezer/snowball`);
  event.recipes.immersiveengineering.squeezer(Fluid.of('minecraft:water 125'), 'minecraft:snow').id(`${ID_PREFIX}squeezer/snow`);

  // Immersive Engineering
  event.recipes.immersiveengineering.squeezer(Fluid.of('immersiveengineering:plantoil 120'), '#forge:seeds/hemp').id(`${ID_PREFIX}squeezer/hemp`);

  // Ecologics
  if (Platform.isLoaded('ecologics')) {
    event.recipes.immersiveengineering.squeezer(Fluid.of('immersiveengineering:plantoil 100'), 'ecologics:walnut').id(`${ID_PREFIX}squeezer/walnuts`);
  }

  // Integrated Dynamics
  if (Platform.isLoaded('integrateddynamics')) {
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:liquid_chorus 125'), 'minecraft:popped_chorus_fruit').id(`${ID_PREFIX}squeezer/popped_chorus_fruit`);
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:liquid_chorus 125'), 'integrateddynamics:proto_chorus').id(`${ID_PREFIX}squeezer/proto_chorus`);
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:menril_resin 1000'), 'integrateddynamics:menril_log').id(`${ID_PREFIX}squeezer/menril_log`);
    event.recipes.immersiveengineering.squeezer(Fluid.of('integrateddynamics:menril_resin 250'), 'integrateddynamics:menril_planks').id(`${ID_PREFIX}squeezer/menril_planks`);
  }

  // Supplementaries
  if (Platform.isLoaded('supplementaries')) {
    event.recipes.immersiveengineering.squeezer(Fluid.of('immersiveengineering:plantoil 100'), '#forge:seeds/flax').id(`${ID_PREFIX}squeezer/flax`);
  }


});
