// priority: 0

/**
 * @file Item tooltips for Beyond the Horizon.
 * 
 */

/**
 * Event handler for adding tooltips.
 */
ItemEvents.tooltip(event => {

  /**
   * Adds translated tooltip to one or more items.
   * @param {string|string[]} items The ID(s) of the item(s) to add.
   * @param {string|string[]} textID The language entry/entries for the tooltip.
   */
  const addTooltip = (items, textID) => {
    if (Array.isArray(textID)) {
      textID.forEach((id) => event.add(items, Text.translate(id)));
    } else {
      event.add(items, Text.translate(textID));
    }
  };

  addTooltip('plushies:allay_plushie', 'tooltip.bth.plushies.allay');
  addTooltip('plushies:axolotl_plushie', 'tooltip.bth.plushies.axolotl');
  addTooltip('plushies:bat_plushie', 'tooltip.bth.plushies.bat');
  addTooltip('perfectplushies:bear_plushie', 'tooltip.bth.plushies.bear');
  addTooltip('plushies:bee_plushie', 'tooltip.bth.plushies.bee');
  addTooltip('plushies:blaze_plushie', 'tooltip.bth.plushies.blaze');
  addTooltip('plushie_buddies:plushie_camel', 'tooltip.bth.plushies.camel');
  addTooltip('perfectplushies:monkey_plushie', 'tooltip.bth.plushies.chimpanzee');
  addTooltip('perfectplushies:cat_plushie', 'tooltip.bth.plushies.cat');
  addTooltip('plushie_buddies:plushie_cave_spider', 'tooltip.bth.plushies.cave_spider');
  addTooltip('plushie_buddies:plushie_chicken', 'tooltip.bth.plushies.chicken');
  addTooltip('plushies:cod_plushie', 'tooltip.bth.plushies.cod');
  addTooltip('plushie_buddies:plushie_cow', 'tooltip.bth.plushies.cow');
  addTooltip('plushie_buddies:plushie_creeper', 'tooltip.bth.plushies.creeper');
  addTooltip('perfectplushies:dolphin_plushie', 'tooltip.bth.plushies.dolphin');
  addTooltip('plushie_buddies:plushie_enderdragon', 'tooltip.bth.plushies.ender_dragon');
  addTooltip('plushie_buddies:plushie_drowned', 'tooltip.bth.plushies.drowned');
  addTooltip('plushie_buddies:plushie_elder_guardian', 'tooltip.bth.plushies.elder_guardian');
  addTooltip('perfectplushies:elephant_plushie', 'tooltip.bth.plushies.elephant');
  addTooltip('plushie_buddies:plushie_enderman', 'tooltip.bth.plushies.enderman');
  addTooltip('plushies:endermite_plushie', 'tooltip.bth.plushies.endermite');
  addTooltip('plushie_buddies:plushie_evoker', 'tooltip.bth.plushies.evoker');
  addTooltip('perfectplushies:frog_plushie', 'tooltip.bth.plushies.frog');
  addTooltip('perfectplushies:red_fox_plushie', 'tooltip.bth.plushies.fox');
  addTooltip('plushie_buddies:plushie_fox', 'tooltip.bth.plushies.foxhound');
  addTooltip('perfectplushies:doe_plushie', 'tooltip.bth.plushies.gazelle');
  addTooltip('plushies:ghast_plushie', 'tooltip.bth.plushies.ghast');
  addTooltip('plushies:glow_squid_plushie', 'tooltip.bth.plushies.glow_squid');
  addTooltip('plushie_buddies:plushie_goat', 'tooltip.bth.plushies.goat');
  addTooltip('plushie_buddies:plushie_guardian', 'tooltip.bth.plushies.guardian');
  addTooltip('plushie_buddies:plushie_hoglin', 'tooltip.bth.plushies.hoglin');
  addTooltip('plushie_buddies:plushie_horse', 'tooltip.bth.plushies.horse');
  addTooltip('perfectplushies:hummingbird_plushie', 'tooltip.bth.plushies.hummingbird');
  addTooltip('plushie_buddies:plushie_husk', 'tooltip.bth.plushies.husk');
  addTooltip('plushies:illusioner_plushie', 'tooltip.bth.plushies.illusioner');
  addTooltip('plushie_buddies:plushie_iron_golem', 'tooltip.bth.plushies.iron_golem');
  addTooltip('plushie_buddies:plushie_llama', 'tooltip.bth.plushies.llama');
  addTooltip('plushies:magma_cube_plushie', 'tooltip.bth.plushies.magma_cube');
  addTooltip('perfectplushies:reindeer_plushie', 'tooltip.bth.plushies.moose');
  addTooltip('plushie_buddies:plushie_mooshroom', 'tooltip.bth.plushies.mooshroom');
  addTooltip('plushies:ocelot_plushie', 'tooltip.bth.plushies.ocelot');
  addTooltip('perfectplushies:panda_plushie', 'tooltip.bth.plushies.panda');
  addTooltip('plushie_buddies:plushie_parrot', 'tooltip.bth.plushies.parrot');
  addTooltip('plushie_buddies:plushie_phantom', 'tooltip.bth.plushies.phantom');
  addTooltip('plushie_buddies:plushie_pig', 'tooltip.bth.plushies.pig');
  addTooltip('plushie_buddies:plushie_piglin', 'tooltip.bth.plushies.piglin');
  addTooltip('plushie_buddies:plushie_piglin_brute', 'tooltip.bth.plushies.piglin_brute');
  addTooltip('plushie_buddies:plushie_pillager', 'tooltip.bth.plushies.pillager');
  addTooltip('plushie_buddies:plushie_polar_bear', 'tooltip.bth.plushies.polar_bear');
  addTooltip('plushies:pufferfish_plushie', 'tooltip.bth.plushies.pufferfish');
  addTooltip('perfectplushies:raccoon_plushie', 'tooltip.bth.plushies.raccoon');
  addTooltip('perfectplushies:mouse_plushie', 'tooltip.bth.plushies.rat');
  addTooltip('plushies:ravager_plushie', 'tooltip.bth.plushies.ravager');
  addTooltip('perfectplushies:hedgehog_plushie', 'tooltip.bth.plushies.rocky_roller');
  addTooltip('plushies:salmon_plushie', 'tooltip.bth.plushies.salmon');
  addTooltip('plushie_buddies:plushie_rabbit', 'tooltip.bth.plushies.rabbit');
  addTooltip('perfectplushies:goose_plushie', 'tooltip.bth.plushies.seagull');
  addTooltip('perfectplushies:seal_plushie', 'tooltip.bth.plushies.seal');
  addTooltip('plushie_buddies:plushie_sheep', 'tooltip.bth.plushies.sheep');
  addTooltip('perfectplushies:dog_plushie', 'tooltip.bth.plushies.shiba');
  addTooltip('plushie_buddies:plushie_shulker', 'tooltip.bth.plushies.shulker');
  addTooltip('plushies:silverfish_plushie', 'tooltip.bth.plushies.silverfish');
  addTooltip('plushie_buddies:plushie_skeleton', 'tooltip.bth.plushies.skeleton');
  addTooltip('plushie_buddies:plushie_skeleton_horse', 'tooltip.bth.plushies.skeleton_horse');
  addTooltip('plushies:slime_plushie', 'tooltip.bth.plushies.slime');
  addTooltip('plushies:sniffer_plushie', 'tooltip.bth.plushies.sniffer');
  addTooltip('plushies:snow_golem_plushie', 'tooltip.bth.plushies.snow_golem');
  addTooltip('plushie_buddies:plushie_spider', 'tooltip.bth.plushies.spider');
  addTooltip('plushies:squid_plushie', 'tooltip.bth.plushies.squid');
  addTooltip('plushie_buddies:plushie_stray', 'tooltip.bth.plushies.stray');
  addTooltip('plushie_buddies:plushie_strider', 'tooltip.bth.plushies.strider');
  addTooltip('plushies:tadpole_plushie', 'tooltip.bth.plushies.tadpole');
  addTooltip('perfectplushies:lion_cub_plushie', 'tooltip.bth.plushies.tiger');
  addTooltip('plushie_buddies:plushie_turtle', 'tooltip.bth.plushies.turtle');
  addTooltip('plushie_buddies:plushie_vex', 'tooltip.bth.plushies.vex');
  addTooltip('plushie_buddies:plushie_villager', 'tooltip.bth.plushies.villager');
  addTooltip('plushie_buddies:plushie_vindicator', 'tooltip.bth.plushies.vindicator');
  addTooltip('plushie_buddies:plushie_wandering_trader', 'tooltip.bth.plushies.wandering_trader');
  addTooltip('plushie_buddies:plushie_warden', 'tooltip.bth.plushies.warden');
  addTooltip('plushie_buddies:plushie_witch', 'tooltip.bth.plushies.witch');
  addTooltip('plushie_buddies:plushie_wither', 'tooltip.bth.plushies.wither');
  addTooltip('plushie_buddies:plushie_wither_skeleton', 'tooltip.bth.plushies.wither_skeleton');
  addTooltip('plushie_buddies:plushie_wolf', 'tooltip.bth.plushies.wolf');
  addTooltip('plushie_buddies:plushie_zoglin', 'tooltip.bth.plushies.zoglin');
  addTooltip('plushie_buddies:plushie_zombie', 'tooltip.bth.plushies.zombie');
  addTooltip('plushie_buddies:plushie_zombie_villager', 'tooltip.bth.plushies.zombie_villager');
  addTooltip('plushie_buddies:plushie_zombified_piglin', 'tooltip.bth.plushies.zombified_piglin');

  addTooltip('aether:blue_aercloud', 'tooltip.bth.aercloud');
  addTooltip('aether:cold_aercloud', 'tooltip.bth.cold_aercloud');
  addTooltip('aether:golden_aercloud', 'tooltip.bth.aercloud');
  addTooltip('deep_aether:sterling_aercloud', 'tooltip.bth.aercloud');
  addTooltip('lost_aether_content:pink_aercloud', 'tooltip.bth.aercloud');

  addTooltip('alexscaves:biome_treat', 'tooltip.bth.alexscaves.biome_treat');
});
