// priority: 10

/**
 * @file Smelting recipe additions for Beyond the Horizon.
 */

/**
 * Smelting Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:smelting/';

  // Iron's Spells and Spellbooks
  if (Platform.isLoaded('irons_spellbooks')) {
    event.smelting('irons_spellbooks:arcane_salvage', 'irons_spellbooks:arcane_debris').xp(0.1).id(`${ID_PREFIX}arcane_salvage_from_arcane_debris`);
  }
});