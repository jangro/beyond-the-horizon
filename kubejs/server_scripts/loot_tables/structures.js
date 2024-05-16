
/**
 * @file Structure loot table injection / replacement for Beyond the Horizon.
 */

// Add Tiny Coins chance to all loot chests
// All loot chests have a 10% chance to generate coins. The amount of coins is function
// of distance to spawn. Near spawn there will be 1-5 coins, and increase linearly to
// 10-50 coins 20000 or more blocks away from spawn in a straight line.
LootJS.modifiers((event) => {
  event.addLootTypeModifier("chest").randomChance(0.1).apply((context) => {
      let p = context.getBlockPos();
      let distance = Math.min(Math.max(Math.sqrt(p.x * p.x + p.z * p.z), 0), 20000);
      let factor = 9.0/20000.0*distance + 1; // from 1 (at spawn) to 10 (at 20000+ blocks from spawn)
      let count = Math.floor(Math.random() * 5) + 1;
      context.addLoot(Item.of("rats:tiny_coin", count * factor));
  });
});

// Add increased chance of coins and increase number of coins in dungeons
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .randomChance(0.3)
    .anyStructure([
      'dungeons_arise:abandoned_temple',
      'dungeons_arise:aviary',
      'dungeons_arise:bandit_towers',
      'dungeons_arise:bandit_village',
      'dungeons_arise:bathhouse',
      'dungeons_arise:coliseum',
      'dungeons_arise:fishing_hut',
      'dungeons_arise:foundry',
      'dungeons_arise:giant_mushroom',
      'dungeons_arise:greenwood_pub',
      'dungeons_arise:illager_campsite',
      'dungeons_arise:illager_fort',
      'dungeons_arise:illager_windmill',
      'dungeons_arise:infested_temple',
      'dungeons_arise:jungle_tree_house',
      'dungeons_arise:keep_kayra',
      'dungeons_arise:lighthouse',
      'dungeons_arise:mechanical_nest',
      'dungeons_arise:merchant_campsite',
      'dungeons_arise:mining_system',
      'dungeons_arise:monastery',
      'dungeons_arise:mushroom_village',
      'dungeons_arise:plague_asylum',
      'dungeons_arise:scorched_mines',
      'dungeons_arise:shiraz_place',
      'dungeons_arise:small_prairie_house',
      'dungeons_arise:thornborn_towers',
      'dungeons_arise:typhon',
      'dungeons_arise:undead_pirate_ship',
      ], false)
    .addWeightedLoot([
      Item.of("rats:tiny_coin", 7).withChance(1),
      Item.of("rats:tiny_coin", 10).withChance(1),
      Item.of("rats:tiny_coin", 14).withChance(1),
      Item.of("rats:tiny_coin", 17).withChance(1),
      Item.of("rats:tiny_coin", 19).withChance(1)
    ]);
});


// Add biome maps to towers. The first successful roll will be added.
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["totw_modded:regular", "totw_modded:ice"], false)
    .addWeightedLoot([
      Item.of(desert_map).withChance(1),
      Item.of(flower_forest_map).withChance(1),
      Item.of(jungle_map).withChance(1),
      Item.of(swamp_map).withChance(1),
      Item.of(lush_caves_map).withChance(1),
      Item.of(cherry_grove_map).withChance(1),
    ]);
});

// Add Forbidden Castle map to Piglin villages
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["incendium:piglin_village"], false)
    .randomChance(0.1) // 10% per chest
    .addLoot(forbidden_castle_map)
});

// Add Aquamirae Shelter map to the following structures
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure([
      'aquamirae:ship',
      'dungeons_arise:undead_pirate_ship',
      'irons_spellbooks:impaled_icebreaker',
      'minecraft:shipwreck',
      'minecraft:buried_treasure',
      'minecraft:ocean_ruin_cold',
      'towns_and_towers:pillager_outpost_ocean',
      'towns_and_towers:wreckage_ocean',
      ], false)
    .randomChance(0.1)
    .addLoot(aquamirae_shelter_map);
});

