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
    /upgrade_aquatic:.*bedroll/,
    /valhelsia_structures:.*sleeping_bag/,
  ]);
});