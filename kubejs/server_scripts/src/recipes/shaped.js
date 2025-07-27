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
  event.shaped('bth:coconut_maul', [
    ' HC',
    ' SH',
    'R  '
  ], {
    H: '#forge:fiber_hemp',
    C: 'ecologics:coconut_slice',
    S: 'ecologics:coconut_seedling',
    R: '#forge:rods/wooden'
  }).id(`${ID_PREFIX}coconut_maul`);

  event.shaped('bth:spectre_snare', [
    'NNN',
    ' E ',
    'NNN'
  ], {
    E: 'minecraft:ender_pearl',
    N: '#forge:nuggets/iron'
  }).id(`${ID_PREFIX}spectre_snare`);

  event.shaped('bth:terminus', [
    ' D ',
    'SGR',
    'WN '
  ], {
    W: 'irons_spellbooks:weapon_parts',
    S: 'deep_aether:stratus_sword',
    N: 'minecraft:netherite_sword',
    D: 'forbidden_arcanus:draco_arcanus_sword',
    R: 'rats:ratlantis_sword',
    G: 'botania:gaia_ingot'
  }).id(`${ID_PREFIX}terminus`);

  event.shaped(Item.of('eccentrictome:tome', ECCENTRIC_TOME_NBT), [
    ' S ',
    'SBS',
    ' S '
  ], {
    S: '#forge:bookshelves',
    B: 'minecraft:book'
  }).id(`${ID_PREFIX}filled_eccentric_tome`);

  event.shaped('3x bth:nanobot_soda_bottle_empty', [
    '   ',
    'GSG',
    ' G '
  ], {
    G: 'enlightened_end:iridescent_bismuth_glass',
    S: 'botania:corporea_spark_master'
  }).id(`${ID_PREFIX}nanobot_soda_bottle_empty`);

  event.shaped('minecolonies:gate_wood', [
    ' X ',
    'XXX',
    ' X '
  ], {
    X: '#minecraft:logs'
  }).id(`${ID_PREFIX}minecolonies/gate_wood`);

  event.shaped('minecolonies:gate_iron', [
    ' X ',
    'XXX',
    ' X '
  ], {
    X: 'createdeco:industrial_iron_nugget'
  }).id(`${ID_PREFIX}minecolonies/gate_iron`);

  // Minecraft
  COLORS.forEach((color) => {
    if (color !== 'white') {
      event.shaped(`8x minecraft:${color}_wool`, [
        'WWW',
        'WDW',
        'WWW'
      ], {
        W: 'minecraft:white_wool',
        D: `#forge:dyes/${color}`
      }).id(`${ID_PREFIX}cheaper_${color}_wool`);
    }
  });

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

  event.shaped('minecraft:ladder', [
    'S S',
    'SSS',
    'S S'
  ], {
    S: '#forge:rods/wooden',
  }).id(`${ID_PREFIX}ladder`);

  event.shaped('minecraft:saddle', [
    'LLL',
    'SLS',
    'I I'
  ], {
    S: '#forge:string',
    L: '#forge:leather',
    I: '#forge:ingots/iron'
  }).id(`${ID_PREFIX}saddle`);

  // AE2
  event.shaped('6x ae2:fluix_covered_cable', [
    'FFF',
    ' W ',
    'FFF'
  ], {
    F: 'ae2:fluix_glass_cable',
    W: '#minecraft:wool',
  }).id(`${ID_PREFIX}fluix_covered_cable`);

  event.shaped('6x ae2:fluix_smart_cable', [
    'FFF',
    'GWR',
    'FFF'
  ], {
    F: 'ae2:fluix_glass_cable',
    W: '#minecraft:wool',
    G: 'minecraft:glowstone_dust',
    R: 'minecraft:redstone'
  }).id(`${ID_PREFIX}fluix_smart_cable`);

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

  // Building Gadgets
  event.shaped('buildinggadgets2:gadget_building', [
    'IRI',
    'SPS',
    'IBI'
  ], {
    S: 'minecraft:dispenser',
    R: 'minecraft:redstone',
    I: 'minecraft:iron_ingot',
    P: '#bth:pcb',
    B: '#bth:battery',
  }).id(`${ID_PREFIX}gadget_building`);

  event.shaped('buildinggadgets2:gadget_exchanging', [
    'IRI',
    'SPS',
    'IBI'
  ], {
    S: 'minecraft:ender_pearl',
    R: 'minecraft:redstone',
    I: 'minecraft:iron_ingot',
    P: '#bth:pcb',
    B: '#bth:battery',
  }).id(`${ID_PREFIX}gadget_exchanging`);

  event.shaped('buildinggadgets2:gadget_copy_paste', [
    'IRI',
    'SPT',
    'IBI'
  ], {
    S: 'minecraft:ender_eye',
    T: 'create:super_glue',
    R: 'minecraft:redstone',
    I: 'minecraft:iron_ingot',
    P: '#bth:pcb',
    B: '#bth:battery',
  }).id(`${ID_PREFIX}gadget_copy_paste`);

  event.shaped('buildinggadgets2:gadget_cut_paste', [
    'IRI',
    'SPT',
    'IBI'
  ], {
    S: 'ars_nouveau:void_prism',
    T: 'create:super_glue',
    R: 'minecraft:redstone',
    I: 'minecraft:iron_ingot',
    P: '#bth:pcb',
    B: '#bth:battery',
  }).id(`${ID_PREFIX}gadget_cut_paste`);

  event.shaped('buildinggadgets2:gadget_destruction', [
    'IRI',
    'SPS',
    'IBI'
  ], {
    S: 'ars_nouveau:void_prism',
    R: 'minecraft:redstone',
    I: 'minecraft:iron_ingot',
    P: '#bth:pcb',
    B: '#bth:battery',
  }).id(`${ID_PREFIX}gadget_destruction`);


  // Chunkloaders
  event.shaped('chunkloaders:single_chunk_loader', [
    ' P ',
    'IBI',
    'ICI'
  ], {
    C: 'minecraft:crying_obsidian',
    P: '#bth:pcb',
    B: '#bth:battery',
    I: 'forbidden_arcanus:obsidian_ingot'
  }).id(`${ID_PREFIX}single_chunk_loader`);

  event.shaped('chunkloaders:basic_chunk_loader', [
    'CDC',
    'DGD',
    'CDC'
  ], {
    D: 'eidolon:pewter_ingot',
    G: 'create:super_glue',
    C: 'chunkloaders:single_chunk_loader',
  }).id(`${ID_PREFIX}basic_chunk_loader`);

  event.shaped('chunkloaders:advanced_chunk_loader', [
    'QCQ',
    'QGQ',
    'QCQ'
  ], {
    Q: 'minecraft:quartz',
    G: 'create:super_glue',
    C: 'chunkloaders:basic_chunk_loader',
  }).id(`${ID_PREFIX}advanced_chunk_loader`);

  event.shaped('chunkloaders:ultimate_chunk_loader', [
    'EEE',
    'CGC',
    'EEE'
  ], {
    G: 'create:super_glue',
    C: 'chunkloaders:advanced_chunk_loader',
    E: 'quark:myalite_crystal',
  }).id(`${ID_PREFIX}ultimate_chunk_loader`);

  // Computer Craft / Advanced Peripherals
  event.shaped('computercraft:computer_normal', [
    'SSS',
    'CPC',
    'CGC'
  ], {
    S: 'create:iron_sheet',
    C: 'pneumaticcraft:plastic',
    P: '#bth:pcb',
    G: '#forge:glass_panes',
  }).id(`${ID_PREFIX}computer_normal`);

  event.shaped('computercraft:pocket_computer_normal', [
    'SBS',
    'CPC',
    'CGC'
  ], {
    S: 'create:iron_sheet',
    B: '#bth:battery',
    C: 'pneumaticcraft:plastic',
    P: '#bth:pcb',
    G: '#forge:glass_panes',
  }).id(`${ID_PREFIX}pocket_computer_normal`);

  event.shaped('computercraft:computer_advanced', [
    'SSS',
    'CPC',
    'CGC'
  ], {
    S: 'createaddition:electrum_sheet',
    C: 'pneumaticcraft:plastic',
    P: '#bth:pcb',
    G: '#forge:glass_panes',
  }).id(`${ID_PREFIX}computer_advanced`);

  event.shaped('computercraft:computer_advanced', [
    ' S ',
    'SCS',
    ' S '
  ], {
    S: 'createaddition:electrum_sheet',
    C: 'computercraft:computer_normal',
  }).id(`${ID_PREFIX}computer_advanced_upgrade`);

  event.shaped('computercraft:pocket_computer_advanced', [
    'SBS',
    'CPC',
    'CGC'
  ], {
    S: 'createaddition:electrum_sheet',
    B: '#bth:battery',
    C: 'pneumaticcraft:plastic',
    P: '#bth:pcb',
    G: '#forge:glass_panes',
  }).id(`${ID_PREFIX}pocket_computer_advanced`);

  event.shaped('computercraft:pocket_computer_advanced', [
    ' S ',
    'SCS',
    ' S '
  ], {
    S: 'createaddition:electrum_sheet',
    C: 'computercraft:pocket_computer_normal',
  }).id(`${ID_PREFIX}pocket_computer_advanced_upgrade`);

  event.shaped('computercraft:speaker', [
    ' S ',
    'SNS',
    ' R '
  ], {
    S: 'create:iron_sheet',
    N: 'minecraft:note_block',
    R: 'minecraft:redstone',
  }).id(`${ID_PREFIX}computercraft_speaker`);

  event.shaped('computercraft:printer', [
    ' S ',
    'SNS',
    ' P '
  ], {
    S: 'create:iron_sheet',
    N: 'minecraft:note_block',
    P: 'minecraft:paper',
  }).id(`${ID_PREFIX}computercraft_printer`);

  event.shaped('computercraft:disk_drive', [
    ' S ',
    'SRS',
    ' R '
  ], {
    S: 'create:iron_sheet',
    R: 'minecraft:redstone',
  }).id(`${ID_PREFIX}computercraft_disk_drive`);

  event.shaped('computercraft:wired_modem', [
    ' S ',
    'SRS',
    ' S '
  ], {
    S: 'create:iron_sheet',
    R: 'minecraft:redstone',
  }).id(`${ID_PREFIX}wired_modem`);

  event.shaped('computercraft:wireless_modem_normal', [
    ' S ',
    'SES',
    ' S '
  ], {
    S: 'create:iron_sheet',
    E: 'minecraft:ender_pearl',
  }).id(`${ID_PREFIX}wireless_modem_normal`);

  event.shaped('computercraft:wireless_modem_advanced', [
    ' S ',
    'SES',
    ' S '
  ], {
    S: 'createaddition:electrum_sheet',
    E: 'minecraft:ender_eye',
  }).id(`${ID_PREFIX}wireless_modem_advanced`);

  event.shaped('computercraft:cable', [
    '   ',
    'SRS',
    '   '
  ], {
    S: 'create:copper_sheet',
    R: 'minecraft:redstone',
  }).id(`${ID_PREFIX}computercraft_cable`);

  event.shaped('computercraft:monitor_normal', [
    'SPS',
    'PGP',
    'SPS'
  ], {
    S: 'create:iron_sheet',
    P: 'pneumaticcraft:plastic',
    G: '#forge:glass_panes',
  }).id(`${ID_PREFIX}monitor_normal`);

  event.shaped('computercraft:monitor_advanced', [
    'SPS',
    'PGP',
    'SPS'
  ], {
    S: 'createaddition:electrum_sheet',
    P: 'pneumaticcraft:plastic',
    G: '#forge:glass_panes',
  }).id(`${ID_PREFIX}monitor_advanced`);

  event.shaped('advancedperipherals:chunk_controller', [
    'IRI',
    'RCR',
    'IRI'
  ], {
    C: 'chunkloaders:single_chunk_loader',
    I: 'minecraft:iron_ingot',
    R: 'minecraft:redstone',
  }).id(`${ID_PREFIX}chunk_controller`);

  // Create
  event.shaped('8x create:dough', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    F: '#forge:flour/wheat',
    B: '#forge:buckets/water',
  }).id(`${ID_PREFIX}create_dough`);

  // Create Crafts & Additions
  event.shaped('2x createaddition:brass_rod', [
    'I',
    'I'
  ], {
    I: '#forge:ingots/brass',
  }).id(`${ID_PREFIX}createaddition_brass_rod`);

  event.shaped('2x createaddition:copper_rod', [
    'I',
    'I'
  ], {
    I: '#forge:ingots/copper',
  }).id(`${ID_PREFIX}createaddition_copper_rod`);

  event.shaped('2x createaddition:electrum_rod', [
    'I',
    'I'
  ], {
    I: '#forge:ingots/electrum',
  }).id(`${ID_PREFIX}createaddition_electrum_rod`);

  event.shaped('2x createaddition:gold_rod', [
    'I',
    'I'
  ], {
    I: '#forge:ingots/gold',
  }).id(`${ID_PREFIX}createaddition_gold_rod`);

  // Hostile Neural Networks
  event.shaped('hostilenetworks:deep_learner', [
    'ORO',
    'RGR',
    'OPO'
  ], {
    O: '#forge:obsidian',
    R: 'minecraft:repeater',
    G: '#forge:glass_panes',
    P: '#bth:pcb'
  }).id(`${ID_PREFIX}deep_learner`);

  event.shaped('hostilenetworks:sim_chamber', [
    'PGP',
    'EOE',
    'LCL'
  ], {
    O: '#forge:obsidian',
    E: 'minecraft:ender_pearl',
    C: 'minecraft:comparator',
    L: 'minecraft:lapis_lazuli',
    G: '#forge:glass_panes',
    P: '#bth:pcb'
  }).id(`${ID_PREFIX}sim_chamber`);

  // Hyperbox
  event.shaped('hyperbox:hyperbox', [
    'OPO',
    'ESE',
    'OPO'
  ], {
    S: 'ae2:spatial_cell_component_16',
    P: 'ae2:spatial_pylon',
    O: '#forge:obsidian',
    E: 'minecraft:ender_eye'
  }).id(`${ID_PREFIX}hyperbox`);

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

  event.shaped('immersive_aircraft:quadrocopter', [
    'PBP',
    'BEB',
    'PHP'
  ], {
    P: 'create:propeller',
    B: 'minecraft:bamboo',
    E: 'immersive_aircraft:engine',
    H: 'immersive_aircraft:hull'
  }).id(`${ID_PREFIX}immersive_aircraft_quadrocopter`);

  // Immersive Machinery
  event.shaped('immersive_machinery:bamboo_bee', [
    'PBP',
    'BRB',
    'P P'
  ], {
    P: 'create:propeller',
    B: 'minecraft:bamboo',
    R: 'immersive_machinery:redstone_mechanism'
  }).id(`${ID_PREFIX}immersive_machinery_bamboo_bee`);

  event.shaped('immersive_machinery:redstone_sheep', [
    '   ',
    'CER',
    'OPO'
  ], {
    C: 'minecraft:copper_ingot',
    E: 'immersive_aircraft:engine',
    R: 'immersive_machinery:redstone_mechanism',
    O: 'minecraft:observer',
    P: 'create:propeller'
  }).id(`${ID_PREFIX}immersive_machinery_redstone_sheep`);

  // EnderIO
  event.shaped('8x enderio:energy_conduit', [
    'BBB',
    'NNN',
    'BBB'
  ], {
    B: 'enderio:conduit_binder',
    N: '#forge:nuggets/conductive_alloy'
  }).id(`${ID_PREFIX}enderio_energy_conduit`);


  event.shaped('8x enderio:redstone_conduit', [
    'BBB',
    'NNN',
    'BBB'
  ], {
    B: 'enderio:conduit_binder',
    N: '#forge:nuggets/redstone_alloy'
  }).id(`${ID_PREFIX}enderio_redstone_conduit`);

  // Immersive Engineering
  event.shaped('2x immersiveengineering:stick_aluminum', [
    'I',
    'I'
  ], {
    I: '#forge:ingots/aluminum',
  }).id(`${ID_PREFIX}immersiveengineering_stick_aluminum`);

  event.shaped('2x immersiveengineering:stick_iron', [
    'I',
    'I'
  ], {
    I: '#forge:ingots/iron',
  }).id(`${ID_PREFIX}immersiveengineering_stick_iron`);

  event.shaped('2x immersiveengineering:stick_steel', [
    'I',
    'I'
  ], {
    I: '#bth:ingots/steel',
  }).id(`${ID_PREFIX}immersiveengineering_stick_steel`);

  // Iron's Spellbooks
  event.shaped('8x irons_spellbooks:cinder_essence', [
    'AAA',
    'AFA',
    'AAA'
  ], {
    A: 'irons_spellbooks:arcane_essence',
    F: 'ars_nouveau:fire_essence'
  }).id(`${ID_PREFIX}cinder_essence_from_fire_essence`);

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
  event.shaped('pneumaticcraft:chunkloader_upgrade', [
    'LRL',
    'RCR',
    'LRL'
  ], {
    C: 'chunkloaders:single_chunk_loader',
    R: 'minecraft:redstone',
    L: '#pneumaticcraft:upgrade_components',
  }).id(`${ID_PREFIX}chunkloader_upgrade`);

  event.shaped('pneumaticcraft:omnidirectional_hopper', [
    'CLC',
    'CLC',
    ' C '
  ], {
    C: '#forge:ingots/compressed_iron',
    L: '#minecraft:logs',
  }).id(`${ID_PREFIX}omnidirectional_hopper_easy`);

  event.shaped('pneumaticcraft:programmable_controller', [
    'CRC',
    'PDT',
    'INI'
  ], {
    C: 'chunkloaders:single_chunk_loader',
    R: 'pneumaticcraft:remote',
    P: 'pneumaticcraft:printed_circuit_board',
    D: 'pneumaticcraft:drone',
    T: 'pneumaticcraft:advanced_pressure_tube',
    I: 'pneumaticcraft:ingot_iron_compressed',
    N: 'pneumaticcraft:network_registry',
  }).id(`${ID_PREFIX}programmable_controller`);

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

  // Redstone Pen
  event.shaped('redstonepen:control_box', [
    ' R ',
    'EPL',
    ' G '
  ], {
    P: '#bth:pcb',
    R: 'minecraft:redstone',
    L: 'minecraft:lapis_lazuli',
    G: 'minecraft:gold_ingot',
    E: 'minecraft:emerald',
  }).id(`${ID_PREFIX}control_box_recipe`);

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

  event.shaped('sophisticatedbackpacks:void_upgrade', [
    ' P ',
    ' U ',
    'RVR'
  ], {
    P: 'minecraft:ender_pearl',
    V: 'ars_nouveau:void_prism',
    R: 'minecraft:redstone',
    U: 'sophisticatedbackpacks:upgrade_base'
  }).id(`${ID_PREFIX}sophisticatedbackpacks/void_upgrade`);

  event.shaped('supplementaries:quiver', [
    'LS ',
    'LS ',
    'LS '
  ], {
    L: '#forge:leather',
    S: '#forge:string'
  }).id(`${ID_PREFIX}quiver`);

  event.shaped('4x minecraft:ladder', [
    'S S',
    'SPS',
    'S S'
  ], {
    S: 'minecraft:stick',
    P: 'minecraft:oak_planks'
  }).id(`${ID_PREFIX}vanilla_ladder`);

});
