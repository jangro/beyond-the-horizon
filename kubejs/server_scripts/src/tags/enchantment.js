// priority: 110                   

/**
 * @file Enchantment Tag additions for Beyond the Horizon.
 */

/**
 * Enchantment Tag Event Handler
 */
ServerEvents.tags('enchantment', event => {

  event.add('eidolon:soul_enchanter_blacklist', [
    'ars_nouveau:reactive', // Doesn't work when applied via Eidolon.
  ]);

});