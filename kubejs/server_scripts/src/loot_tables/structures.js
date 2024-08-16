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
    // .anyStructure(['minecraft:shipwreck'], false) // doesn't work?!
    .apply((context) => {
      // Change the loot in shipwrecks but not ghostships (limit to under Y=80 since anyStructure
      // condition doesn't work)
      let p = context.getBlockPos();
      if (p.y < 80) {
        context.removeLoot('minecraft:book');
        context.removeLoot('minecraft:feather');
        context.removeLoot('minecraft:paper');
        context.removeLoot(/minecraft:.*glass_pane/);
        context.removeLoot('minecolonies:scroll_buff');

        context.addLoot(LootEntry.of('ae2:annihilation_core').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('ae2:calculation_processor').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('ae2:cell_component_16k').when((c) => c.randomChance(0.01)));
        context.addLoot(LootEntry.of('ae2:cell_component_1k').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('ae2:cell_component_4k').when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('ae2:certus_quartz_crystal', 8).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('ae2:engineering_processor').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('ae2:fluix_crystal', 8).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('ae2:fluix_dust', 8).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('ae2:fluix_glass_cable', 8).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('ae2:formation_core').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('ae2:logic_processor').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('ae2:spatial_cell_component_2').when((c) => c.randomChance(0.03)));
        context.addLoot(LootEntry.of('ae2:spatial_pylon').when((c) => c.randomChance(0.05)));

        context.addLoot(LootEntry.of('create:andesite_casing', 4).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:belt_connector', 5).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('create:brass_ingot', 6).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('create:cogwheel', 2).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('create:copper_backtank').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:copper_casing').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:copper_diving_boots').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:copper_diving_helmet').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:electron_tube', 2).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:item_vault', 6).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:large_cogwheel', 1).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('create:mechanical_crafter', 4).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:precision_mechanism').when((c) => c.randomChance(0.01)));
        context.addLoot(LootEntry.of('create:railway_casing', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:shaft', 8).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:sturdy_sheet', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('create:track', 8).when((c) => c.randomChance(0.1)));

        context.addLoot(LootEntry.of('pneumaticcraft:advanced_pressure_tube', 6).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('pneumaticcraft:aphorism_tile', 2).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('pneumaticcraft:large_tank').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('pneumaticcraft:module_expansion_card').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('pneumaticcraft:plastic_sheets', 12).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('pneumaticcraft:printed_circuit_board').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('pneumaticcraft:smart_chest').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('pneumaticcraft:turbine_rotor', 3).when((c) => c.randomChance(0.1)));

        context.addLoot(LootEntry.of('powah:capacitor_basic', 4).when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('powah:capacitor_basic_large', 4).when((c) => c.randomChance(0.01)));
        context.addLoot(LootEntry.of('powah:capacitor_basic_tiny', 4).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('powah:dielectric_casing', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('powah:dielectric_paste', 32).when((c) => c.randomChance(0.2)));
        context.addLoot(LootEntry.of('powah:energy_cable_basic', 16).when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('powah:energy_cable_starter', 16).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('powah:photo_electric_plate', 2).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('powah:steel_energized', 6).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('powah:thermoelectric_plate', 2).when((c) => c.randomChance(0.1)));

        context.addLoot(LootEntry.of('rats:contaminated_food').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:filth').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:ghost_pirat_ectoplasm', 2).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:marbled_cheese', 4).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:nether_cheese', 2).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:pirat_cutlass').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:plague_stew').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_paw').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_skull').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_aristocrat').when((c) => c.randomChance(0.01)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_basic').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_chicken_mount').when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_ender').when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_health').when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_ore_doubling').when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_platter').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_speed').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_upgrade_time_manipulator').when((c) => c.randomChance(0.01)));
        context.addLoot(LootEntry.of('rats:string_cheese', 4).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:trash_can').when((c) => c.randomChance(0.1)));

        context.addLoot(LootEntry.of('smallships:cannon').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('smallships:cannon_ball', 3).when((c) => c.randomChance(0.1)));
      }
    })
});

// Add a random amount (10-30) of tiny coins to all loot chests in Ratlantis
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier('chest')
    .anyDimension(['rats:ratlantis'])
    .randomChance(0.3)
    .apply((context) => {
      context.addLoot(Item.of('rats:tiny_coin', Math.floor(Math.random() * 21) + 10));
    });
});

