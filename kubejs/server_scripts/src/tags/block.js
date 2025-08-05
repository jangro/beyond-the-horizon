// priority: 110

/**
 * @file Block Tag Additions for Beyond the Horizon.
 *
 * These tags differ from item tags in that they impact the block form only,
 * and therefore mainly have in-world effects.
 * 
 * The order of entries here should be:
 *   BTH Tags (if needed)
 *   Minecraft Tags
 *   Forge Tags
 *   All other mods, alphabetically.
 *
 */

/**
 * Block Tag Event Handler
 */
ServerEvents.tags('block', event => {

  // Minecraft Tags
  event.add('minecraft:mineable/pickaxe', [
    'bbb:wall_blackstone_block',
    'bbb:wall_deepslate_block',
    'bbb:wall_nether_brick_block',
    'bbb:wall_quartz_block',
    'bbb:wall_red_sandstone_block',
    'bbb:wall_sandstone_block',
    'bbb:wall_stone_block',
    'createdeco:andesite_bars',
    'createdeco:andesite_bars_overlay',
    'createdeco:brass_bars',
    'createdeco:brass_bars_overlay',
    'createdeco:copper_bars',
    'createdeco:copper_bars_overlay',
    'createdeco:industrial_iron_bars',
    'createdeco:industrial_iron_bars_overlay',
    'createdeco:zinc_bars',
    'createdeco:zinc_bars_overlay',
    'graveyard:dark_iron_bars',
  ]);

  event.add('minecraft:flowers', [
    'deep_aether:sky_tuplips',
    'deep_aether:golden_flower',
    'deep_aether:radiant_orchid',
    'deep_aether:iaspove',
    'deep_aether:aerlavender',
    'deep_aether:aether_cattails',
  ]);

  event.add('minecraft:small_flowers', [
    'deep_aether:sky_tuplips',
    'deep_aether:golden_flower',
    'deep_aether:radiant_orchid',
    'deep_aether:iaspove',
    'deep_aether:aerlavender',
    'deep_aether:aether_cattails',
  ]);

  // Add missing tag to bookshelves
  event.add('minecraft:enchantment_power_provider', [
    /everycomp:((?!chiseled).)*bookshelf$/,
    /quark:.*bookshelf$/,
  ]);

  // Forge Tags
  event.add('forge:ores', [
    'alexscaves:coprolith_coal_ore',
    'alexscaves:guanostone_redstone_ore',
    'alexscaves:radrock_uranium_ore',
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/arcane_crystal', [
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/coal', [
    'alexscaves:coprolith_coal_ore',
  ]);

  event.add('forge:ores/redstone', [
    'alexscaves:guanostone_redstone_ore',
  ]);

  event.add('forge:ores/uranium', [
    'alexscaves:radrock_uranium_ore',
  ]);

  event.add('forge:storage_blocks/arcane_gold', [
    'forbidden_arcanus:deorum_block',
  ]);

  // Applied Energistics Tags
  event.add('ae2:growth_acceleratable', [
    'blazingbamboo:blazing_bamboo',
    'blazingbamboo:blazing_bamboo_sapling',
  ]);

  // Ars Nouveau Tags
  event.add('ars_nouveau:golem/cluster', [
    'alexscaves:sulfur_cluster',
    'galosphere:allurite_cluster',
    'galosphere:glinted_allurite_cluster',
    'galosphere:glinted_amethyst_cluster',
    'galosphere:glinted_lumiere_cluster',
    'galosphere:lumiere_cluster',
    'galosphere:pink_salt_cluster',
    'quark:red_corundum_cluster',
    'quark:orange_corundum_cluster',
    'quark:yellow_corundum_cluster',
    'quark:green_corundum_cluster',
    'quark:blue_corundum_cluster',
    'quark:indigo_corundum_cluster',
    'quark:violet_corundum_cluster',
    'quark:white_corundum_cluster',
    'quark:black_corundum_cluster',
  ]);

  // Create Tags
  event.add('create:fan_processing_catalysts/haunting', [
    'bbb:soul_brazier',
    'graveyard:soul_fire_brazier',
    'valhelsia_structures:soul_brazier',
  ]);

  event.add('create:fan_processing_catalysts/smoking', [
    'bbb:brazier',
    'graveyard:fire_brazier',
    'valhelsia_structures:brazier',
  ]);
  
  event.add('create:wrench_pickup', [
    'createdeco:andesite_bars',
    'createdeco:andesite_bars_overlay',
    'createdeco:brass_bars',
    'createdeco:brass_bars_overlay',
    'createdeco:copper_bars',
    'createdeco:copper_bars_overlay',
    'createdeco:industrial_iron_bars',
    'createdeco:industrial_iron_bars_overlay',
    'createdeco:zinc_bars',
    'createdeco:zinc_bars_overlay',
    'graveyard:dark_iron_bars',
  ]);

  // Tetra Tags
  event.add('tetra:scannable', [
    'aether:gravitite_ore',
    'forbidden_arcanus:stella_arcanum',
    'irons_spellbooks:arcane_debris',
    'rats:oratchalcum_ore',
  ]);

  // Iron's Spells Tags
  event.add('irons_spellbooks:spectral_hammer_mineable', [
    'forbidden_arcanus:darkstone',
    'yungscavebiomes:ancient_sand',
    'yungscavebiomes:ancient_sandstone',
    'yungscavebiomes:brittle_ancient_sandstone',
    'yungscavebiomes:layered_ancient_sandstone',
    'yungscavebiomes:brittle_sandstone',
    'yungscavebiomes:layered_sandstone',
    'yungscavebiomes:brittle_red_sandstone',
    'yungscavebiomes:layered_red_sandstone',
  ]);

  // Clear block and item tags from plushies ('wool' tag for example)
  event.removeAllTagsFrom(/^perfectplushies:*/);
  event.removeAllTagsFrom(/^plushies:*/);
  event.removeAllTagsFrom(/^plushie_buddies:*/);
});
