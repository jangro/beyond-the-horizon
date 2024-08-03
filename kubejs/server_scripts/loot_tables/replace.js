// priority: 10

/**
 * @file Chest loot table replacement for Beyond the Horizon.
 */


// Replace loot item globally
LootJS.modifiers((event) => {
  event
    .addLootTableModifier(/.*/)
    .replaceLoot('farmersdelight:rope', 'supplementaries:rope', true);
});
