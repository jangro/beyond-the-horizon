// priority: 110                   

/**
 * @file Block Entity Type Tag additions for Beyond the Horizon.
 * 
 * The order of entries here should be:
 *   BTH Tags (if needed)
 *   Minecraft Tags
 *   Forge Tags
 *   All other mods, alphabetically.
 */

ServerEvents.tags('block_entity_type', event => {
  // Beyond the Horizon Tags

  // Minecraft Tags

  // Forge Tags

  // Packing Tape Tags
  event.add('packingtape:te_whitelist', [
    'minecraft:mob_spawner',
  ]);
});
