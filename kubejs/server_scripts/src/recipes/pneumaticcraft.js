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
  // XXX: How to specify > 1 input count?
  event.recipes.pneumaticcraft.assembly_laser('createdeco:gold_coin', 'rats:chunky_cheese_token').id(`${ID_PREFIX}assembly_laser/chunky_cheese_token`);

  // Explosion Crafting
  event.recipes.pneumaticcraft.explosion_crafting('minecraft:obsidian', 'minecraft:crying_obsidian', 20).id(`${ID_PREFIX}explosion_crafting/crying_obsidian_from_obsidian`);

  // Fluid Mixer
  // The schema from the KubeJS Discord can't do only fluids as output without item?
  //event.recipes.pneumaticcraft.fluid_mixer(Fluid.of('immersiveengineering:acetaldehyde 12'), Fluid.of('immersiveengineering:creosote 8'), 1, 10, Fluid.of('immersiveengineering:phenolic_resin 8')).id(`${ID_PREFIX}fluid_mixer/phenolic_resin`);

  // BTH ender fuel
  event.custom({
    "type": "pneumaticcraft:fluid_mixer",
    "fluid_output": {
      "amount": 1000,
      "fluid": "bth:ender_fuel"
    },
    "input1": {
      "type": "pneumaticcraft:fluid",
      "amount": 500,
      "fluid": "integrateddynamics:liquid_chorus"
    },
    "input2": {
      "type": "pneumaticcraft:fluid",
      "amount": 500,
      "fluid": "bth:soul_mixture"
    },
    "pressure": 3.0,
    "time": 100
  }).id(`${ID_PREFIX}fluid_mixer/ender_fuel`);

  // Fuel Quality

  // Heat Frame Cooling

  // Pressure Chamber
  event.recipes.pneumaticcraft.pressure_chamber('minecraft:obsidian', 'minecraft:crying_obsidian', 3.0).id(`${ID_PREFIX}pressure_chamber/crying_obsidian_from_obsidian`);

  // Refinery

  // Thermopneumatic Processing Plant

  // Liquid Source
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "fluid_output": {
      "amount": 100,
      "fluid": "starbunclemania:source_fluid"
    },
    "item_input": {
      "item": "ars_nouveau:sourceberry_bush"
    },
    "pressure": 2.0,
    "speed": 0.5
  }).id(`${ID_PREFIX}thermo_plant/source_fluid`);

  // Liquid Chorus
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "fluid_output": {
      "amount": 125,
      "fluid": "integrateddynamics:liquid_chorus"
    },
    "item_input": {
      "item": "minecraft:popped_chorus_fruit"
    },
    "pressure": 2.0,
    "speed": 0.5
  }).id(`${ID_PREFIX}thermo_plant/liquid_chorus`);

  // BTH sugar water
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "fluid_output": {
      "amount": 1000,
      "fluid": "bth:sugar_water"
    },
    "fluid_input": {
      "type": "pneumaticcraft:fluid",
      "amount": 1000,
      "tag": "minecraft:water"
    },
    "item_input": {
      "item": "minecraft:sugar"
    },
    "pressure": 2.0,
    "speed": 0.5
  }).id(`${ID_PREFIX}thermo_plant/sugar_water`);

  // BTH sugar water
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "fluid_output": {
      "amount": 1000,
      "fluid": "bth:soul_mixture"
    },
    "fluid_input": {
      "type": "pneumaticcraft:fluid",
      "amount": 1000,
      "tag": "minecraft:water"
    },
    "item_input": {
      "item": "minecraft:soul_sand"
    },
    "pressure": 2.0,
    "speed": 0.5,
    "temperature": {
      "min_temp": 373
    }
  }).id(`${ID_PREFIX}thermo_plant/soul_mixture`);

});
