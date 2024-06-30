// priority: 110

/**
 * @file Worldgen modifications for Beyond the Horizon.
 */


WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.blocks = [
      'galosphere:deepslate_silver_ore',
      'galosphere:silver_ore',
      'immersiveengineering:deepslate_ore_lead',
      'immersiveengineering:deepslate_ore_silver',
      'immersiveengineering:ore_lead',
      'immersiveengineering:ore_silver',
      'rustic_engineer:solarite_ore_deep_slate'
      'rustic_engineer:solarite_ore_stone',
    ]
  })
})
