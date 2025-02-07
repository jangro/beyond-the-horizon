// priority: 120

/**
 * @file Custom fluid additions for Beyond the Horizon.
 */

StartupEvents.registry("fluid", event => {

  // For Ender IO Soul Engine
  event.create('bth:sugar_water')
    .thickTexture(0xEADDCA)
    .bucketColor(0xEADDCA)
    .displayName('Sugar Water');

  event.create('bth:soul_mixture')
    .thickTexture(0x6F4E37)
    .bucketColor(0x6F4E37)
    .displayName('Soul Mixture');

  event.create('bth:ender_fuel')
    .thickTexture(0xA95C68)
    .bucketColor(0xA95C68)
    .displayName('Ender Fuel');

  event.create('bth:hyper_nutritious_goo')
    .thickTexture(0xCD78FF)
    .bucketColor(0xCD78FF)
    .displayName('Hyper Nutritious Goo');

  event.create('bth:nanobot_soda')
    .thickTexture(0x4DD7FF)
    .bucketColor(0x4DD7FF)
    .displayName('NanoBot Soda');

});
