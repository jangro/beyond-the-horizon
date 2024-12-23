// priority: 0

/**
 * @file Fixes for various issues with things not being displayed in JEI.
 *
 */

/**
 * JEI Add Items Event Handler
 */
JEIEvents.addItems(event => {
  event.add('irons_spellbooks:inscription_table');
  event.add('irons_spellbooks:scroll_forge');
});