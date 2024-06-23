/**
 * @file Recipe additions for Ars Nouveau's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  // Make drygmy charm recipe harder
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "ars_nouveau:source_gem",
      "ars_nouveau:source_gem",
      "ars_nouveau:source_gem",
      "minecraft:diamond",
      "farmersdelight:vegetable_soup",
      "farmersdelight:cabbage_rolls",
      "farmersdelight:fish_stew",
      "ends_delight:chorus_fruit_pie_slice"
    ], // input items
    "ars_nouveau:drygmy_shard", // reagent
    "ars_nouveau:drygmy_charm", // output
    5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );

  // Make whirlisprig charm recipe harder
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "ars_nouveau:source_gem",
      "ars_nouveau:magebloom_crop",
      "ars_nouveau:magebloom",
      "minecraft:diamond",
      "minecraft:oak_sapling",
      "minecraft:spruce_sapling",
      "minecraft:nether_wart",
      "minecraft:chorus_flower"
    ], // input items
    "ars_nouveau:whirlisprig_shards", // reagent
    "ars_nouveau:whirlisprig_charm", // output
    5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
});