// Add Jungle and Desert temple maps to the following structures
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure([
      'alexscaves:underground_cabin',
      'ars_nouveau:wilden_den',
      'ctov:large/village_desert',
      'ctov:large/village_desert_oasis',
      'ctov:medium/village_desert',
      'ctov:medium/village_desert_oasis',
      'ctov:small/village_desert',
      'ctov:small/village_desert_oasis',
      'ctov:large/village_jungle',
      'ctov:large/village_jungle_tree',
      'ctov:medium/village_jungle',
      'ctov:medium/village_jungle_tree',
      'ctov:small/village_jungle',
      'ctov:small/village_jungle_tree',
      'betterdeserttemples:desert_temple',
      'ctov:pillager_outpost_jungle',
      'ctov:pillager_outpost_desert',
      'dungeons_arise:jungle_tree_house',
      'terralith:fortified_desert_village',
      'towns_and_towers:pillager_outpost_desert',
      'towns_and_towers:pillager_outpost_jungle',
      'towns_and_towers:pillager_outpost_sparse_jungle',
      'towns_and_towers:village_jungle',
      'towns_and_towers:village_sparse_jungle',
      'valhelsia_structures:desert_house',
    ], false)
    .addLoot(LootEntry.of(jungle_temple_map).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(desert_temple_map).when((c) => c.randomChance(0.1)));
});

// Add Ancient City map to the following structures with different chances
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betteroceanmonuments:ocean_monument"], false)
    .randomChance(0.1)
    .addLoot(ancient_city_map)
});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betterstrongholds"], false)
    .randomChance(0.05)
    .addLoot(ancient_city_map)
});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["alexscaves:underground_cabin"], false)
    .randomChance(0.5)
    .addLoot(ancient_city_map)
});

// Any loot chest in a deep dark biome should have a chance to contain an Ancient City map
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyBiome("minecraft:deep_dark") 
    .randomChance(0.2)
    .addLoot(ancient_city_map)
});
// But, remove maps to Ancient Cities from Ancient City loot chests
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["minecraft:ancient_city"], false)
    .removeLoot(ancient_city_map)
});

// Add Evoker Fort and Mansion maps to the following structures with different chances
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure([
      'minecraft:mansion',
      'dungeons_arise:illager_campsite',
      'dungeons_arise:illager_fort',
      'ctov:pillager_outpost_plains',
      'dungeons_arise:illager_windmill',
    ], false)
    .addLoot(LootEntry.of(evoker_fort_map).when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of(mansion_map).when((c) => c.randomChance(0.05)));
});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure([
      'minecraft:pillager_outpost',
      'ctov:pillager_outpost_badlands',
      'ctov:pillager_outpost_beach',
      'ctov:pillager_outpost_dark_forest',
      'ctov:pillager_outpost_desert',
      'ctov:pillager_outpost_jungle',
      'ctov:pillager_outpost_mesa',
      'ctov:pillager_outpost_mountains',
      'ctov:pillager_outpost_savanna',
      'ctov:pillager_outpost_snowy',
      'ctov:pillager_outpost_swamp',
      'ctov:pillager_outpost_taiga',
      'hunters_return:hunter_house',
    ], false)
    .addLoot(LootEntry.of(evoker_fort_map).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(mansion_map).when((c) => c.randomChance(0.1)));
});

// Add Impaled Icebreaker and Snowy Plains maps to the following structures with different chances
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["irons_spellbooks:mountain_tower"], false)
    .addLoot(LootEntry.of(impaled_icebreaker_map).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(snowy_plains_map).when((c) => c.randomChance(0.1)));

});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["dungeons_arise:lighthouse"], false)
    .randomChance(1) // Only one chest in this structure
    .addLoot(impaled_icebreaker_map)
});
