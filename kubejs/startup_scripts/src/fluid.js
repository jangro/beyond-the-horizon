// priority: 120

/**
 * @file Custom fluid additions for Beyond the Horizon.
 */

StartupEvents.registry("fluid", event => {

  // For Ender IO Soul Engine
  event.create('bth:sugar_water')
    .thickTexture(0xEADDCA)
    .bucketColor(0xEADDCA)
    .translationKey('fluid.bth.sugar_water');

  event.create('bth:soul_mixture')
    .thickTexture(0x6F4E37)
    .bucketColor(0x6F4E37)
    .translationKey('fluid.bth.soul_mixture');

  event.create('bth:ender_fuel')
    .thickTexture(0xA95C68)
    .bucketColor(0xA95C68)
    .translationKey('fluid.bth.ender_fuel');

  event.create('bth:hyper_nutritious_goo')
    .thickTexture(0xCD78FF)
    .bucketColor(0xCD78FF)
    .translationKey('fluid.bth.hyper_nutritious_goo');

  event.create('bth:nanobot_soda')
    .thickTexture(0x4DD7FF)
    .bucketColor(0x4DD7FF)
    .translationKey('fluid.bth.nanobot_soda');

});
