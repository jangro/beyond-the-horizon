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

  // Fix broken everycomp loot tables for regular bookshelves
  [
    'everycomp:abnww/donum_ornamentum/cactus_bookshelf',
    'everycomp:abnww/donum_ornamentum/cactus_extra_bookshelf',
    'everycomp:abnww/ars_nouveau/archwood_bookshelf',
    'everycomp:abnww/rats/pirat_bookshelf',
    'everycomp:abnww/ecologics/flowering_azalea_bookshelf',
    'everycomp:abnww/ecologics/azalea_bookshelf',
    'everycomp:abnww/ecologics/coconut_bookshelf',
    'everycomp:abnww/ecologics/walnut_bookshelf',
    'everycomp:abnww/botania/livingwood_bookshelf',
    'everycomp:abnww/botania/dreamwood_bookshelf',
    'everycomp:abnww/integrateddynamics/menril_bookshelf',
    'everycomp:abnww/phantasm/pream_bookshelf',
    'everycomp:abnww/eidolon/illwood_bookshelf',
    'everycomp:abnww/deep_aether/roseroot_bookshelf',
    'everycomp:abnww/deep_aether/yagroot_bookshelf',
    'everycomp:abnww/deep_aether/cruderoot_bookshelf',
    'everycomp:abnww/deep_aether/conberry_bookshelf',
    'everycomp:abnww/deep_aether/sunroot_bookshelf',
    'everycomp:abnww/valhelsia_structures/lapidified_jungle_bookshelf',
    'everycomp:abnww/sullysmod/petrified_bookshelf',
    'everycomp:abnww/enlightened_end/indigo_bookshelf',
    'everycomp:abnww/enlightened_end/cerulean_bookshelf',
    'everycomp:abnww/alexscaves/pewen_bookshelf',
    'everycomp:abnww/alexscaves/thornwood_bookshelf',
    'everycomp:abnww/forbidden_arcanus/fungyss_bookshelf',
    'everycomp:abnww/forbidden_arcanus/aurum_bookshelf',
    'everycomp:abnww/forbidden_arcanus/edelwood_bookshelf',
  ].forEach((block) => {
    event
      .addBlockLootModifier(block)
      .removeLoot(Ingredient.all)
      .addAlternativesLoot(
        // Silk touch
        LootEntry.of(block).when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))),
        // Default
        LootEntry.of('3x minecraft:book')
      );
  });

  // Prevent everycomp's lightman's trader bookshelves from dropping two items
  [/everycomp:lc.*bookshelf_trader.*/].forEach((block) =>
    event
      .addBlockLootModifier(block)
      .removeLoot(Ingredient.all)
  );

});
