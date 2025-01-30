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

  event.add('plushies:allay_plushie', '\u00A77Craft using a photograph containing allay')
  event.add('plushies:axolotl_plushie', '\u00A77Craft using a photograph containing axolotl')
  event.add('plushies:bat_plushie', '\u00A77Craft using a photograph containing bat')
  event.add('perfectplushies:bear_plushie', '\u00A77Craft using a photograph containing bear')
  event.add('plushies:bee_plushie', '\u00A77Craft using a photograph containing bee')
  event.add('plushies:blaze_plushie', '\u00A77Craft using a photograph containing blaze')
  event.add('plushie_buddies:plushie_camel', '\u00A77Craft using a photograph containing camel')
  event.add('perfectplushies:monkey_plushie', '\u00A77Craft using a photograph containing chimpanzee')
  event.add('perfectplushies:cat_plushie', '\u00A77Craft using a photograph containing cat')
  event.add('plushie_buddies:plushie_cave_spider', '\u00A77Craft using a photograph containing cave spider')
  event.add('plushie_buddies:plushie_chicken', '\u00A77Craft using a photograph containing chicken')
  event.add('plushies:cod_plushie', '\u00A77Craft using a photograph containing cod')
  event.add('plushie_buddies:plushie_cow', '\u00A77Craft using a photograph containing cow')
  event.add('plushie_buddies:plushie_creeper', '\u00A77Craft using a photograph containing creeper')
  event.add('perfectplushies:dolphin_plushie', '\u00A77Craft using a photograph containing dolphin')
  event.add('plushie_buddies:plushie_enderdragon', '\u00A77Craft using a photograph containing ender dragon')
  event.add('plushie_buddies:plushie_drowned', '\u00A77Craft using a photograph containing drowned')
  event.add('plushie_buddies:plushie_elder_guardian', '\u00A77Craft using a photograph containing elder guardian')
  event.add('perfectplushies:elephant_plushie', '\u00A77Craft using a photograph containing elephant')
  event.add('plushie_buddies:plushie_enderman', '\u00A77Craft using a photograph containing enderman')
  event.add('plushies:endermite_plushie', '\u00A77Craft using a photograph containing endermite')
  event.add('plushie_buddies:plushie_evoker', '\u00A77Craft using a photograph containing evoker')
  event.add('perfectplushies:frog_plushie', '\u00A77Craft using a photograph containing frog')
  event.add('perfectplushies:red_fox_plushie', '\u00A77Craft using a photograph containing fox')
  event.add('plushie_buddies:plushie_fox', '\u00A77Craft using a photograph containing foxhound')
  event.add('perfectplushies:doe_plushie', '\u00A77Craft using a photograph containing gazelle')
  event.add('plushies:ghast_plushie', '\u00A77Craft using a photograph containing ghast')
  event.add('plushies:glow_squid_plushie', '\u00A77Craft using a photograph containing glow squid')
  event.add('plushie_buddies:plushie_goat', '\u00A77Craft using a photograph containing goat')
  event.add('plushie_buddies:plushie_guardian', '\u00A77Craft using a photograph containing guardian')
  event.add('plushie_buddies:plushie_hoglin', '\u00A77Craft using a photograph containing hoglin')
  event.add('plushie_buddies:plushie_horse', '\u00A77Craft using a photograph containing horse')
  event.add('perfectplushies:hummingbird_plushie', '\u00A77Craft using a photograph containing hummingbird')
  event.add('plushie_buddies:plushie_husk', '\u00A77Craft using a photograph containing husk')
  event.add('plushies:illusioner_plushie', '\u00A77Craft using a photograph containing illusioner')
  event.add('plushie_buddies:plushie_iron_golem', '\u00A77Craft using a photograph containing iron golem')
  event.add('plushie_buddies:plushie_llama', '\u00A77Craft using a photograph containing llama')
  event.add('plushies:magma_cube_plushie', '\u00A77Craft using a photograph containing magma cube')
  event.add('perfectplushies:reindeer_plushie', '\u00A77Craft using a photograph containing moose')
  event.add('plushie_buddies:plushie_mooshroom', '\u00A77Craft using a photograph containing mooshroom')
  event.add('plushies:ocelot_plushie', '\u00A77Craft using a photograph containing ocelot')
  event.add('perfectplushies:panda_plushie', '\u00A77Craft using a photograph containing panda')
  event.add('plushie_buddies:plushie_parrot', '\u00A77Craft using a photograph containing parrot')
  event.add('plushie_buddies:plushie_phantom', '\u00A77Craft using a photograph containing phantom')
  event.add('plushie_buddies:plushie_pig', '\u00A77Craft using a photograph containing pig')
  event.add('plushie_buddies:plushie_piglin', '\u00A77Craft using a photograph containing piglin')
  event.add('plushie_buddies:plushie_piglin_brute', '\u00A77Craft using a photograph containing piglin brute')
  event.add('plushie_buddies:plushie_pillager', '\u00A77Craft using a photograph containing pillager')
  event.add('plushie_buddies:plushie_polar_bear', '\u00A77Craft using a photograph containing polar bear')
  event.add('plushies:pufferfish_plushie', '\u00A77Craft using a photograph containing pufferfish')
  event.add('perfectplushies:raccoon_plushie', '\u00A77Craft using a photograph containing raccoon')
  event.add('perfectplushies:mouse_plushie', '\u00A77Craft using a photograph containing rat')
  event.add('plushies:ravager_plushie', '\u00A77Craft using a photograph containing ravager')
  event.add('perfectplushies:hedgehog_plushie', '\u00A77Craft using a photograph containing rocky roller')
  event.add('plushies:salmon_plushie', '\u00A77Craft using a photograph containing salmon')
  event.add('plushie_buddies:plushie_rabbit', '\u00A77Craft using a photograph containing rabbit')
  event.add('perfectplushies:goose_plushie', '\u00A77Craft using a photograph containing seagull')
  event.add('perfectplushies:seal_plushie', '\u00A77Craft using a photograph containing seal')
  event.add('plushie_buddies:plushie_sheep', '\u00A77Craft using a photograph containing sheep')
  event.add('perfectplushies:dog_plushie', '\u00A77Craft using a photograph containing shiba')
  event.add('plushie_buddies:plushie_shulker', '\u00A77Craft using a photograph containing shulker')
  event.add('plushies:silverfish_plushie', '\u00A77Craft using a photograph containing silverfish')
  event.add('plushie_buddies:plushie_skeleton', '\u00A77Craft using a photograph containing skeleton')
  event.add('plushie_buddies:plushie_skeleton_horse', '\u00A77Craft using a photograph containing skeleton horse')
  event.add('plushies:slime_plushie', '\u00A77Craft using a photograph containing slime')
  event.add('plushies:sniffer_plushie', '\u00A77Craft using a photograph containing sniffer')
  event.add('plushies:snow_golem_plushie', '\u00A77Craft using a photograph containing snow golem')
  event.add('plushie_buddies:plushie_spider', '\u00A77Craft using a photograph containing spider')
  event.add('plushies:squid_plushie', '\u00A77Craft using a photograph containing squid')
  event.add('plushie_buddies:plushie_stray', '\u00A77Craft using a photograph containing stray')
  event.add('plushie_buddies:plushie_strider', '\u00A77Craft using a photograph containing strider')
  event.add('plushies:tadpole_plushie', '\u00A77Craft using a photograph containing tadpole')
  event.add('perfectplushies:lion_cub_plushie', '\u00A77Craft using a photograph containing tiger')
  event.add('plushie_buddies:plushie_turtle', '\u00A77Craft using a photograph containing turtle')
  event.add('plushie_buddies:plushie_vex', '\u00A77Craft using a photograph containing vex')
  event.add('plushie_buddies:plushie_villager', '\u00A77Craft using a photograph containing villager')
  event.add('plushie_buddies:plushie_vindicator', '\u00A77Craft using a photograph containing vindicator')
  event.add('plushie_buddies:plushie_wandering_trader', '\u00A77Craft using a photograph containing wandering trader')
  event.add('plushie_buddies:plushie_warden', '\u00A77Craft using a photograph containing warden')
  event.add('plushie_buddies:plushie_witch', '\u00A77Craft using a photograph containing witch')
  event.add('plushie_buddies:plushie_wither', '\u00A77Craft using a photograph containing wither')
  event.add('plushie_buddies:plushie_wither_skeleton', '\u00A77Craft using a photograph containing wither skeleton')
  event.add('plushie_buddies:plushie_wolf', '\u00A77Craft using a photograph containing wolf')
  event.add('plushie_buddies:plushie_zoglin', '\u00A77Craft using a photograph containing zoglin')
  event.add('plushie_buddies:plushie_zombie', '\u00A77Craft using a photograph containing zombie')
  event.add('plushie_buddies:plushie_zombie_villager', '\u00A77Craft using a photograph containing zombie villager')
  event.add('plushie_buddies:plushie_zombified_piglin', '\u00A77Craft using a photograph containing zombified piglin')

});
