// priority: 10

/**
 * @file Structure loot table injection / replacement for Beyond the Horizon.
 */

// Add Tiny Coins chance to all loot chests
// All loot chests have a 10% chance to generate coins. The amount of coins is function
// of distance to spawn. Near spawn there will be 1-5 coins, and increase linearly to
// 10-50 coins 10000 or more blocks away from spawn in a straight line.
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyDimension("minecraft:overworld")
    .randomChance(0.1)
    .apply((context) => {
      let p = context.getBlockPos();
      let distance = Math.min(Math.max(Math.sqrt(p.x * p.x + p.z * p.z), 0), 10000);
      let factor = 9.0/10000.0*distance + 1; // from 1 (at spawn) to 10 (at 10000+ blocks from spawn)
      let count = Math.floor(Math.random() * 5) + 1;
      context.addLoot(Item.of("rats:tiny_coin", count * factor));
  });
});

// Make loot max out at half the distance for the following dimensions
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyDimension(["minecraft:the_end", "minecraft:the_nether", "aether:the_aether"])
    .randomChance(0.1)
    .apply((context) => {
      let p = context.getBlockPos();
      let distance = Math.min(Math.max(Math.sqrt(p.x * p.x + p.z * p.z), 0), 5000);
      let factor = 9.0/5000.0*distance + 1; // from 1 (at spawn) to 10 (at 5000+ blocks from spawn)
      let count = Math.floor(Math.random() * 5) + 1;
      context.addLoot(Item.of("rats:tiny_coin", count * factor));
  });
});

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// For Ratlantis shipwrecks, we clear the loot table to remove all overworld loot.
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier('chest')
    .anyDimension(['rats:ratlantis'])
    //.anyStructure('minecraft:shipwreck', false) // doesn't work?!
    .apply((context) => {
      // Clear the loot in shipwrecks but not ghostships (limit to under Y=80)
      let p = context.getBlockPos();
      if (p.y < 80) {
        context.removeLoot(Ingredient.all);
      }
    })
    .addWeightedLoot(
      [4, 12],
      [
        LootEntry.withChance({item: 'minecraft:diamond', count: 3}, 0.1),
        LootEntry.withChance({item: 'minecraft:gold', count: 3}, 0.1),
        LootEntry.withChance({item: 'minecraft:emerald', count: 3}, 0.1),
        LootEntry.withChance({item: 'minecraft:rotten_flesh', count: 1}, 1),

        LootEntry.withChance({item: 'ae2:cell_component_1k', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:cell_component_4k', count: 1}, 0.5),
        LootEntry.withChance({item: 'ae2:cell_component_16k', count: 1}, 0.1),
        LootEntry.withChance({item: 'ae2:spatial_cell_component_2', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:spatial_pylon', count: 3}, 1),
        LootEntry.withChance({item: 'ae2:energy_cell', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:fluix_glass_cable', count: 10}, 1),
        LootEntry.withChance({item: 'ae2:storage_bus', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:export_bus', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:import_bus', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:formation_core', count: 1}, 0.5),
        LootEntry.withChance({item: 'ae2:annihilation_core', count: 1}, 0.5),
        LootEntry.withChance({item: 'ae2:wireless_booster', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:sky_stone_tank', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:logic_processor', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:calculation_processor', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:engineering_processor', count: 1}, 1),
        LootEntry.withChance({item: 'ae2:certus_quartz_crystal', count: 5}, 1),
        LootEntry.withChance({item: 'ae2:fluix_crystal', count: 5}, 1),

        LootEntry.withChance({item: 'create:cogwheel', count: 2}, 1),
        LootEntry.withChance({item: 'create:large_cogwheel', count: 1}, 1),
        LootEntry.withChance({item: 'create:belt_connecter', count: 5}, 1),
        LootEntry.withChance({item: 'create:shaft', count: 5}, 1),
        LootEntry.withChance({item: 'create:andesite_casing', count: 3}, 1),
        LootEntry.withChance({item: 'create:precision_mechanism', count: 1}, 1),
        LootEntry.withChance({item: 'create:copper_backtank', count: 1}, 0.1),
        LootEntry.withChance({item: 'create:copper_diving_helmet', count: 1}, 0.1),
        LootEntry.withChance({item: 'create:copper_diving_boots', count: 1}, 0.1),
        LootEntry.withChance({item: 'create:copper_casing', count: 3}, 1),
        LootEntry.withChance({item: 'create:item_vault', count: 3}, 0.1),
        LootEntry.withChance({item: 'create:mechanical_crafter', count: 4}, 0.02),
        LootEntry.withChance({item: 'create:electron_tube', count: 2}, 1),
        LootEntry.withChance({item: 'create:brass_ingot', count: 6}, 1),
        LootEntry.withChance({item: 'create:track', count: 8}, 1),
        LootEntry.withChance({item: 'create:sturdy_sheet', count: 1}, 1),
        LootEntry.withChance({item: 'create:railway_casing', count: 3}, 1),
        LootEntry.withChance({item: 'create:controls', count: 1}, 0.01),
        LootEntry.withChance({item: 'create:track_station', count: 1}, 0.5),

        LootEntry.withChance({item: 'domesticationinnovation:rotten_apple', count: 1}, 1),

        LootEntry.withChance({item: 'farmersdelight:rotten_tomato', count: 1}, 1),

        LootEntry.withChance({item: 'forbidden_arcanus:rotten_leather', count: 1}, 1),

        LootEntry.withChance({item: 'pneumaticcraft:printed_circuit_board', count: 1}, 1),
        LootEntry.withChance({item: 'pneumaticcraft:module_expansion_card', count: 1}, 1),
        LootEntry.withChance({item: 'pneumaticcraft:smart_chest', count: 1}, 0.1),
        LootEntry.withChance({item: 'pneumaticcraft:large_tank', count: 1}, 0.1),
        LootEntry.withChance({item: 'pneumaticcraft:turbine_rotor', count: 1}, 1),
        LootEntry.withChance({item: 'pneumaticcraft:advanced_pressure_tube', count: 6}, 0.5),
        LootEntry.withChance({item: 'pneumaticcraft:plastic_sheets', count: 12}, 1),
        LootEntry.withChance({item: 'pneumaticcraft:aphorism_tile', count: 1}, 1),

        LootEntry.withChance({item: 'powah:capacitor_basic_tiny', count: 4}, 1),
        LootEntry.withChance({item: 'powah:capacitor_basic', count: 4}, 1),
        LootEntry.withChance({item: 'powah:capacitor_basic_large', count: 4}, 1),
        LootEntry.withChance({item: 'powah:dielecric_paste', count: 32}, 1),
        LootEntry.withChance({item: 'powah:dielecric_casing', count: 3}, 1),
        LootEntry.withChance({item: 'powah:thermoelectic_plate', count: 1}, 1),
        LootEntry.withChance({item: 'powah:charged_snowball', count: 3}, 0.02),
        LootEntry.withChance({item: 'powah:steel_energized', count: 12}, 1),
        LootEntry.withChance({item: 'powah:crystal_blazing', count: 12}, 0.5),
        LootEntry.withChance({item: 'powah:crystal_niotic', count: 12}, 0.1),
        LootEntry.withChance({item: 'powah:crystal_spirited', count: 12}, 0.05),
        LootEntry.withChance({item: 'powah:crystal_nitro', count: 12}, 0.01),
        LootEntry.withChance({item: 'powah:energy_cable_starter', count: 36}, 1),
        LootEntry.withChance({item: 'powah:energy_cable_basic', count: 36}, 0.5),
        LootEntry.withChance({item: 'powah:energy_cable_hardened', count: 36}, 0.1),
        LootEntry.withChance({item: 'powah:photo_electric_pane', count: 1}, 1),

        LootEntry.withChance({item: 'rats:rat_skull', count: 1}, 0.05),
        LootEntry.withChance({item: 'rats:contaminated_food', count: 1}, 1),
        LootEntry.withChance({item: 'rats:nether_cheese', count: 3}, 1),
        LootEntry.withChance({item: 'rats:string_cheese', count: 5}, 1),
        LootEntry.withChance({item: 'rats:marbled_cheese', count: 6}, 1),
        LootEntry.withChance({item: 'rats:rat_paw', count: 1}, 1),
        LootEntry.withChance({item: 'rats:filth', count: 1}, 1),
        LootEntry.withChance({item: 'rats:pirat_cutlass', count: 1}, 0.05),
        LootEntry.withChance({item: 'rats:trash_can', count: 1}, 0.05),
        LootEntry.withChance({item: 'rats:plague_stew', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:ghost_pirat_ectoplasm', count: 2}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_basic', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_speed', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_health', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_ender', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_ore_doubling', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_chicken_mount', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_time_manipulator', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_platter', count: 1}, 0.1),
        LootEntry.withChance({item: 'rats:rat_upgrade_aristocrat', count: 1}, 0.05),

        LootEntry.withChance({item: 'smallships:cannon', count: 1}, 0.01),
        LootEntry.withChance({item: 'smallships:cannon_ball', count: 3}, 0.1),
      ]
    );
});

// Add a random amount (10-30) of tiny coins to all loot chests in Ratlantis
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier('chest')
    .anyDimension(['rats:ratlantis'])
    .randomChance(0.5)
    .apply((context) => {
      context.addLoot(Item.of('rats:tiny_coin', Math.floor(Math.random() * 21) + 10));
    });
});

// Add increased chance of coins and increase number of coins in dungeons
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier('chest')
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
      .apply((context) => {
        context.addLoot(Item.of("rats:tiny_coin", Math.floor(Math.random() * 21) + 0));
      });
  });

// Add Forbidden Castle map to Piglin villages
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["incendium:piglin_village"], false)
    .randomChance(0.1) // 10% per chest
    .addLoot(FORBIDDEN_CASTLE_MAP)
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
    .addLoot(AQUAMIRAE_SHELTER_MAP);
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
    .addLoot(LootEntry.of(JUNGLE_TEMPLE_MAP).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(DESERT_TEMPLE_MAP).when((c) => c.randomChance(0.1)));
});

// Add Ancient City map to the following structures with different chances
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betteroceanmonuments:ocean_monument"], false)
    .randomChance(0.1)
    .addLoot(ANCIENT_CITY_MAP)
});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betterstrongholds"], false)
    .randomChance(0.05)
    .addLoot(ANCIENT_CITY_MAP)
});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["alexscaves:underground_cabin"], false)
    .randomChance(0.5)
    .addLoot(ANCIENT_CITY_MAP)
});

