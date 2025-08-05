// priority: 110

/**
 * @file Item Tag Additions for Beyond the Horizon.
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {

  // Beyond the Horizon Tags
  event.add('bth:nuts', [
    'alexscaves:pine_nuts',
    'ecologics:walnut',
  ]);

  event.add('bth:battery', [
    'ae2:dense_energy_cell',
    'ae2:energy_cell',
    'createaddition:modular_accumulator',
    'enderio:advanced_capacitor_bank',
    'enderio:basic_capacitor_bank',
    'enderio:vibrant_capacitor_bank',
    'immersiveengineering:capacitor_hv',
    'immersiveengineering:capacitor_lv',
    'immersiveengineering:capacitor_mv',
    'integrateddynamics:energy_battery',
  ]);

  event.add('bth:candle_material', [
    'eidolon:tallow',
    'forbidden_arcanus:wax',
    'minecraft:honeycomb',
  ]);

  event.add('bth:ingots/steel', [
    'immersiveengineering:ingot_steel',
    'enderio:dark_steel_ingot',
  ]);

  event.add('bth:mechanical_soul', [
    'advancedperipherals:weak_automata_core',
    'ars_elemental:anima_essence',
    'botania:spark',
    'forbidden_arcanus:soul',
    'quark:soul_bead',
  ]);

  event.add('bth:pcb', [
    'create_connected:control_chip',
    'immersiveengineering:circuit_board',
    'pneumaticcraft:printed_circuit_board',
  ]);

  // Minecraft Tags
  event.add('minecraft:slabs', [
    'eidolon:illwood_planks_slab',
  ]);

  event.add('minecraft:wooden_slabs', [
    'eidolon:illwood_planks_slab',
  ]);

  event.add('minecraft:swords', [
    'bth:terminus',
  ]);

  event.add('minecraft:tools', [
    'bth:terminus',
    'bth:coconut_maul',
  ]);

  event.add('minecraft:weapons', [
    'bth:terminus',
    'bth:coconut_maul',
  ]);

  // Create Tags
  event.add('create:chain_rideable', [
    'bth:coconut_maul',
  ]);

  // Forge Tags
  event.add('forge:dough', [
    'minecolonies:bread_dough',
  ]);

  event.add('forge:dough/wheat', [
    'minecolonies:bread_dough',
  ]);
  
  event.add('forge:dusts', [
    'create:cinder_flour',
    'create:wheat_flour',
    'enderio:flour',
  ]);

  event.add('forge:tools', [
    'bth:terminus',
    'bth:coconut_maul',
  ]);

  // Make Alex's Caves the default for raw uranium (fixes ID squeezer recipe)
  event.removeAll('forge:raw_materials/uranium');
  event.add('forge:raw_materials/uranium', 'alexscaves:uranium');

  // Tag Create crushed raw ores as dusts so they can replace IE dusts in recipes.
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) => {
    event.add(`forge:dusts`, `create:crushed_raw_${material}`);
    event.add(`forge:dusts/${material}`, `create:crushed_raw_${material}`);
  });

  event.add('forge:dusts/flour', [
    'create:cinder_flour',
    'create:wheat_flour',
    'enderio:flour',
  ]);
  
  event.add('forge:flour', [
    'create:cinder_flour',
    'enderio:flour',
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('forge:flour/wheat', [
    'enderio:flour',
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('forge:ingots', [
    'alexscaves:azure_neodymium_ingot',
    'alexscaves:scarlet_neodymium_ingot',
    'alexscaves:uranium',
    'botania:gaia_ingot',
    'createdeco:industrial_iron_ingot',
    'enlightened_end:adamantite_ingot',
    'enlightened_end:bismuth_ingot',
    'graveyard:dark_iron_ingot',
    'irons_spellbooks:arcane_ingot',
  ]);

  event.add('forge:ingots/arcane', [
    'irons_spellbooks:arcane_ingot',
  ]); 

  event.add('forge:ingots/arcane_gold', [
    'forbidden_arcanus:deorum_ingot',
  ]); 
  
  event.add('forge:ingots/bismuth', [
    'enlightened_end:bismuth_ingot',
  ]); 

  event.add('forge:ingots/dark_iron', [
    'graveyard:dark_iron_ingot',
  ]); 

  event.add('forge:ingots/gaia_spirit', [
    'botania:gaia_ingot',
  ]); 

  event.add('forge:ingots/industrial_iron', [
    'graveyard:industrial_iron_ingot',
  ]); 

  event.add('forge:ingots/neodymium', [
    'alexscaves:azure_neodymium_ingot',
    'alexscaves:scarlet_neodymium_ingot',
  ]);
  
  event.add('forge:ingots/uranium', [
    'alexscaves:uranium',
  ]);
  
  event.add('forge:nuggets/arcane_gold', [
    'forbidden_arcanus:deorum_nugget',
  ]); 
  
  event.add('forge:ores', [
    'alexscaves:coprolith_coal_ore',
    'alexscaves:guanostone_redstone_ore',
    'alexscaves:radrock_uranium_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/arcane_crystal', [
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/coal', [
    'alexscaves:coprolith_coal_ore',
  ]);

  event.add('forge:ores/redstone', [
    'alexscaves:guanostone_redstone_ore',
  ]);

  event.add('forge:ores/uranium', [
    'alexscaves:radrock_uranium_ore',
  ]);

  event.add('forge:plates', [
    'createdeco:andesite_sheet',
    'createdeco:industrial_iron_sheet',
    'createdeco:netherite_sheet',
    'immersiveengineering:plate_duroplast',
  ]);

  event.add('forge:plates/andesite', [
    'createdeco:andesite_sheet',
  ]);

  event.add('forge:plates/industrial_iron', [
    'createdeco:industrial_iron_sheet',
  ]);

  event.add('forge:plates/netherite', [
    'createdeco:netherite_sheet',
  ]);
  
  event.add('forge:storage_blocks', [
    'graveyard:dark_iron_block',
  ]);

  event.add('forge:storage_blocks/arcane_gold', [
    'forbidden_arcanus:deorum_block',
  ]);

  event.add('forge:storage_blocks/dark_iron', [
    'graveyard:dark_iron_block',
  ]);

  event.add('forge:raw_fishes', [
    'alexscaves:lanternfish',
    'alexscaves:tripodfish',
    'alexsmobs:catfish_slice',
    'alexsmobs:raw_catfish_slice',
    'alexsmobs:flying_fish',
    'aquamirae:spinefish',
    'rats:ratfish',
  ]);

  // Ars Elemental Tags
  event.add('ars_elemental:caster_bag_item', [
    'aether:cloud_staff',
    
    'alexscaves:sea_staff',
    
    '#botania:rods',
    
    'eidolon:bonechill_wand',
    'eidolon:soulfire_wand',
    'eidolon:warlock_hat',
    'eidolon:warlock_cloak',
    'eidolon:warlock_boots',
    
    'irons_spellbooks:artificer_cane',
    'irons_spellbooks:blood_staff',
    'irons_spellbooks:graybeard_staff',
    'irons_spellbooks:hither_thither_wand',
    'irons_spellbooks:ice_staff',
    'irons_spellbooks:scroll',
    /irons_spellbooks:.*_spell_book$/,
    /irons_spellbooks:.*_helmet$/,
    /irons_spellbooks:.*_chestplate$/,
    /irons_spellbooks:.*_leggings$/,
    /irons_spellbooks:.*_boots$/,
  ]);
  
  // Ars Nouveau Tags
  event.add('ars_nouveau:golem/shard', [
    'eidolon:sulfur',
    'galosphere:allurite_shard',
    'galosphere:lumiere_shard',
    'galosphere:pink_salt_shard',
    'quark:red_corundum_cluster',
    'quark:orange_corundum_cluster',
    'quark:yellow_corundum_cluster',
    'quark:green_corundum_cluster',
    'quark:blue_corundum_cluster',
    'quark:indigo_corundum_cluster',
    'quark:violet_corundum_cluster',
    'quark:white_corundum_cluster',
    'quark:black_corundum_cluster',
  ]);

  // Lightman's currency tags
  event.add('lightmanscurrency:coins', [
    'rats:tiny_coin',
  ]);

  // Supplementaries Tags
  event.add('supplementaries:throwable_bricks', [
    'alexscaves:cinder_brick',
  ]);

  // Fix Aether stripped logs for Create casing
  event.add('forge:stripped_logs', [
    'aether:stripped_skyroot_log',
    'deep_aether:stripped_conberry_log',
    'deep_aether:stripped_cruderoot_log',
    'deep_aether:stripped_roseroot_log',
    'deep_aether:stripped_sunroot_log',
    'deep_aether:stripped_yagroot_log',
  ]);
  event.add('forge:stripped_wood', [
    'aether:stripped_skyroot_wood',
    'deep_aether:stripped_conberry_wood',
    'deep_aether:stripped_cruderoot_wood',
    'deep_aether:stripped_roseroot_wood',
    'deep_aether:stripped_sunroot_wood',
    'deep_aether:stripped_yagroot_wood',
  ]);

  // Clear block and item tags from plushies ('wool' tag for example)
  event.removeAllTagsFrom(/^perfectplushies:*/);
  event.removeAllTagsFrom(/^plushies:*/);
  event.removeAllTagsFrom(/^plushie_buddies:*/);
});
