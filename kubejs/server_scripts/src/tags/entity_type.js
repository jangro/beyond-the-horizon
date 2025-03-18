// priority: 110                   

/**
 * @file Entity Type Tag additions for Beyond the Horizon.
 */

/**
 * Entity Type Tag Event Handler
 */
ServerEvents.tags('entity_type', event => {

  // Blacklist some overpowered drygmy mobs (mainly bosses).
  event.add('ars_nouveau:drygmy_blacklist', [
    'aquamirae:captain_cornelia',
    'artifacts:mimic',
    'irons_spellbooks:citadel_keeper', // In-game as "Ancient Knight"
    'irons_spellbooks:dead_king',
    // TODO: Some other Iron's entities should probably be added here.
    'minecraft:ender_dragon',
    'rats:black_death',
    'rats:dutchrat',
    'rats:rat_king',
    'rats:ratlantean_automaton',
    'rats:neo_ratlantean',
    'rats:rat_baron',
    'rats:pirat',
  ]);

  // Expand Ars Nouveau Magic Find to other mobs.
  event.add('ars_nouveau:magic_find', [
    'artifacts:mimic',
    'irons_spellbooks:archevoker',
    'irons_spellbooks:cryomancer',
    'irons_spellbooks:dead_king',
    'irons_spellbooks:necromancer',
    'irons_spellbooks:priest',
    'irons_spellbooks:pyromancer',
    'minecraft:evoker',
    'minecraft:illusioner',
  ]);

  event.add('forbidden_arcanus:quantum_catcher_blacklisted', [
    // Picking up these mobs causes the game to disconnect from a server.
    'alexsmobs:cachalot_whale',
    'alexsmobs:giant_squid',
  ]);

  event.add('immersiveengineering:shaderbag/blacklist', [
    'deep_aether:eots_segment', // Prevents each segment of the Eye of the Storm from dropping a shader bag.
  ]);
});