// Any loot chest in a deep dark biome should have a chance to contain an Ancient City map
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyBiome("minecraft:deep_dark")
    .randomChance(0.2)
    .addLoot(ANCIENT_CITY_MAP)
});
// But, remove maps to Ancient Cities from Ancient City loot chests
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["minecraft:ancient_city"], false)
    .removeLoot(ANCIENT_CITY_MAP)
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
    .addLoot(LootEntry.of(EVOKER_FORT_MAP).when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of(MANSION_MAP).when((c) => c.randomChance(0.05)));
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
    .addLoot(LootEntry.of(EVOKER_FORT_MAP).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(MANSION_MAP).when((c) => c.randomChance(0.1)));
});

// Add Impaled Icebreaker and Snowy Plains maps to the following structures with different chances
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["irons_spellbooks:mountain_tower"], false)
    .addLoot(LootEntry.of(IMPALED_ICEBREAKER_MAP).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(SNOWY_PLAINS_MAP).when((c) => c.randomChance(0.1)));

});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["dungeons_arise:lighthouse"], false)
    .randomChance(1) // Only one chest in this structure
    .addLoot(IMPALED_ICEBREAKER_MAP)
});

// Add cursed eye to the Forbidden Castle
// XXX: would be better if we could target a specific chest at 100% instead of the whole structure
// 5% chance might be too much or too little, and no guarantee of getting an eye.
// But, probably there are at least 20 chests in this structure so should be a good chance of getting one.
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["incendium:forbidden_castle"], false)
    .randomChance(0.05)
    .addLoot("endrem:cursed_eye")
});
