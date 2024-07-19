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
    'ecologics:walnut',
    'alexscaves:pine_nuts',
  ]);

  event.add('bth:mechanical_soul', [
    'botania:spark',
    'ars_elememental:anima_essence',
    'advancedperipherals:weak_automata_core',
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
    event.add(`forge:dusts/`, `create:crushed_raw_${material}`);
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

  // Remove tags from IE ingots so our options get picked instead.
  // [Vaelzan]: This is probably not the best way to handle this as it prevents them being used
  //            as inputs in recipes too (in case a player somehow obtains some).
  event.get('forge:ingots/lead').remove('immersiveengineering:ingot_lead');
  event.get('forge:ingots/silver').remove('immersiveengineering:ingot_silver');
  event.get('forge:ingots/uranium').remove('immersiveengineering:ingot_uranium');

  event.add('forge:ingots', [
    'alexscaves:uranium',
  ]);

  event.add('forge:ingots/arcane_gold', [
    'forbidden_arcanus:deorum_ingot',
  ]); 
  
  event.add('forge:nuggets/arcane_gold', [
    'forbidden_arcanus:deorum_nugget',
  ]); 
  
  event.add('forge:ingots/uranium', [
    'alexscaves:uranium',
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
  
  // Remove tags from IE ores so our options get picked instead.
  // [Vaelzan]: This is probably not the best way to handle this as it prevents them being used
  //            as inputs in recipes too (in case a player somehow obtains some).
  event.get('forge:raw_materials/lead').remove('immersiveengineering:raw_lead');
  event.get('forge:raw_materials/silver').remove('immersiveengineering:raw_silver');
  event.get('forge:raw_materials/uranium').remove('immersiveengineering:raw_uranium');

  event.add('forge:storage_blocks/arcane_gold', [
    'forbidden_arcanus:deorum_block',
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
