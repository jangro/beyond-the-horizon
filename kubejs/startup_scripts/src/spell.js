// priority: 120

/**
 * @file Custom spell additions for Beyond the Horizon.
 */

StartupEvents.registry('irons_spellbooks:spells', event => {

  event.create('bth:terminus_singularity')
    .setCastTime(20)                          // Cast time in ticks
    .setCooldownSeconds(120)                   // Spell cooldown in seconds
    .setBaseManaCost(120)
    .setCastType('long')                      // Cast type can be "continuous", "long", "instant", or "none"
    .setSchool(SchoolRegistry.ENDER)          // The school type. This is the ID of the school you want to use
    .setMinRarity('legendary')                // The minimum rarity of the spell. Can be "common", "uncommon", "rare", "epic", or "legendary"
    .setMaxLevel(1)                           // The maximum level
    .setStartSound('irons_spellbooks:spell.black_hole.cast')  // The sound to be played when you start casting the spell. Used for long spells
    //.setFinishSound('irons_spellbooks:spell.black_hole.cast') // Plays when the spell has finished casting
    .onCast(ctx => global.terminus_singularity(ctx))       // The function to be called when the spell is cast
    // Other methods like these also exist:
    // .onClientCast(ctx => {})                  // Client-side only cast method. Useful for particles and sounds
    // .onPreCast(ctx => {})                     // Called before the spell is cast.
    // .onPreClientCast(ctx => {})
    .setAllowLooting(false)                    // Setting this to false will disallow looting the spell from mobs or chests
    .needsLearning(false)                      // Usually this one is used for Eldritch spells
    .canBeCraftedBy(player => false)
    .setUniqueInfo((spellLevel, caster) => {  // Caster refers to the player
      return [
        // You need to return an array of components for this method. They can be any text you want.
        Component.green('2 AOE Damage'),
        Component.green('12 Block Radius'),
      ]
    });
    // .checkPreCastConditions(ctx => { // This method can be used to check if the spell can be cast. If it returns false, the spell won't be cast.
    //   // You can use this for targeting spells, like how the Slow spell works. preCastTargetHelper returns true or false based on the target conditions.
    //   // The parameters of this method include the level, entity, the player's magic data, the spell, the range, and the aim assist.
    //   return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 24, 0.35)
    // });

  event.create('bth:terminus_space_fold')
    //.setCastTime(20)                          // Cast time in ticks
    .setCooldownSeconds(1)                   // Spell cooldown in seconds
    .setBaseManaCost(20)
    .setCastType('instant')                      // Cast type can be "continuous", "long", "instant", or "none"
    .setSchool(SchoolRegistry.ENDER)          // The school type. This is the ID of the school you want to use
    .setMinRarity('legendary')                // The minimum rarity of the spell. Can be "common", "uncommon", "rare", "epic", or "legendary"
    .setMaxLevel(1)                           // The maximum level
    //.setStartSound('minecraft:entity.enderman.teleport')  // The sound to be played when you start casting the spell. Used for long spells
    .setFinishSound('minecraft:entity.enderman.teleport') // Plays when the spell has finished casting
    .onCast(ctx => global.terminus_space_fold(ctx))       // The function to be called when the spell is cast
    // Other methods like these also exist:
    // .onClientCast(ctx => {})                  // Client-side only cast method. Useful for particles and sounds
    // .onPreCast(ctx => {})                     // Called before the spell is cast.
    // .onPreClientCast(ctx => {})
    .setAllowLooting(false)                    // Setting this to false will disallow looting the spell from mobs or chests
    .needsLearning(false)                      // Usually this one is used for Eldritch spells
    .canBeCraftedBy(player => false)
    .setUniqueInfo((spellLevel, caster) => {  // Caster refers to the player
      return [
        // You need to return an array of components for this method. They can be any text you want.
        Component.green('64 Block Range'),
        Component.green('1 Wall Phasing'),
      ]
    });
});
