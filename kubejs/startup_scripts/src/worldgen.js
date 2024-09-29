// priority: 110

/**
 * @file Worldgen modifications for Beyond the Horizon.
 */

/*
 * NOTES:
 *
 * Immersive Engineering ores can not be disabled here, use IE config.
 * Powah!'s uraninite is disabled in config/powah.json5.
 */

WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.blocks = [
      'galosphere:deepslate_silver_ore',
      'galosphere:silver_ore',
      'rustic_engineer:solarite_ore_deep_slate',
      'rustic_engineer:solarite_ore_stone',
    ]
  });
});
