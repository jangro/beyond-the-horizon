// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */
StartupEvents.registry("item", event => {

  // Coconut Maul
  // TODO: Figure out how to apply custom damage type on hit. Maybe find the right callback to add a call to /damage?
  // Note: This may need to be changed to remove the namespace. I presume then that it'll change to "kubejs:coconut_maul"
  // and other scripts may need to be adjusted to suit.
  event.create('bth:coconut_maul', 'sword')
    .attackDamageBaseline(4.0)
    .maxDamage(59)
    .texture('bth:item/coconut_maul')
    .tier('wood')
    .tooltip(Text.translate('tooltip.bth.coconut_maul'))
    .translationKey('item.bth.coconut_maul')
    .unstackable();
});
