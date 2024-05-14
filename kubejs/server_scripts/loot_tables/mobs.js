
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

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("irons_spellbooks:archevoker")
      .addLoot("endrem:magical_eye");
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("irons_spellbooks:cryomancer")
      .addLoot("endrem:cold_eye");
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("irons_spellbooks:apothecarist")
      .addLoot("endrem:witch_eye");
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("irons_spellbooks:priest")
      .addLoot("endrem:evil_eye");
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("irons_spellbooks:dead_king")
      .addLoot("endrem:undead_eye");
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("aquamirae:captain_cornelia")
      .addLoot("endrem:black_eye");
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("minecraft:elder_guardian")
      .addLoot("endrem:guardian_eye");
});
