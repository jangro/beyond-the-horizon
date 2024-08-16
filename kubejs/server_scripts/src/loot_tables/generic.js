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
});


LootJS.modifiers((event) => {
    event.removeGlobalModifier("@rustic_engineer");
});
