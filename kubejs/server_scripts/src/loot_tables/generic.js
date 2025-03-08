// priority: 10

/**
 * @file Generic loot table injection / replacement for Beyond the Horizon.
 */

ServerEvents.genericLootTables((event) => {

  event.modify('tetra:actions/geode', table => {
    // TODO: Remove items from geode loot that are disabled in the pack,
    //       such as raw silver ore from Galosphere and Immersive Engineering.
    //       This should be done after we finish discussion which minerals to keep
    //       and which to disable.
    table.addPool(pool => {
      pool.addItem('endrem:lost_eye').randomChance(0.01);
    });
  });


  // BTH custom fishing loot table, added as a separate loot table in addition to
  // fish, junk and treasure loot tables. Estimated twice as rare as treasure loot.
  // See: kubejs/data/minecraft/loot_tables/gameplay/fishing.json
  event.modify('bth:fishing', table => {
    table.addPool(pool => {
      // Structures
      pool.addItem(ANCIENT_MINES_MAP).weight(10);
      pool.addItem(ARCHMAGES_TOWER_MAP).weight(3);
      pool.addItem(BTH_BATTLE_GROUNDS_MAP).weight(10);
      pool.addItem(BTH_DW20_MAP).weight(10);
      pool.addItem(BTH_MAGICIAN_HOUSE_MAP).weight(10);
      pool.addItem(BTH_RUINED_HANGAR_MAP).weight(10);
      pool.addItem(BTH_TINKERER_HOUSE_MAP).weight(10);
      pool.addItem(GRAVEYARD_RUINS_MAP).weight(10);
      pool.addItem(TINKERS_CITADEL_MAP).weight(3);
      pool.addItem(TINKERS_WORKSHOP_MAP).weight(10);
      pool.addItem(TRAIN_RUINS_MAP).weight(10);
      pool.addItem(TREE_OF_WISDOM_MAP).weight(3);
      pool.addItem(UNDERSEA_VILLAGE_MAP).weight(10);
      // Biomes
      pool.addItem(ARCHWOOD_FOREST_MAP).weight(10);
      pool.addItem(CHERRY_GROVE_MAP).weight(10);
      pool.addItem(DESERT_MAP).weight(10);
      pool.addItem(FLOWER_FOREST_MAP).weight(10);
      pool.addItem(HAZE_MOUNTAIN_MAP).weight(10);
      pool.addItem(JUNGLE_MAP).weight(10);
      pool.addItem(LUSH_CAVES_MAP).weight(10);
      pool.addItem(SWAMP_MAP).weight(10);
    });
  });

  //
  // Eidolon map trail
  //
  // The stray tower has a map to the lab
  event.modify('minecraft:chests/igloo_chest', table => {
    table.addPool(pool => {
      pool.addItem(EIDOLON_LAB_MAP);
    });
  });
  // The lab has a map to the catacomb
  event.modify('eidolon:chests/lab', table => {
    table.addPool(pool => {
      pool.addItem(EIDOLON_CATACOMB_MAP);
    });
  });

  //
  // Nether map trail
  //
  // Add nether fortress map to bth battle grounds
  event.modify('bth_structures:chests/battle_grounds/nether', table => {
    table.addPool(pool => {
      pool.addItem(NETHER_FORTRESS_MAP);
    });
  });
  // Add Piglin Village map to Nether Fortress.
  event.modify('minecraft:chests/nether_bridge', table => {
    table.addPool(pool => {
      pool.addItem(PIGLIN_VILLAGE_MAP);
    });
  });
  // Add Forbidden Castle map to Piglin villages.
  event.modify('incendium:cvill/farmer', table => {
    table.addPool(pool => {
      pool.addItem(FORBIDDEN_CASTLE_MAP);
    });
  });

  //
  // Aether map trail
  //
  // Add olympic citadel map to bth battle grounds
  event.modify('bth_structures:chests/battle_grounds/aether', table => {
    table.addPool(pool => {
      pool.addItem(AETHER_CITADEL_MAP);
    });
  });

});


LootJS.modifiers((event) => {
  // Rustic Engineer is heavily modified by BTH. Remove all loot.
  event.removeGlobalModifier("@rustic_engineer");
    
  // Chalk mod adds a lot of unstackable loot. Remove all and add back sparsely.
  event.removeGlobalModifier("@chalk");

  // Remove all things waystone from all loot
  event.removeGlobalModifier("@waystones");

  // Remove all plushies from loot chests
  event.removeGlobalModifier("@perfectplushieapi");
  event.removeGlobalModifier("@plushie_buddies");
  event.removeGlobalModifier("@plushies");

  // Remove useless gears
  event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot('enderio:wood_gear')
    .removeLoot("enderio:stone_gear");

});
