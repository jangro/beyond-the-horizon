// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */
StartupEvents.registry("item", event => {

  // Adventurer's Spellbook
  // A spellbook for Iron's Spells and Spellbooks that comes filled with utility spells useful for explorers, such
  // as recall.
  // TODO: Implementation (requires the KubeJS Addon for ISS)
  event.create('bth:adventurers_spellbook', 'basic')
    .texture('bth:item/adventurers_spellbook')
    .unstackable();

  // Coconut Maul
  // An easter egg weapon that hits harder but slower than a sword, but not to the same extreme as an axe.
  // TODO: Figure out how to apply custom damage type on hit. Maybe find the right callback to add a call to /damage?
  event.create('bth:coconut_maul', 'sword')
    .attackDamageBaseline(5.0)
    .maxDamage(59)
    .speedBaseline(-2.8)
    .texture('bth:item/coconut_maul')
    .tier('wood')
    .tooltip(Text.translate('tooltip.bth.coconut_maul'))
    .translationKey('item.bth.coconut_maul')
    .unstackable();

  // Terminus, Blade of the Dimensional Master
  // Note: This item has required NBT data that is added when crafting it.
  // It won't function completely when using /give or the Creative Tab.
  // TODO: See if there's a way to apply NBT data by default.
  event.create('bth:terminus', 'sword')
  .attackDamageBonus(9.0)
  .fireResistant(true)
  .maxDamage(3270)
  .rarity('EPIC')
  .texture('bth:item/terminus')
  .tier('netherite')
  .tooltip(Text.translate('tooltip.bth.terminus'))
  .translationKey('item.bth.terminus')
  .unstackable();
});
