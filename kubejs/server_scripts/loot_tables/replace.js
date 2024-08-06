// priority: 10

/**
 * @file Replace all loot of a specific type with another.
 */


// Replace loot item globally
LootJS.modifiers((event) => {
  event
    .addLootTableModifier(/.*/)
    .replaceLoot('galosphere:silver_nugget', 'eidolon:silver_nugget', true);

  event
    .addLootTableModifier(/.*/)
    .replaceLoot('farmersdelight:rope', 'supplementaries:rope', true);
});
