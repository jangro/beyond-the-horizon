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

  // BTH "super food"
  event.create('bth:nanobot_soda_bottle')
    .food(food => {
      food
        .hunger(20)
        .saturation(2.5)
        .eaten(ctx => {
          ctx.player.tell(Text.gold('You feel a strange sensation...'))
        })
    })
    .glow(true)
    .texture('bth:item/nanobot_soda_bottle')
    .tooltip(Text.translate('tooltip.bth.nanobot_soda_bottle'))
    .translationKey('item.bth.nanobot_soda_bottle');

});

StartupEvents.registry("fluid", event => {

  // For Ender IO Soul Engine
  event.create('bth:sugar_water')
    .thickTexture(0xEADDCA)
    .bucketColor(0xEADDCA)
    .displayName('Sugar Water');

  event.create('bth:soul_mixture')
    .thickTexture(0x6F4E37)
    .bucketColor(0x6F4E37)
    .displayName('Soul Mixture');

  event.create('bth:ender_fuel')
    .thickTexture(0xA95C68)
    .bucketColor(0xA95C68)
    .displayName('Ender Fuel');

  event.create('bth:hyper_nutritious_goo')
    .thickTexture(0xCD78FF)
    .bucketColor(0xCD78FF)
    .displayName('Hyper Nutritious Goo');

  event.create('bth:nanobot_soda')
    .thickTexture(0x61FFFF)
    .bucketColor(0x61FFFF)
    .displayName('NanoBot Soda');

});
