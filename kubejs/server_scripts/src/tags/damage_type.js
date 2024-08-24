// priority: 110                   

/**
 * @file Damage Type Tag additions for Beyond the Horizon.
 */

/**
 * Damage Type Tag Event Handler
 */
ServerEvents.tags('damage_type', event => {

  event.add('minecraft:is_player_attack', [
    'bth:coconut_maul',
  ]);

});