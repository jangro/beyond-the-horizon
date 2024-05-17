// priority: 10

/**
 * @file Actions loot table injection / replacement for Beyond the Horizon.
 */

ServerEvents.genericLootTables((event) => {
  event.modify('tetra:actions/geode', table => {
    table.addPool(pool => {
      pool.addItem('endrem:lost_eye').randomChance(0.01);
    });
  });
});

