// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */

const LEMBAS_BREAD_EFFECTS = [
  'You feel the essence of the ancients...',
  'Crunchy on the outside, but soft on the inside.',
  'Not tasty, but healthy!',
  'Ancient magic is coursing through your veins.',
];

const NANOBOT_SODA_EFFECTS = [
  'You feel a strange sensation...',
  'It tingles throughout your body.',
  'Not tasty, but healthy!',
  'Technology and magic is coursing through your veins.',
];

StartupEvents.registry("item", event => {

  // Adventurer's Spellbook
  // A spellbook for Iron's Spells and Spellbooks that comes filled with utility spells useful for explorers, such as recall.
  event.create('bth:adventurers_spell_book', 'irons_spells_js:spellbook')
    .setMaxSpellSlots(8)
    .addDefaultAttribute("minecraft:generic.movement_speed", "Movement Speed", 0.2, "multiply_total")
    .addDefaultAttribute("irons_spellbooks:max_mana", "Max Mana", 100, "addition")
    .addDefaultSpell('irons_spellbooks:summon_horse', 1)
    .addDefaultSpell('irons_spellbooks:recall', 2);

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
  event.create('bth:terminus', 'irons_spells_js:magic_sword')
    .attackDamageBaseline(9.0)
    .fireResistant(true)
    .maxDamage(3270)
    .rarity('EPIC')
    .texture('bth:item/terminus')
    .tier('netherite')
    .tooltip(Text.translate('tooltip.bth.terminus'))
    .translationKey('item.bth.terminus')
    .addDefaultSpell('bth:terminus_singularity', 1)
    .addDefaultSpell('bth:terminus_space_fold', 2)
    .unstackable();

  // BTH mid game "super food" 2 hearts, 2.5 hours
  event.create('bth:lembas_bread')
    .food(food => {
      food
        .hunger(4)
        .saturation(6.25)
        .eaten(ctx => {
          let index = Math.floor(LEMBAS_BREAD_EFFECTS.length * Math.random());
          ctx.player.tell(Text.gold(LEMBAS_BREAD_EFFECTS[index]));
          ctx.player.give('bth:mallorn_leaf');
        })
    })
    .glow(true)
    .texture('bth:item/lembas_bread')
    .tooltip(Text.translate('tooltip.bth.lembas_bread'))
    .translationKey('item.bth.lembas_bread');

  event.create('bth:mallorn_leaf')
    .texture('bth:item/mallorn_leaf')
    .tooltip(Text.translate('tooltip.bth.mallorn_leaf'))
    .translationKey('item.bth.mallorn_leaf');


  // BTH end game "super food" 10 hearts, 5 hours
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
    .texture('bth:item/nanobot_soda_bottle_empty')
    .tooltip(Text.translate('tooltip.bth.nanobot_soda_bottle_empty'))
    .translationKey('item.bth.nanobot_soda_bottle_empty');

});
