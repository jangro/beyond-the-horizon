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
      pool.addItem(TINKERS_CITADEL_MAP).weight(3);
      pool.addItem(TINKERS_WORKSHOP_MAP).weight(10);
      pool.addItem(ANCIENT_MINES_MAP).weight(10);
      pool.addItem(TREE_OF_WISDOM_MAP).weight(3);
      pool.addItem(ARCHMAGES_TOWER_MAP).weight(3);
      pool.addItem(HAUNTED_MANOR_MAP).weight(10);
      pool.addItem(TRAIN_RUINS_MAP).weight(10);
      pool.addItem(UNDERSEA_VILLAGE_MAP).weight(10);
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
});
