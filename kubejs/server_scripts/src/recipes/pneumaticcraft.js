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
  event.recipes.pneumaticcraft.explosion_crafting('minecraft:obsidian', 'minecraft:crying_obsidian', 20).id(`${ID_PREFIX}explosion_crafting/crying_obsidian_from_obsidian`);

  // Fluid Mixer
  // The schema from the KubeJS Discord can't do only fluids as output without item?
  //event.recipes.pneumaticcraft.fluid_mixer(Fluid.of('immersiveengineering:acetaldehyde 12'), Fluid.of('immersiveengineering:creosote 8'), 1, 10, Fluid.of('immersiveengineering:phenolic_resin 8')).id(`${ID_PREFIX}fluid_mixer/phenolic_resin`);

  // Fuel Quality

  // Heat Frame Cooling

  // Pressure Chamber
  event.recipes.pneumaticcraft.pressure_chamber('minecraft:obsidian', 'minecraft:crying_obsidian', 3.0).id(`${ID_PREFIX}pressure_chamber/crying_obsidian_from_obsidian`);

  // Refinery

  // Thermopneumatic Processing Plant

});
