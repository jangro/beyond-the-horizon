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
    'cofh_core:experience',
    'cofh_core:honey',
    'cofh_core:potion',
    'farmersdelight:rope',
    'immersive_aircraft:propeller',
    'incubation:fried_egg',
    'neapolitan:milk_bottle',
    'rats:rat_upgrade_aristocrat',
    'rustic_engineer:abyssal_submarine_item',
    'rustic_engineer:air_ship_item',
    'rustic_engineer:chair',
    'rustic_engineer:engine',
    'rustic_engineer:gear',
    'rustic_engineer:golden_pieces',
    'rustic_engineer:hydraulic_press',
    'rustic_engineer:movable_parts',
    'rustic_engineer:tool_mech',
    /rustic_engineer:.*solarite*/,
    /rustic_engineer:book.*/,
    /upgrade_aquatic:.*bedroll/,
    /valhelsia_structures:.*sleeping_bag/,
    /wardrobe:.*backpack/,
    /waystones:.*/,
  ]);
});
