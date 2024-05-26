// priority: 110                   

/**
 * @file Block Entity Type Tag additions for Beyond the Horizon.
 */

 ServerEvents.tags('block_entity_type', event => {
  // whitelist spawners for packing tape
  event.add('packingtape:te_whitelist', ['minecraft:mob_spawner']);
 });
