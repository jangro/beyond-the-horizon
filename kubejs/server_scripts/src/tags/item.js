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

  event.add('bth:mechanical_soul', [
    'advancedperipherals:weak_automata_core',
    'ars_elememental:anima_essence',
    'botania:spark',
  ]);

  event.add('bth:pcb', [
    'immersiveengineering:circuit_board',
    'pneumaticcraft:printed_circuit_board',
  ]);

  // Minecraft Tags
  // (none yet)

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
  ]);
  
  // Tag Create crushed raw ores as dusts so they can replace IE dusts in recipes.
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) => {
    event.add(`forge:dusts`, `create:crushed_raw_${material}`);
    event.add(`forge:dusts/${material}`, `create:crushed_raw_${material}`);
  });

  event.add('forge:dusts/flour', [
    'create:cinder_flour',
    'create:wheat_flour',
  ]);
  
  event.add('forge:flour', [
    'create:cinder_flour',
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('forge:flour/wheat', [
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

});
