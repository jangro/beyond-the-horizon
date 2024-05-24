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
    'artifacts:mimic',
    'irons_spellbooks:dead_king',
    'aquamirae:captain_cornelia',
    'rats:black_death',
    'rats:dutchrat',
    'rats:rat_king',
    'rats:ratlantean_automaton',
    'rats:neo_ratlantean',
    'rats:rat_baron',
    'rats:pirat',
    // TODO: Some other Iron's entities should probably be added here.
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
});