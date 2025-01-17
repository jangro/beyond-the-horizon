// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */

const NANOBOT_SODA_EFFECTS = [
  'You feel a strange sensation...',
  'It tingles throughout your body.',
  'Not tasty, but healthy!',
  'Technology and magic is coursing through your veins.',
];

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
          let index = Math.floor(NANOBOT_SODA_EFFECTS.length * Math.random());
          ctx.player.tell(Text.gold(NANOBOT_SODA_EFFECTS[index]));
          ctx.player.give('bth:nanobot_soda_bottle_empty');
        })
    })
    .glow(true)
    .texture('bth:item/nanobot_soda_bottle')
    .tooltip(Text.translate('tooltip.bth.nanobot_soda_bottle'))
    .translationKey('item.bth.nanobot_soda_bottle');

  event.create('bth:nanobot_soda_bottle_empty')
    .glow(true)
    .texture('bth:item/nanobot_soda_bottle_empty')
    .tooltip(Text.translate('tooltip.bth.nanobot_soda_bottle_empty'))
    .translationKey('item.bth.nanobot_soda_bottle_empty');

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
    .thickTexture(0x4DD7FF)
    .bucketColor(0x4DD7FF)
    .displayName('NanoBot Soda');

});
