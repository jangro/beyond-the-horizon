// priority: 10

/**
 * @file Chest loot table injection / replacement for Beyond the Horizon coins.
 */

// Supports amount up to 999
function add_coins(context, amount) {
  let amount_tiny = amount % 10;
  let amount_copper = Math.floor(amount % 100 / 10);
  let amount_iron = Math.floor(amount % 1000 / 100);
  context.addLoot(Item.of('rats:tiny_coin', amount_tiny));
  context.addLoot(Item.of('createdeco:copper_coin', amount_copper));
  context.addLoot(Item.of('createdeco:iron_coin', amount_iron));

  // for debugging
  // console.log('For amount ', amount, ' we get tiny:', amount_tiny, ' copper: ', amount_copper, ' iron: ', amount_iron);
}

LootJS.modifiers((event) => {

  // Add Tiny Coins to LOW grade chests
  // All loot chests have a 30% chance to generate coins. The amount of coins is function
  // of distance to spawn. From 1-5 coins near spawn to 5-10 coins 10000+ blocks away.
  event
    .addLootTableModifier(COIN_LOOT_LOW)
    .randomChance(0.3)
    .apply((context) => {
      let p = context.getBlockPos();
      let distance = Math.min(Math.max(Math.sqrt(p.x * p.x + p.z * p.z), 0), 10000);
      let multiplier = 1.0 + 1.0 * Math.min(1.0, distance / 10000.0); // from 1 (at spawn) to 2 (at 10000+ blocks from spawn)
      let amount = Math.ceil(Math.random() * 5.0); // from 1 to 5
      add_coins(context, amount * multiplier);
  });

  // Add Tiny Coins to MEDIUM grade chests
  // All loot chests have a 60% chance to generate coins. The amount of coins is function
  // of distance to spawn. From 10-20 coins near spawn to 20-40 coins 10000+ blocks away.
  event
    .addLootTableModifier(COIN_LOOT_MEDIUM)
    .randomChance(0.6)
    .apply((context) => {
      let p = context.getBlockPos();
      let distance = Math.min(Math.max(Math.sqrt(p.x * p.x + p.z * p.z), 0), 10000);
      let multiplier = 1.0 + 1.0 * Math.min(1.0, distance / 10000.0); // from 1 (at spawn) to 2 (at 10000+ blocks from spawn)
      let amount = Math.ceil(10.0 + Math.random() * 10.0); // from 10 to 20
      add_coins(context, amount * multiplier);
  });

  // Add Tiny Coins to TREASURE grade chests
  // All loot chests have a 100% chance to generate coins. The amount of coins is function
  // of distance to spawn. From 50-100 coins near spawn to 100-200 coins 20000+ blocks away.
  event
    .addLootTableModifier(COIN_LOOT_TREASURE)
    .apply((context) => {
      let p = context.getBlockPos();
      let distance = Math.min(Math.max(Math.sqrt(p.x * p.x + p.z * p.z), 0), 20000);
      let multiplier = 1.0 + 1.0 * Math.min(1.0, distance / 20000.0); // from 1 (at spawn) to 2 (at 20000+ blocks from spawn)
      let amount = Math.ceil(50.0 + Math.random() * 50.0); // from 50 to 100
      add_coins(context, amount * multiplier);
  });

});