// priority: 10

/**
 * @file Mob loot table injection / replacement for Beyond the Horizon.
 */


/**
 * Remove loot from mobs.
 */
LootJS.modifiers((event) => {
  // Remove or reduce drops that can be used to make the Chunky Cheese Token
  event.addEntityLootModifier('rats:black_death')
       .removeLoot('rats:token_piece');

  event.addEntityLootModifier('rats:pied_piper')
       .removeLoot('rats:token_fragment');
});


/**
 * Add loot to mobs.
 */
LootJS.modifiers((event) => {
  // Because we reduced biomes where flies can spawn.
  event.addEntityLootModifier('minecraft:zombie')
       .randomChance(0.1) // 10% chance
       .addLoot('alexsmobs:maggot');

  // Increased accessibility of End Remastered eyes:
  event.addEntityLootModifier('eidolon:wraith')
       .randomChance(0.3) // 30% chance
       .addLoot('endrem:undead_soul');

  event.addEntityLootModifier('irons_spellbooks:archevoker')
       .addLoot('endrem:magical_eye');

  event.addEntityLootModifier('minecraft:evoker')
       .removeLoot('endrem:magical_eye');

  event.addEntityLootModifier('irons_spellbooks:cryomancer')
       .addLoot('endrem:cold_eye');

  event.addEntityLootModifier('irons_spellbooks:apothecarist')
       .addLoot('endrem:witch_eye');
  
  event.addEntityLootModifier('irons_spellbooks:priest')
       .addLoot('endrem:evil_eye');

  event.addEntityLootModifier('irons_spellbooks:dead_king')
       .addLoot('endrem:undead_eye');

  event.addEntityLootModifier('aquamirae:captain_cornelia')
       .addLoot('endrem:black_eye')
       .addLoot(LootEntry.of(AQUAMIRAE_SHELTER_MAP).when((c) => c.randomChance(0.5)));

  event.addEntityLootModifier('minecraft:elder_guardian')
       .removeLoot('endrem:guardian_eye')
       .addLoot('endrem:guardian_eye');

  event.addEntityLootModifier('minecraft:wither')
       .removeLoot('endrem:wither_eye')
       .addLoot('endrem:wither_eye');

  // Make mutant enderman drop more pearls
  // Will drop around 15-20 ender pearls, and a few eye of ender with this change.
  event.addEntityLootModifier('mutantmonsters:mutant_enderman')
      .pool((pool) => {
          pool.rolls([1, 3]);
          pool.addLoot('minecraft:ender_pearl');
  });

  // Some extra loot for the mutant zombie.
  event.addEntityLootModifier('mutantmonsters:mutant_zombie').pool((pool) => {
    pool.rolls([10, 30]);
    pool.addLoot('minecraft:rotten_flesh');
  });
  event.addEntityLootModifier('mutantmonsters:mutant_zombie').pool((pool) => {
    pool.addLoot('eidolon:zombie_heart');
    pool.addLoot('forbidden_arcanus:zombie_arm');
  });

  // Remove all coin/token related loot
  event.addEntityLootModifier('rats:rat')
    .removeLoot('rats:chunky_cheese_token');

  event.addEntityLootModifier('rats:pied_piper')
    .removeLoot('rats:token_fragment');

  event.addEntityLootModifier('rats:rat_king')
    .removeLoot('rats:token_piece');

  event.addEntityLootModifier('rats:black_death')
    .removeLoot('rats:token_piece');
});
