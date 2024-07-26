// priority: 10

/**
 * @file Recipe additions for Immersive Engineering's crafting methods.
 *
 */

/**
 * Immersive Engineering Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:immersiveengineering/';

  // Not an important recipe, just for testing functionality
  event.recipes.immersiveengineering.metal_press(
    'upgrade_aquatic:prismarine_rod',
    'minecraft:prismarine_shard',
    'immersiveengineering:mold_rod'
  ).id(`${ID_PREFIX}metalpress/prismarine_rod`);

  event.recipes.immersiveengineering.metal_press(
    'createdeco:andesite_sheet',
    'create:andesite_alloy',
    'immersiveengineering:mold_plate'
  ).id(`${ID_PREFIX}metalpress/andesite_sheet`);

  // Added for BTH to match Create's recipe
  event.recipes.immersiveengineering.crusher(
    'createaddition:diamond_grit',
    'minecraft:diamond'
  ).id(`${ID_PREFIX}crusher/diamond_grit`);

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
    }
  );

  event.remove({id: 'immersiveengineering:crusher/nether_gold'});
  event.recipes.immersiveengineering.crusher(
    '2x create:crushed_raw_gold',
    'minecraft:nether_gold_ore'
  ).id(`${ID_PREFIX}crusher/nether_gold`);

  // AE2 dusts from crusher
  event.recipes.immersiveengineering.crusher('ae2:certus_quartz_dust', '#ae2:all_certus_quartz').id(`${ID_PREFIX}crusher/certus_quartz`);
  event.recipes.immersiveengineering.crusher('ae2:ender_dust', 'minecraft:ender_pearl').id(`${ID_PREFIX}crusher/ender_pearl`);
  event.recipes.immersiveengineering.crusher('ae2:fluix_dust', 'ae2:fluix_crystal').id(`${ID_PREFIX}crusher/fluix_crystal`);
  event.recipes.immersiveengineering.crusher('ae2:sky_dust', 'ae2:sky_stone_block').id(`${ID_PREFIX}crusher/sky_stone_block`);

  // AE2 dusts from hammering
  event.recipes.immersiveengineering.hammer_crushing('ae2:certus_quartz_dust', '#ae2:all_certus_quartz').id(`${ID_PREFIX}hammer_crushing/certus_quartz`);
  event.recipes.immersiveengineering.hammer_crushing('ae2:ender_dust', 'minecraft:ender_pearl').id(`${ID_PREFIX}hammer_crushing/ender_pearl`);
  event.recipes.immersiveengineering.hammer_crushing('ae2:fluix_dust', 'ae2:fluix_crystal').id(`${ID_PREFIX}hammer_crushing/fluix_crystal`);
  event.recipes.immersiveengineering.hammer_crushing('ae2:sky_dust', 'ae2:sky_stone_block').id(`${ID_PREFIX}hammer_crushing/sky_stone_block`);

});
