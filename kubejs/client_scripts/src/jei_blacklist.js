// priority: 0

/**
 * @file JEI Blacklist for Beyond the Horizon
 *
 * For consistency, Item / Fluid IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 *
 */

/**
 * JEI Item Hiding Event Handler
 */
JEIEvents.hideItems(event => {
  event.hide([
    'ae2:facade',
    'bbb:rope',
    'buzzier_bees:honey_apple',
    /clayworks:.*terracotta_brick.*/,
    'cofh_core:experience',
    'cofh_core:honey',
    'cofh_core:potion',
    'create:crushed_raw_uranium',
    'createaddition:copper_wire',
    'createaddition:electrum_wire',
    'createdeco:zinc_sheet',
    'farmersdelight:rope',
    'galosphere:deepslate_silver_ore',
    'galosphere:raw_silver',
    'galosphere:silver_block',
    'galosphere:silver_ingot',
    'galosphere:silver_nugget',
    'galosphere:silver_ore',
    'immersive_aircraft:propeller',
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:deepslate_ore_silver',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_silver',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_silver',
    'immersiveengineering:plate_copper',
    'immersiveengineering:plate_electrum',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_iron',
    'immersiveengineering:raw_block_silver',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:raw_silver',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:slab_storage_uranium',
    'immersiveengineering:storage_silver',
    'immersiveengineering:storage_uranium',
    'incubation:fried_egg',
    'neapolitan:milk_bottle',
    'nethersdelight:blackstone_furnace',
    'paraglider:spirit_orb',
    'paraglider:anti_vessel',
    'paraglider:essence',
    /paraglider:.*statue.*/,
    'powah:uraninite_raw',
    /powah:.*uraninite_ore.*/,
    /quark:.*shingles.*/,
    'rats:rat_upgrade_aristocrat',
    'rustic_engineer:abyssal_submarine_item',
    'rustic_engineer:air_ship_item',
    'rustic_engineer:chair',
    'rustic_engineer:engine',
    'rustic_engineer:gear',
    'rustic_engineer:golden_pieces',
    'rustic_engineer:hydraulic_press',
    'rustic_engineer:movable_parts',
    'rustic_engineer:pipe_wrench',
    'rustic_engineer:tool_mech',
    /rustic_engineer:.*solarite*/,
    /rustic_engineer:book.*/,
    /upgrade_aquatic:.*bedroll/,
    'v_slab_compat:immersiveengineering/storage_uranium_vertical_slab',
    /valhelsia_structures:.*sleeping_bag/,
    /wardrobe:.*backpack/,
    /waystones:.*/,
    /woodworks:.*ladder/,
  ]);

  // Hide IE dusts that are replaced by Create crushed raw ores.
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) =>
    event.hide(`immersiveengineering:dust_${material}`)
  );

});