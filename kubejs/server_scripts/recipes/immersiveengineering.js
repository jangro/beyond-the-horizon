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

  // Added for BTH to match Create's recipe
  event.recipes.immersiveengineering.crusher(
    'createaddition:diamond_grit',
    'minecraft:diamond'
  ).id(`${ID_PREFIX}crusher/diamond_grit`);

  // Replace IE recipes to switch grit/dust for Create crushed ores
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver', 'uranium'].forEach((material) =>
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

});
