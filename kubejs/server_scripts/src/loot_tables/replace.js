// priority: 10

/**
 * @file Replace all loot of a specific type with another.
 */


// Replace loot item globally
LootJS.modifiers((event) => {
  event
    .addLootTableModifier(/.*/)
    .replaceLoot('alexscaves:sulfur_dust', 'eidolon:sulfur', true)
    .replaceLoot('farmersdelight:rope', 'supplementaries:rope', true)
    .replaceLoot('galosphere:silver_nugget', 'eidolon:silver_nugget', true)
    .replaceLoot('immersiveengineering:nugget_lead', 'eidolon:lead_nugget', true)
    .replaceLoot('immersiveengineering:nugget_silver', 'eidolon:silver_nugget', true);
});
