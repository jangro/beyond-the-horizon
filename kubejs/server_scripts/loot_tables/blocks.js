// priority: 10

/**
 * @file Block loot table injection / replacement for Beyond the Horizon.
 */

/**
 * Block Loot Table Event Handler
 */
ServerEvents.blockLootTables(event => {

});

LootJS.modifiers((event) => {

  ['immersiveengineering:ore_uranium', 'immersiveengineering:deepslate_ore_uranium'].forEach((block) =>
    event
      .addBlockLootModifier(block)
      .removeLoot(Ingredient.all)
      .addAlternativesLoot(
        // Fortune
        LootEntry.of('alexscaves:uranium')
          .applyOreBonus("minecraft:fortune")
          .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune"))),
        // Silk Touch
        LootEntry.of(block).when((c) =>
          c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))),
        // No enchant
        LootEntry.of('alexscaves:uranium'),
      )
  );

});
