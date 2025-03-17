// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */

const Heightmap = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap');
const BlockPos = Java.loadClass('net.minecraft.core.BlockPos');

// Load the config file
const CONFIG_PATH = 'config/bth.json';
const config = JsonIO.read(CONFIG_PATH) || { rtp_min_distance: 2000, rtp_max_distance: 10000 };

// Ensure config values are numbers and within limits
const minDist = Math.max(0, config.rtp_min_distance || 1000);
const maxDist = Math.min(29999999, config.rtp_max_distance || 10000);


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
          if (!ctx.server) return; // Ensure it only runs on the server

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
          if (!ctx.server) return; // Ensure it only runs on the server

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

  // BTH Ancient Cookie (random teleport on eat)
  event.create('bth:ancient_cookie')
    .food(food => {
      food
        .alwaysEdible()
        .hunger(0)
        .saturation(0)
        .eaten(ctx => {
          if (!ctx.server) return; // Ensure it only runs on the server

          let player = ctx.player;
          let index = Math.floor(4 * Math.random());
          player.tell(Text.translate(`item_effect.bth.ancient_cookie_${index}`).gold());

          let world = player.level;
          let worldBorder = world.getWorldBorder();
          let borderRadius = worldBorder ? worldBorder.getSize() / 2 : 29999999;

          let maxRadius = 0.9 * Math.min(maxDist, borderRadius);
          let minRadius = Math.min(minDist, maxRadius - 1); // Ensure min < max

          for (let i = 0; i < 10; i++) { // Try 10 times to find a valid position
            let angle = Math.random() * KMath.PI * 2;
            let distance = Math.floor(Math.random() * (maxRadius - minRadius) + minRadius);

            let x = Math.round(Math.cos(angle) * distance);
            let z = Math.round(Math.sin(angle) * distance);

            // Get the correct chunk
            let chunk = world.getChunk(x >> 4, z >> 4);

            // Get the correct Y level using chunk heightmap
            let y = chunk.getHeight(Heightmap.Types.WORLD_SURFACE, x & 15, z & 15);

            // Ensure the block is safe
            let block = world.getBlockState(new BlockPos(x, y - 1, z)).getBlock();
            if (!block.defaultBlockState().liquid()) { // Ensure it's not water or lava
              player.teleportTo(x + 0.5, y + 1, z + 0.5);
              player.tell(`The cookie teleported you to ${distance} blocks away from spawn.`);
              return;
            }
          }
          player.tell('Failed to find a safe teleport location after 10 tries. You get your cookie back.');
          player.give('bth:ancient_cookie');
        })
    })
    .texture('bth:item/ancient_cookie')
    .tooltip(Text.translate('tooltip.bth.ancient_cookie'))
    .translationKey('item.bth.ancient_cookie');

  // Edible version of supplementary's pancake
  event.create('bth:pancake')
    .food(food => {
      food.hunger(6).saturation(1.0)
    })
    .texture('supplementaries:item/pancake');

  // A slice of Create Addition's honey cake
  event.create('bth:honey_cake_slice')
    .food(food => {
      food.hunger(6).saturation(1.0)
    })
    .texture('bth:item/honey_cake_slice')
    .translationKey('item.bth.honey_cake_slice');

  // Mob catcher for bounties
  event.create('bth:spectre_snare')
    .maxDamage(16)
    .texture('bth:item/spectre_snare')
    .tooltip(Text.translate('tooltip.bth.spectre_snare'))
    .translationKey('item.bth.spectre_snare');

  // Create used mob catcher for each mob type
  event.create(`bth:bounty_proof_rat`).texture(`bth:item/bounty_proof_rat`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_rat`);
  event.create(`bth:bounty_proof_tiger`).texture(`bth:item/bounty_proof_tiger`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_tiger`);
  event.create(`bth:bounty_proof_mutant_zombie`).texture(`bth:item/bounty_proof_mutant_zombie`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_mutant_zombie`);
  event.create(`bth:bounty_proof_bone_serpent`).texture(`bth:item/bounty_proof_bone_serpent`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_bone_serpent`);
  event.create(`bth:bounty_proof_mutant_enderman`).texture(`bth:item/bounty_proof_mutant_enderman`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_mutant_enderman`);
  event.create(`bth:bounty_proof_mutant_skeleton`).texture(`bth:item/bounty_proof_mutant_skeleton`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_mutant_skeleton`);
  event.create(`bth:bounty_proof_aerwhale`).texture(`bth:item/bounty_proof_aerwhale`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_aerwhale`);
  event.create(`bth:bounty_proof_feral_ratlantean`).texture(`bth:item/bounty_proof_feral_ratlantean`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_feral_ratlantean`);
  event.create(`bth:bounty_proof_murmur`).texture(`bth:item/bounty_proof_murmur`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_murmur`);
  event.create(`bth:bounty_proof_mimicube`).texture(`bth:item/bounty_proof_mimicube`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_mimicube`);
  event.create(`bth:bounty_proof_behemoth`).texture(`bth:item/bounty_proof_behemoth`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_behemoth`);
  event.create(`bth:bounty_proof_farseer`).texture(`bth:item/bounty_proof_farseer`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_farseer`);
  event.create(`bth:bounty_proof_gum_worm`).texture(`bth:item/bounty_proof_gum_worm`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_gum_worm`);
  event.create(`bth:bounty_proof_warped_mosco`).texture(`bth:item/bounty_proof_warped_mosco`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_warped_mosco`);
  event.create(`bth:bounty_proof_void_worm`).texture(`bth:item/bounty_proof_void_worm`).tooltip(Text.translate('tooltip.bth.bounty_proof')).translationKey(`item.bth.bounty_proof_void_worm`);

});

// Make Terminus unbreakable here since we can't do it in the item creation event.
// SV: I suspect setting the tier to netherite gives is netherite level durability rather than -1.
ItemEvents.modification(event => {
  event.modify('bth:terminus', item => {
    item.maxDamage = -1;
  });
});
