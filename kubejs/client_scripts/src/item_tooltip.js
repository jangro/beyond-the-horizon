// priority: 0

/**
 * @file Item tooltips for Beyond the Horizon.
 * 
 */

/**
 * Event handler for adding tooltip.
 */
ItemEvents.tooltip(event => {

  /**
   * Adds translated tooltip to one or more items.
   * @param {string|string[]} items The ID(s) of the item(s) to add.
   * @param {string|string[]} textID The language entry/entries for the tooltip.
   */
  const addInfo = (items, textID) => {
    if (Array.isArray(textID)) {
      textID.forEach((id) => event.add(items, Text.translate(id)));
    } else {
      event.add(items, Text.translate(textID));
    }
  };

  addInfo('plushies:allay_plushie', 'tooltip.bth.plushies.allay');
  addInfo('plushies:axolotl_plushie', 'tooltip.bth.plushies.axolotl');
  addInfo('plushies:bat_plushie', 'tooltip.bth.plushies.bat');
  addInfo('perfectplushies:bear_plushie', 'tooltip.bth.plushies.bear');
  addInfo('plushies:bee_plushie', 'tooltip.bth.plushies.bee');
  addInfo('plushies:blaze_plushie', 'tooltip.bth.plushies.blaze');
  addInfo('plushie_buddies:plushie_camel', 'tooltip.bth.plushies.camel');
  addInfo('perfectplushies:monkey_plushie', 'tooltip.bth.plushies.chimpanzee');
  addInfo('perfectplushies:cat_plushie', 'tooltip.bth.plushies.cat');
  addInfo('plushie_buddies:plushie_cave_spider', 'tooltip.bth.plushies.cave_spider');
  addInfo('plushie_buddies:plushie_chicken', 'tooltip.bth.plushies.chicken');
  addInfo('plushies:cod_plushie', 'tooltip.bth.plushies.cod');
  addInfo('plushie_buddies:plushie_cow', 'tooltip.bth.plushies.cow');
  addInfo('plushie_buddies:plushie_creeper', 'tooltip.bth.plushies.creeper');
  addInfo('perfectplushies:dolphin_plushie', 'tooltip.bth.plushies.dolphin');
  addInfo('plushie_buddies:plushie_enderdragon', 'tooltip.bth.plushies.ender_dragon');
  addInfo('plushie_buddies:plushie_drowned', 'tooltip.bth.plushies.drowned');
  addInfo('plushie_buddies:plushie_elder_guardian', 'tooltip.bth.plushies.elder_guardian');
  addInfo('perfectplushies:elephant_plushie', 'tooltip.bth.plushies.elephant');
  addInfo('plushie_buddies:plushie_enderman', 'tooltip.bth.plushies.enderman');
  addInfo('plushies:endermite_plushie', 'tooltip.bth.plushies.endermite');
  addInfo('plushie_buddies:plushie_evoker', 'tooltip.bth.plushies.evoker');
  addInfo('perfectplushies:frog_plushie', 'tooltip.bth.plushies.frog');
  addInfo('perfectplushies:red_fox_plushie', 'tooltip.bth.plushies.fox');
  addInfo('plushie_buddies:plushie_fox', 'tooltip.bth.plushies.foxhound');
  addInfo('perfectplushies:doe_plushie', 'tooltip.bth.plushies.gazelle');
  addInfo('plushies:ghast_plushie', 'tooltip.bth.plushies.ghast');
  addInfo('plushies:glow_squid_plushie', 'tooltip.bth.plushies.glow_squid');
  addInfo('plushie_buddies:plushie_goat', 'tooltip.bth.plushies.goat');
  addInfo('plushie_buddies:plushie_guardian', 'tooltip.bth.plushies.guardian');
  addInfo('plushie_buddies:plushie_hoglin', 'tooltip.bth.plushies.hoglin');
  addInfo('plushie_buddies:plushie_horse', 'tooltip.bth.plushies.horse');
  addInfo('perfectplushies:hummingbird_plushie', 'tooltip.bth.plushies.hummingbird');
  addInfo('plushie_buddies:plushie_husk', 'tooltip.bth.plushies.husk');
  addInfo('plushies:illusioner_plushie', 'tooltip.bth.plushies.illusioner');
  addInfo('plushie_buddies:plushie_iron_golem', 'tooltip.bth.plushies.iron_golem');
  addInfo('plushie_buddies:plushie_llama', 'tooltip.bth.plushies.llama');
  addInfo('plushies:magma_cube_plushie', 'tooltip.bth.plushies.magma_cube');
  addInfo('perfectplushies:reindeer_plushie', 'tooltip.bth.plushies.moose');
  addInfo('plushie_buddies:plushie_mooshroom', 'tooltip.bth.plushies.mooshroom');
  addInfo('plushies:ocelot_plushie', 'tooltip.bth.plushies.ocelot');
  addInfo('perfectplushies:panda_plushie', 'tooltip.bth.plushies.panda');
  addInfo('plushie_buddies:plushie_parrot', 'tooltip.bth.plushies.parrot');
  addInfo('plushie_buddies:plushie_phantom', 'tooltip.bth.plushies.phantom');
  addInfo('plushie_buddies:plushie_pig', 'tooltip.bth.plushies.pig');
  addInfo('plushie_buddies:plushie_piglin', 'tooltip.bth.plushies.piglin');
  addInfo('plushie_buddies:plushie_piglin_brute', 'tooltip.bth.plushies.piglin_brute');
  addInfo('plushie_buddies:plushie_pillager', 'tooltip.bth.plushies.pillager');
  addInfo('plushie_buddies:plushie_polar_bear', 'tooltip.bth.plushies.polar_bear');
  addInfo('plushies:pufferfish_plushie', 'tooltip.bth.plushies.pufferfish');
  addInfo('perfectplushies:raccoon_plushie', 'tooltip.bth.plushies.raccoon');
  addInfo('perfectplushies:mouse_plushie', 'tooltip.bth.plushies.rat');
  addInfo('plushies:ravager_plushie', 'tooltip.bth.plushies.ravager');
  addInfo('perfectplushies:hedgehog_plushie', 'tooltip.bth.plushies.rocky_roller');
  addInfo('plushies:salmon_plushie', 'tooltip.bth.plushies.salmon');
  addInfo('plushie_buddies:plushie_rabbit', 'tooltip.bth.plushies.rabbit');
  addInfo('perfectplushies:goose_plushie', 'tooltip.bth.plushies.seagull');
  addInfo('perfectplushies:seal_plushie', 'tooltip.bth.plushies.seal');
  addInfo('plushie_buddies:plushie_sheep', 'tooltip.bth.plushies.sheep');
  addInfo('perfectplushies:dog_plushie', 'tooltip.bth.plushies.shiba');
  addInfo('plushie_buddies:plushie_shulker', 'tooltip.bth.plushies.shulker');
  addInfo('plushies:silverfish_plushie', 'tooltip.bth.plushies.silverfish');
  addInfo('plushie_buddies:plushie_skeleton', 'tooltip.bth.plushies.skeleton');
  addInfo('plushie_buddies:plushie_skeleton_horse', 'tooltip.bth.plushies.skeleton_horse');
  addInfo('plushies:slime_plushie', 'tooltip.bth.plushies.slime');
  addInfo('plushies:sniffer_plushie', 'tooltip.bth.plushies.sniffer');
  addInfo('plushies:snow_golem_plushie', 'tooltip.bth.plushies.snow_golem');
  addInfo('plushie_buddies:plushie_spider', 'tooltip.bth.plushies.spider');
  addInfo('plushies:squid_plushie', 'tooltip.bth.plushies.squid');
  addInfo('plushie_buddies:plushie_stray', 'tooltip.bth.plushies.stray');
  addInfo('plushie_buddies:plushie_strider', 'tooltip.bth.plushies.strider');
  addInfo('plushies:tadpole_plushie', 'tooltip.bth.plushies.tadpole');
  addInfo('perfectplushies:lion_cub_plushie', 'tooltip.bth.plushies.tiger');
  addInfo('plushie_buddies:plushie_turtle', 'tooltip.bth.plushies.turtle');
  addInfo('plushie_buddies:plushie_vex', 'tooltip.bth.plushies.vex');
  addInfo('plushie_buddies:plushie_villager', 'tooltip.bth.plushies.villager');
  addInfo('plushie_buddies:plushie_vindicator', 'tooltip.bth.plushies.vindicator');
  addInfo('plushie_buddies:plushie_wandering_trader', 'tooltip.bth.plushies.wandering_trader');
  addInfo('plushie_buddies:plushie_warden', 'tooltip.bth.plushies.warden');
  addInfo('plushie_buddies:plushie_witch', 'tooltip.bth.plushies.witch');
  addInfo('plushie_buddies:plushie_wither', 'tooltip.bth.plushies.wither');
  addInfo('plushie_buddies:plushie_wither_skeleton', 'tooltip.bth.plushies.wither_skeleton');
  addInfo('plushie_buddies:plushie_wolf', 'tooltip.bth.plushies.wolf');
  addInfo('plushie_buddies:plushie_zoglin', 'tooltip.bth.plushies.zoglin');
  addInfo('plushie_buddies:plushie_zombie', 'tooltip.bth.plushies.zombie');
  addInfo('plushie_buddies:plushie_zombie_villager', 'tooltip.bth.plushies.zombie_villager');
  addInfo('plushie_buddies:plushie_zombified_piglin', 'tooltip.bth.plushies.zombified_piglin');

  addInfo('aether:blue_aercloud', 'tooltip.bth.aercloud');
  addInfo('aether:cold_aercloud', 'tooltip.bth.cold_aercloud');
  addInfo('aether:golden_aercloud', 'tooltip.bth.aercloud');
  addInfo('deep_aether:sterling_aercloud', 'tooltip.bth.aercloud');
  addInfo('lost_aether_content:pink_aercloud', 'tooltip.bth.aercloud');
});
