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
  event.shaped('minecraft:bundle', [
    'SRS',
    'R R',
    'RRR'
  ], {
    S: '#forge:string',
    R: ['minecraft:rabbit_hide', 'farmersdelight:canvas']
  }).id(`${ID_PREFIX}bundle`);
  
  event.shaped('minecraft:chest', [
    'PPP',
    'P P',
    'PPP'
  ], {
    P: '#minecraft:planks',
  }).id(`${ID_PREFIX}chest`);

  event.shaped('minecraft:saddle', [
    'LLL',
    'SLS',
    'I I'
  ], {
    S: '#forge:string',
    L: '#forge:leather',
    I: '#forge:ingots/iron'
  }).id(`${ID_PREFIX}saddle`);
  
  // Alex's Caves
  event.shaped('alexscaves:submarine', [
    'TWW',
    'ERC',
    'PXP'
  ], {
    T: 'immersiveengineering:toolupgrade_drill_waterproof',
    W: 'createdeco:copper_window',
    E: 'immersive_aircraft:engine',
    R: 'minecraft:redstone_block',
    C: 'create:contraption_controls',
    P: 'create:propeller',
    X: 'immersive_aircraft:enhanced_propeller'
  }).id(`${ID_PREFIX}submarine`);

  // Create Crafts & Additions
  event.shaped(Item.of('createaddition:brass_rod', 2), [
    ' I ',
    ' I ',
    '   '
  ], {
    I: '#forge:ingots/brass',
  }).id(`${ID_PREFIX}createaddition_brass_rod`);

  event.shaped(Item.of('createaddition:copper_rod', 2), [
    ' I ',
    ' I ',
    '   '
  ], {
    I: '#forge:ingots/copper',
  }).id(`${ID_PREFIX}createaddition_copper_rod`);

  event.shaped(Item.of('createaddition:electrum_rod', 2), [
    ' I ',
    ' I ',
    '   '
  ], {
    I: '#forge:ingots/electrum',
  }).id(`${ID_PREFIX}createaddition_electrum_rod`);

  event.shaped(Item.of('createaddition:gold_rod', 2), [
    ' I ',
    ' I ',
    '   '
  ], {
    I: '#forge:ingots/gold',
  }).id(`${ID_PREFIX}createaddition_gold_rod`);

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

  event.shaped('immersive_aircraft:hull_reinforcement', [
    'III',
    'LLL',
    'III'
  ], { 
    L: 'aether:skyroot_log',
    I: '#forge:ingots/iron',
  }).id(`${ID_PREFIX}immersive_aircraft_hull_reinforcement`);

  // Immersive Engineering
  event.shaped(Item.of('immersiveengineering:stick_aluminum', 2), [
    ' I ',
    ' I ',
    '   '
  ], {
    I: '#forge:ingots/aluminum',
  }).id(`${ID_PREFIX}immersiveengineering_stick_aluminum`);

  event.shaped(Item.of('immersiveengineering:stick_iron', 2), [
    ' I ',
    ' I ',
    '   '
  ], {
    I: '#forge:ingots/iron',
  }).id(`${ID_PREFIX}immersiveengineering_stick_iron`);

  event.shaped(Item.of('immersiveengineering:stick_steel', 2), [
    ' I ',
    ' I ',
    '   '
  ], {
    I: '#forge:ingots/steel',
  }).id(`${ID_PREFIX}immersiveengineering_stick_steel`);

  // Iron's Spellbooks
  event.shaped('irons_spellbooks:cooldown_ring', [
    'RA ',
    'A A',
    ' A '
  ], {
      A: '#forge:ingots/arcane_gold',
      R: 'irons_spellbooks:cooldown_rune'
  }).id(`${ID_PREFIX}irons_cooldown_ring`);
  
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

  event.shaped('paraglider:paraglider', [
    'SLS',
    'LSL',
    'SVS'
  ], {
      S: '#forge:rods/wooden',
      L: '#forge:leather',
      V: 'paraglider:stamina_vessel'
  }).id(`${ID_PREFIX}paraglider`);

  // PneumaticCraft: Repressurized
  event.shaped('pneumaticcraft:speed_upgrade', [
    'LSL',
    'SFS',
    'LSL'
  ], {
    S: 'minecraft:sugar',
    L: '#pneumaticcraft:upgrade_components',
    F: {
      type: 'immersiveengineering:fluid',
      amount: 1000,
      tag: 'forge:lubricant'
    }
  }).id(`${ID_PREFIX}speed_upgrade`);

  event.shaped('2x pneumaticcraft:speed_upgrade', [
    'LSL',
    'SFS',
    'LSL'
  ], {
    S: 'pneumaticcraft:glycerol',
    L: '#pneumaticcraft:upgrade_components',
    F: {
      type: 'immersiveengineering:fluid',
      amount: 1000,
      tag: 'forge:lubricant'
    }
  }).id(`${ID_PREFIX}speed_upgrade_from_glycerol`);

  // Rustic Engineer
  event.shaped('rustic_engineer:spider_mech_item', [
    'ESC',
    'LLV',
    'TTT'
  ], {
    E: 'immersive_aircraft:steel_boiler',
    S: 'create:yellow_seat',
    C: 'create:contraption_controls',
    L: 'forbidden_arcanus:aurum_log',
    V: 'pneumaticcraft:vortex_cannon',
    T: 'create:steam_engine'
  }).id(`${ID_PREFIX}spider_mech_item`);

  event.shaped('rustic_engineer:dragonfly_item', [
    'ESC',
    'LGL',
    'WHW'
  ], {
    E: 'immersive_aircraft:engine',
    S: 'create:yellow_seat',
    C: 'create:contraption_controls',
    L: 'immersive_aircraft:sail',
    G: 'create_connected:six_way_gearbox',
    W: 'rats:dragon_wing',
    H: 'immersive_aircraft:hull'
  }).id(`${ID_PREFIX}dragonfly_item`);

  event.shaped('rustic_engineer:wooden_cube_sleep', [
    ' G ',
    ' S ',
    ' L '
  ], {
    G: 'immersive_aircraft:industrial_gears',
    S: '#bth:mechanical_soul',
    L: 'forbidden_arcanus:aurum_log'
  }).id(`${ID_PREFIX}wooden_cube_sleep`);

  event.shaped('rustic_engineer:clock_key', [
    ' C ',
    ' K ',
    '   '
  ], {
    C: 'minecraft:clock',
    K: 'supplementaries:key'
  }).id(`${ID_PREFIX}clock_key`);
});
