//priority: 100

/**
 * @file BlockEvents Event Handler
 */

// Make all plushies squeek like the ones from @plushie_buddies
[ 'perfectplushies:bear_plushie',
  'perfectplushies:cat_plushie',
  'perfectplushies:doe_plushie',
  'perfectplushies:dog_plushie',
  'perfectplushies:dolphin_plushie',
  'perfectplushies:elephant_plushie',
  'perfectplushies:frog_plushie',
  'perfectplushies:goose_plushie',
  'perfectplushies:hedgehog_plushie',
  'perfectplushies:hummingbird_plushie',
  'perfectplushies:lion_cub_plushie',
  'perfectplushies:monkey_plushie',
  'perfectplushies:mouse_plushie',
  'perfectplushies:panda_plushie',
  'perfectplushies:raccoon_plushie',
  'perfectplushies:red_fox_plushie',
  'perfectplushies:reindeer_plushie',
  'perfectplushies:seal_plushie',
  'plushies:axolotl_plushie',
  'plushies:bat_plushie',
  'plushies:bee_plushie',
  'plushies:blaze_plushie',
  'plushies:cod_plushie',
  'plushies:endermite_plushie',
  'plushies:ghast_plushie',
  'plushies:glow_squid_plushie',
  'plushies:illusioner_plushie',
  'plushies:magma_cube_plushie',
  'plushies:ocelot_plushie',
  'plushies:pufferfish_plushie',
  'plushies:ravager_plushie',
  'plushies:salmon_plushie',
  'plushies:silverfish_plushie',
  'plushies:slime_plushie',
  'plushies:sniffer_plushie',
  'plushies:snow_golem_plushie',
  'plushies:squid_plushie',
  'plushies:tadpole_plushie',
  'plushies:allay_plushie',
].forEach((plushie) => {
  BlockEvents.rightClicked(plushie, event => {
    event.server.runCommandSilent(`execute in ${event.level.dimension} run playsound plushie_buddies:plushie_sound master @p ${event.block.x} ${event.block.y} ${event.block.z}`);
  });
});
