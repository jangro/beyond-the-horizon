// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */

StartupEvents.registry("item", event => {

  // Adventurer's Spellbook
  // A spellbook for Iron's Spells and Spellbooks that comes filled with utility spells useful for explorers, such as recall.
  event.create('bth:adventurers_spell_book', 'irons_spells_js:spellbook')
    .setMaxSpellSlots(8)
    .addDefaultAttribute('minecraft:generic.movement_speed', 'Movement Speed', 0.2, 'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana', 'Max Mana', 100, 'addition')
    .addDefaultSpell('irons_spellbooks:summon_horse', 1)
    .addDefaultSpell('irons_spellbooks:recall', 1)
    .translationKey('item.bth.adventurers_spell_book');

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
    .attackDamageBaseline(13.0)
    .speedBaseline(-2)
    .fireResistant(true)
    .rarity('EPIC')
    .texture('bth:item/terminus')
    .tier('netherite')
    .tooltip(Text.translate('tooltip.bth.terminus'))
    .translationKey('item.bth.terminus')
    .addDefaultSpell('bth:terminus_singularity', 1)
    .addDefaultSpell('bth:terminus_space_fold', 1)
    .unstackable();

  // BTH mid game "super food" 2 hearts, 2.5 hours
  event.create('bth:lembas_bread')
    .food(food => {
      food
        .hunger(4)
        .saturation(6.25)
        .eaten(ctx => {
          let index = Math.floor(4 * Math.random());
          ctx.player.tell(Text.translate(`item_effect.bth.lembas_bread_${index}`).gold());
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
          let index = Math.floor(4 * Math.random());
          ctx.player.tell(Text.translate(`item_effect.bth.nanobot_soda_${index}`).gold());
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

// Make Terminus unbreakable here since we can't do it in the item creation event.
// SV: I suspect setting the tier to netherite gives is netherite level durability rather than -1.
ItemEvents.modification(event => {
  event.modify('bth:terminus', item => {
    item.maxDamage = -1;
  });
});
