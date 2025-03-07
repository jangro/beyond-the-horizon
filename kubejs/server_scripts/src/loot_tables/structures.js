// priority: 10

/**
 * @file Structure loot table injection / replacement for Beyond the Horizon.
 */

LootJS.modifiers((event) => {

  // For Ratlantis shipwrecks, we clear the loot table to remove all overworld loot.
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

        context.addLoot(LootEntry.of('bth:nanobot_soda_bottle').when((c) => c.randomChance(0.001)));

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

        context.addLoot(LootEntry.of('enderio:copper_alloy_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:energetic_alloy_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:vibrant_alloy_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:redstone_alloy_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:conductive_alloy_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:pulsating_alloy_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:dark_steel_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:soularium_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:end_steel_ingot', 3).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:fluid__conduit', 8).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:pressurized_fluid_conduit', 4).when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('enderio:ender_fluid_conduit', 2).when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('enderio:redstone_conduit', 8).when((c) => c.randomChance(0.05)));
        context.addLoot(LootEntry.of('enderio:item_conduit', 8).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:me_conduit', 8).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('enderio:dense_me_conduit', 2).when((c) => c.randomChance(0.05)));

        context.addLoot(LootEntry.of('rats:contaminated_food').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:filth').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:ghost_pirat_ectoplasm', 2).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:marbled_cheese', 4).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:nether_cheese', 2).when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:pirat_cutlass').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:plague_stew').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_paw').when((c) => c.randomChance(0.1)));
        context.addLoot(LootEntry.of('rats:rat_skull').when((c) => c.randomChance(0.1)));
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
    });


  // Add Aether dungeon maps to Aether village chests.
  event
    .addLootTypeModifier('chest')
    .anyStructure(['aether_villages:olympic_citadel'], false)
    .addLoot(LootEntry.of(AETHER_BRONZE_DUNGEON_MAP).when((c) => c.randomChance(0.16)))
    .addLoot(LootEntry.of(AETHER_SILVER_DUNGEON_MAP).when((c) => c.randomChance(0.12)))
    .addLoot(LootEntry.of(AETHER_GOLD_DUNGEON_MAP).when((c) => c.randomChance(0.08)))
    .addLoot(LootEntry.of(AETHER_PLATINUM_DUNGEON_MAP).when((c) => c.randomChance(0.04)))

  // Add Aquamirae Shelter map to the following structures
  event
    .addLootTypeModifier('chest')
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

  // Add Jungle and Desert temple maps to the following structures.
  event
    .addLootTypeModifier('chest')
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
    .addLoot(LootEntry.of(JUNGLE_TEMPLE_MAP).when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of(DESERT_TEMPLE_MAP).when((c) => c.randomChance(0.05)));

  // Add Ancient City map to the following structures with different chances:
  event
    .addLootTypeModifier("chest")
    .anyStructure(['betteroceanmonuments:ocean_monument'], false)
    .randomChance(0.1)
    .addLoot(ANCIENT_CITY_MAP);
  event
    .addLootTypeModifier("chest")
    .anyStructure(['integrated_stronghold:stronghold'], false)
    .randomChance(0.05)
    .addLoot(ANCIENT_CITY_MAP);
  event
    .addLootTypeModifier("chest")
    .anyStructure(['alexscaves:underground_cabin'], false)
    .randomChance(0.5)
    .addLoot(ANCIENT_CITY_MAP);

  // Any loot chest in a deep dark biome should have a chance to contain an Ancient City map.
  event
    .addLootTypeModifier("chest")
    .anyBiome('minecraft:deep_dark')
    .randomChance(0.2)
    .addLoot(ANCIENT_CITY_MAP);

  // But, remove maps to Ancient Cities from Ancient City loot chests
  event
    .addLootTypeModifier("chest")
    .anyStructure(['minecraft:ancient_city'], false)
    .removeLoot(ANCIENT_CITY_MAP);

  // Pillager outposts have a chance to have a map to a mansion + evoker fort.
  event
    .addLootTypeModifier('chest')
    .anyStructure([
      'minecraft:pillager_outpost',
      'ctov:pillager_outpost_plains',
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
      'towns_and_towers:pillager_outpost_badlands',
      'towns_and_towers:pillager_outpost_beach',
      'towns_and_towers:pillager_outpost_birch_forest',
      'towns_and_towers:pillager_outpost_desert',
      'towns_and_towers:pillager_outpost_flower_forest',
      'towns_and_towers:pillager_outpost_forest',
      'towns_and_towers:pillager_outpost_grove',
      'towns_and_towers:pillager_outpost_jungle',
      'towns_and_towers:pillager_outpost_meadow',
      'towns_and_towers:pillager_outpost_mushroom_fields',
      'towns_and_towers:pillager_outpost_ocean',
      'towns_and_towers:pillager_outpost_old_growth_taiga',
      'towns_and_towers:pillager_outpost_savanna',
      'towns_and_towers:pillager_outpost_savanna_plateau',
      'towns_and_towers:pillager_outpost_snowy_beach',
      'towns_and_towers:pillager_outpost_snowy_plains',
      'towns_and_towers:pillager_outpost_snowy_slopes',
      'towns_and_towers:pillager_outpost_sparse_jungle',
      'towns_and_towers:pillager_outpost_sunflower_plains',
      'towns_and_towers:pillager_outpost_swamp',
      'towns_and_towers:pillager_outpost_taiga',
      'towns_and_towers:pillager_outpost_snowy_taiga',
      'towns_and_towers:pillager_outpost_wooded_badlands',
      'towns_and_towers:exclusives/pillager_outpost_mediterranean',
      'towns_and_towers:exclusives/pillager_outpost_tudor',
      'towns_and_towers:exclusives/pillager_outpost_classic',
      'towns_and_towers:exclusives/pillager_outpost_oriental',
      'towns_and_towers:exclusives/pillager_outpost_swedish',
      'towns_and_towers:exclusives/pillager_outpost_iberian',
      'towns_and_towers:exclusives/pillager_outpost_rustic',
    ], false)
    .addLoot(LootEntry.of(EVOKER_FORT_MAP).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(MANSION_MAP).when((c) => c.randomChance(0.1)));

  // Add Impaled Icebreaker and Snowy Plains maps to the following structures:
  event
    .addLootTypeModifier('chest')
    .anyStructure(['irons_spellbooks:mountain_tower'], false)
    .addLoot(LootEntry.of(IMPALED_ICEBREAKER_MAP).when((c) => c.randomChance(0.1)))
    .addLoot(LootEntry.of(SNOWY_PLAINS_MAP).when((c) => c.randomChance(0.1)));

  //
  // Graveyard crypt have a chance to contain a map to the graveyard ruins (progression requires visiting 3 different ruins)
  //
  event
    .addLootTypeModifier('chest')
    .anyStructure(['graveyard:crypt'], false)
    .randomChance(0.02)
    .addLoot(GRAVEYARD_RUINS_MAP);

  //
  // Graveyard map trail
  //
  // Add graveyard crypt map to the dead tree urn (uses a shared loot table so add to the structure)
  event
    .addLootTypeModifier("chest")
    .anyStructure(['graveyard:dead_tree'], false)
    .addLoot(GRAVEYARD_CRYPT_MAP);

  // Add cursed eye to the Forbidden Castle
  // XXX: would be better if we could target a specific chest at 100% instead of the whole structure
  // 5% chance might be too much or too little, and no guarantee of getting an eye.
  // But, probably there are at least 20 chests in this structure so should be a good chance of getting one.
  event
    .addLootTypeModifier('chest')
    .anyStructure(['incendium:forbidden_castle'], false)
    .randomChance(0.05)
    .addLoot('endrem:cursed_eye');

  // Add stamina vessel to chests in mountain biomes.
  event
    .addLootTypeModifier('chest')
    .anyBiome('#minecraft:is_mountain')
    .randomChance(0.1)
    .addLoot('paraglider:stamina_vessel');

  // Dragon Egg: Aether
  event
    .addLootTypeModifier('chest')
    .anyStructure(['#aether:dungeons'], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_AETHER);
  // Dragon Egg: End
  event
    .addLootTypeModifier('chest')
    .anyStructure(['minecraft:end_city'], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_END);

  // Dragon Egg: Fire
  event
    .addLootTypeModifier('chest')
    .anyStructure(['betterdeserttemples:desert_temple'], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_FIRE);

  // Dragon Egg: Forest
  event
    .addLootTypeModifier('chest')
    .anyStructure(['betterjungletemples:jungle_temple'], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_FOREST);

  // Dragon Egg: Ghost
  // TODO: Change this to be only in specific chests, not the entire crypt.
  event
    .addLootTypeModifier('chest')
    .anyStructure(['graveyard:crypt'], false)
    .randomChance(0.002)
    .addLoot(DRAGON_EGG_GHOST);

  event
    .addLootTypeModifier('chest')
    .anyStructure(['rats:dutchrat_ship'], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_GHOST);

  // Dragon Egg: Ice
  event
    .addLootTypeModifier('chest')
    .anyStructure(['aquamirae:ship'], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_ICE);

  // Dragon Egg: Nether
  event
    .addLootTypeModifier('chest')
    .anyStructure(['incendium:forbidden_castle'], false)
    .randomChance(0.05)
    .addLoot(DRAGON_EGG_NETHER);

  // Dragon Egg: Water
  event
    .addLootTypeModifier('chest')
    .anyStructure(['seavil:undersea_village'], false)
    .randomChance(0.10)
    .addLoot(DRAGON_EGG_WATER);

  event
    .addLootTableModifier('betteroceanmonuments:chests/upper_side_chamber')
    .randomChance(0.50)
    .addLoot(DRAGON_EGG_WATER);

  // Add modded loot to nether fortress.
  event
    .addLootTypeModifier('chest')
    .anyStructure(['betterfortresses:fortress'], false)

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
    .addLoot(LootEntry.of('wands:diamond_wand').when((c) => c.randomChance(0.01)).enchantRandomly().damage([0.1, 0.8]));

  // Add a small chance for Sned's head to be in chest loot when the player is at least a million blocks away in the overworld.
  event
    .addLootTypeModifier('chest')
    .anyDimension(['minecraft:overworld'])
    .apply((context) => {
      let p = context.getBlockPos();
      if ((Math.abs(p.x) > 1000000) || (Math.abs(p.z) > 1000000)) {
        context.addLoot(LootEntry.of(Item.of('minecraft:player_head', '{SkullOwner:"Snedglowjr"}')).when((c) => c.randomChance(0.03)));
      }
    });

  // Add bison fur to loot (bison fur block applied to boots make them not sink in powdered snow)
  event
    .addLootTypeModifier("chest")
    .anyStructure(['eidolon:stray_tower'], false)
    .randomChance(0.7)
    .addLoot('5x alexsmobs:bison_fur');

  // Guarantee a fur block in frozen towers
  event
    .addLootTypeModifier("chest")
    .anyStructure(['bth_structures:tower_frozen'], false)
    .addLoot('alexsmobs:bison_fur_block');

});
