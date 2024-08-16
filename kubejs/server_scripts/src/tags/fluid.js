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
});