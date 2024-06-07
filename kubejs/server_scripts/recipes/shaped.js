// priority: 10

/**
 * @file Shaped recipe additions for Beyond the Horizon.
 * 
 * Note: Recipes should be in this order:
 * 1) Beyond the Horizon (pack-specific content)
 * 2) Minecraft (vanilla)
 * 3) Other mods, alphabetically.
 * 
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:crafting/'; // Recipe ID

  /**
   * Adds a new fluid crafting shaped recipe.
   * 
   * Note: Inputs are not the same as regular shaped crafting keys.
   * Look at the existing PneumaticCraft recipes for an example.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} pattern The pattern for the shaped recipe (same as in event.shaped(...)).
   * @param {JsonObject} inputs Recipe ingredients (may include fluids).
   */
  const shapedFluid = (output, pattern, inputs) => {
    return event.custom({
      type: 'immersiveengineering:shaped_fluid',
      category: 'misc',
      key: inputs,
      pattern: pattern,
      result: Item.of(output).toJson(),
    });
  };

  // Beyond the Horizon
  event.shaped(Item.of('eccentrictome:tome', ECCENTRIC_TOME_NBT), [
    ' S ',
    'SBS',
    ' S '
  ], {
    S: '#forge:bookshelves',
    B: 'minecraft:book'
  }).id(`${ID_PREFIX}filled_eccentric_tome`);

  // Minecraft
  event.shaped('minecraft:saddle', [
    'LLL',
    'SLS',
    'I I'
  ], {
    S: '#forge:string',
    L: '#forge:leather',
    I: '#forge:ingots/iron'
  }).id(`${ID_PREFIX}saddle`);
  
  // Immersive Aircraft
  event.shaped('immersive_aircraft:hull', [
    'LLL',
    'IGI',
    'LLL'
  ], { 
    L: 'aether:skyroot_log',
    I: '#forge:ingots/iron',
    G: 'aether:enchanted_gravitite'
  }).id(`${ID_PREFIX}immersive_aircraft_hull`);

  // Iron's Spellbooks
  event.shaped('irons_spellbooks:silver_ring', [
    'ES ',
    'S S',
    ' S '
  ], {
      S: '#forge:ingots/silver',
      E: 'irons_spellbooks:arcane_essence'
  }).id(`${ID_PREFIX}irons_silver_ring`);
  
  event.shaped('irons_spellbooks:upgrade_orb', [
    'ACA',
    'CEC',
    'ACA'
  ], {
      A: 'irons_spellbooks:arcane_ingot',
      C: 'irons_spellbooks:cinder_essence',
      E: 'endrem:magical_eye'
  }).id(`${ID_PREFIX}irons_upgrade_orb`);

  // PneumaticCraft: Repressurized
  shapedFluid('pneumaticcraft:speed_upgrade', [
    'LSL',
    'SFS',
    'LSL'
  ], {
    S: {item: 'minecraft:sugar'},
    L: {tag: 'pneumaticcraft:upgrade_components'},
    F: {
      type: 'immersiveengineering:fluid',
      amount: 1000,
      tag: 'forge:lubricant'
    }
  }).id(`${ID_PREFIX}speed_upgrade`);

  shapedFluid('2x pneumaticcraft:speed_upgrade', [
    'LSL',
    'SFS',
    'LSL'
  ], {
    S: {item: 'pneumaticcraft:glycerol'},
    L: {tag: 'pneumaticcraft:upgrade_components'},
    F: {
      type: 'immersiveengineering:fluid',
      amount: 1000,
      tag: 'forge:lubricant'
    }
  }).id(`${ID_PREFIX}speed_upgrade_from_glycerol`);

});
