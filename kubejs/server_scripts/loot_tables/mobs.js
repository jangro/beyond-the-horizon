
/**
 * @file Mob loot table injection / replacement for Beyond the Horizon.
 */


//
// Add loot
//

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
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("minecraft:evoker")
      .removeLoot("endrem:magical_eye");
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

// Make the unique eyes from End Remastered more accessible and add Aquamirae Shelter map
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("aquamirae:captain_cornelia")
      .addLoot("endrem:black_eye")
      .addLoot(LootEntry.of(aquamirae_shelter_map).when((c) => c.randomChance(0.5)));
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("minecraft:elder_guardian")
      .removeLoot("endrem:guardian_eye")
      .addLoot("endrem:guardian_eye");
});

// Make the unique eyes from End Remastered more accessible
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("minecraft:wither")
      .removeLoot("endrem:wither_eye")
      .addLoot("endrem:wither_eye");
});

// Warden guaranteed to drop a map to the Ancient City
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("minecraft:warden")
      .addLoot(ancient_city_map);
});


//
// Remove loot
//

// Remove or reduce drops that can be used to make the Chunky Cheese Token
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("rats:black_death")
      .removeLoot('rats:token_piece')
      .addLoot(LootEntry.of('rats:token_piece').when((c) => c.randomChance(0.1)));
});
LootJS.modifiers((event) => {
  event
      .addEntityLootModifier("rats:pied_piper")
      .removeLoot('rats:token_fragment');
});

