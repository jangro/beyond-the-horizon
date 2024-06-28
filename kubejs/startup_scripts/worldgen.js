// priority: 110

/**
 * @file Worldgen modifications for Beyond the Horizon.
 */


WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.blocks = ['rustic_engineer:solarite_ore_stone', 'rustic_engineer:solarite_ore_deep_slate']
  })
})
