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
    /upgrade_aquatic:.*bedroll/,
    /valhelsia_structures:.*sleeping_bag/,
    /wardrobe:.*backpack/,
    /waystones:.*/,
    'rats:rat_upgrade_aristocrat',
  ]);
});