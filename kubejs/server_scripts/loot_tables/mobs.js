
/**
 * @file Mob loot table injection / replacement for Beyond the Horizon.
 */


// Because we reduced biomes where flies can spawn
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("minecraft:zombie")
      .randomChance(0.1) // 10% chance
      .addLoot("alexsmobs:maggot");
});

// Make the undead eye from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("eidolon:wraith")
      .randomChance(0.3) // 30% chance
      .addLoot("endrem:undead_soul");
});
