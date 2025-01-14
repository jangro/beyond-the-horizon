// priority: 120

/**
 * @file Fluid Tag Changes for Beyond the Horizon.
 */

/**
 * Fluid Tag Event Handler.
 */
ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water', [
    'createaddition:bioethanol',
    'createaddition:flowing_bioethanol',
    'createaddition:seed_oil',
    'createaddition:flowing_seed_oil',
    'enlightened_end:ooze_fluid',
    'enlightened_end:flowing_ooze_fluid',
  ]);


  // Because IE machines only accept tags for inputs?
  event.add('bth:ender_fuel', 'bth:ender_fuel');
  event.add('bth:liquid_chorus', 'integrateddynamics:liquid_chorus');
  event.add('bth:soul_mixture', 'bth:soul_mixture');
  event.add('bth:sugar_water', 'bth:sugar_water');
  event.add('bth:nanobot_soda', 'bth:nanobot_soda');

});