// Add Aether dungeon maps to Aether village chests
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["aether_villages:olympic_citadel"], false)
    .addLoot(LootEntry.of(AETHER_BRONZE_DUNGEON_MAP).when((c) => c.randomChance(0.16)))
    .addLoot(LootEntry.of(AETHER_SILVER_DUNGEON_MAP).when((c) => c.randomChance(0.12)))
    .addLoot(LootEntry.of(AETHER_GOLD_DUNGEON_MAP).when((c) => c.randomChance(0.08)))
    .addLoot(LootEntry.of(AETHER_PLATINUM_DUNGEON_MAP).when((c) => c.randomChance(0.04)))
});

// Add Forbidden Castle map to Piglin villages
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["incendium:piglin_village"], false)
    .randomChance(0.1) // 10% per chest
    .addLoot(FORBIDDEN_CASTLE_MAP)
});

// Add Piglin Village map to Nether Fortress
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betterfortresses:fortress"], false)
    .randomChance(0.05) // 5% per chest
    .addLoot(PIGLIN_VILLAGE_MAP)
});

// Add Aquamirae Shelter map to the following structures
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure([
      'aquamirae:ship',
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
      'ctov:pillager_outpost_plains',
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

// Add stamina vessel to chests in mountain biomes
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyBiome("#minecraft:is_mountain")
    .randomChance(0.1)
    .addLoot("paraglider:stamina_vessel")
});

// Dragon Egg: aether
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["#aether:dungeons"], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_AETHER)
});
// Dragon Egg: end
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["minecraft:end_city"], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_END)
});
// Dragon Egg: fire
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betterdeserttemples:desert_temple"], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_FIRE)
});
// Dragon Egg: forest
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betterjungletemples:jungle_temple"], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_FOREST)
});
// Dragon Egg: ghost
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["graveyard:crypt"], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_GHOST)
});
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["rats:dutchrat_ship"], false)
    .randomChance(0.10)
    .addLoot(DRAGON_EGG_GHOST)
});
// Dragon Egg: ice
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["aquamirae:ship"], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_ICE)
});
// Dragon Egg: nether
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["incendium:forbidden_castle"], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_NETHER)
});
// Dragon Egg: water
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["seavil:undersea_village"], false)
    .randomChance(0.10)
    .addLoot(DRAGON_EGG_WATER)
});
LootJS.modifiers((event) => {
  event
    .addLootTableModifier("betteroceanmonuments:chests/upper_side_chamber")
    .randomChance(0.50)
    .addLoot(DRAGON_EGG_WATER)
});

// Add modded loot to nether fortress
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier("chest")
    .anyStructure(["betterfortresses:fortress"], false)

    // 5% chance items
    .addLoot(LootEntry.of('farmersrespite:blazing_chili', 2).when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of('farmersrespite:coffee_beans', 5).when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of('nethersdelight:crimson_fungus_colony').when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of('nethersdelight:hoglin_sirloin', 2).when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of('nethersdelight:nether_skewer', 3).when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of('nethersdelight:plate_of_stuffed_hoglin_snout').when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of('nethersdelight:warped_fungus_colony').when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of('rats:nether_cheese').when((c) => c.randomChance(0.05)))

    // 1% chance rare items
    .addLoot(LootEntry.of('aether:netherite_gloves').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('easypaxellite:diamond_paxel').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('forbidden_arcanus:diamond_blacksmith_gavel').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:robe_boots').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:robe_chestplate').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:robe_helmet').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:robe_leggings').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:wither_boots').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:wither_chestplate').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:wither_helmet').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('immersive_armors:wither_leggings').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('nethersdelight:netherite_machete').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
    .addLoot(LootEntry.of('pneumaticcraft:drill_bit_diamond').when((c) => c.randomChance(0.01)))
    .addLoot(LootEntry.of('rats:rat_upgrade_asbestos').when((c) => c.randomChance(0.01)))
    .addLoot(LootEntry.of('rats:rat_upgrade_demon').when((c) => c.randomChance(0.01)))
    .addLoot(LootEntry.of('wands:diamond_wand').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]))
});
