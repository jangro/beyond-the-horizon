// priority: 10

/**
 * @file Recipe additions for PneumaticCraft's crafting methods.
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('pneumaticcraft')) {
    return;
  }

  const ID_PREFIX = 'bth:pneumaticcraft/';

  // Amadron

  // Assembly Drill

  // Assembly Laser

  // Explosion Crafting

  // Fluid Mixer
  event.recipes.pneumaticcraft.fluid_mixer(Fluid.of('immersiveengineering:acetaldehyde 12'), Fluid.of('immersiveengineering:creosote 8'), 1, 10, 'minecraft:air', Fluid.of('immersiveengineering:phenolic_resin 8')).id(`${ID_PREFIX}fluid_mixer/phenolic_resin`);

  // Fuel Quality

  // Heat Frame Cooling

  // Pressure Chamber

  // Refinery

  // Thermopneumatic Processing Plant

});
