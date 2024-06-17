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

  // Forge Tags
  event.add('forge:ores', [
    'alexscaves:coprolith_coal_ore',
    'alexscaves:guanostone_redstone_ore',
    'alexscaves:radrock_uranium_ore',
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

  // Create Tags
  event.add('create:fan_processing_catalysts/haunting', [
    'valhelsia_structures:soul_brazier',
  ]);

  event.add('create:fan_processing_catalysts/smoking', [
    'valhelsia_structures:brazier',
  ]);

  // Tetra Tags
  event.add('tetra:scannable', [
    'forbidden_arcanus:stella_arcanum',
    'irons_spellbooks:arcane_debris'
  ]);

});
