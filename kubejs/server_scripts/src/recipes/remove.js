// priority: 100

/**
 * @file Recipe removals for Beyond the Horizon.
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {

  // Remove recipes for all bedrolls.
  COLORS.forEach((color) => event.remove({id: `upgrade_aquatic:${color}_bedroll`}));

  // Remove all Waystones recipes
  event.remove({mod: `ftbquests`});

  // Remove all Rustic Engineer recipes, we add our own for a subset of the items
  event.remove({mod: `rustic_engineer`});

  // Remove all Waystones recipes
  event.remove({mod: `waystones`});

  // Remove recipes by recipe ID:
  [
    'minecraft:bread',
    'minecraft:copper_ingot_from_waxed_copper_block',
    'minecraft:dispenser',
    'minecraft:dropper',
    'minecraft:lever',
    'minecraft:observer',
    'minecraft:piston',
    'advancedperipherals:chunk_controller',
    'aether:aether_saddle',
    'aether:swet_lead',
    'alexscaves:gunpowder_from_sulfur',
    'ars_nouveau:drygmy_charm',
    'ars_nouveau:whirlisprig_charm',
    'botania:pure_daisy/sand',
    'buildinggadgets2:gadget_building',
    'buildinggadgets2:gadget_exchanging',
    'buildinggadgets2:gadget_copy_paste',
    'buildinggadgets2:gadget_cut_paste',
    'buildinggadgets2:gadget_destruction',
    'buzzier_bees:honey/honey_apple',
    'chunkloaders:single_chunk_loader',
    'chunkloaders:single_to_basic_chunk_loader',
    'chunkloaders:basic_chunk_loader',
    'chunkloaders:advanced_chunk_loader',
    'chunkloaders:ultimate_chunk_loader',
    /clayworks:.*terracotta_brick.*/,
    'create:blasting/ingot_lead_compat_immersiveengineering',
    'create:blasting/ingot_silver_compat_immersiveengineering',
    'create:blasting/ingot_uranium_compat_immersiveengineering',
    'create:crushing/raw_uranium_block',
    'create:crushing/raw_uranium_ore',
    'create:crushing/uranium_ore',
    'create:industrial_iron_block_from_ingots_iron_stonecutting',
    'create:smelting/bread',
    'create:smelting/ingot_lead_compat_immersiveengineering',
    'create:smelting/ingot_silver_compat_immersiveengineering',
    'create:smelting/ingot_uranium_compat_immersiveengineering',
    'create:smoking/bread',
    'createdeco:pressing/coins/brass_coin',
    'createdeco:pressing/coins/copper_coin',
    'createdeco:pressing/coins/gold_coin',
    'createdeco:pressing/coins/industrial_iron_coin',
    'createdeco:pressing/coins/iron_coin',
    'createdeco:pressing/coins/netherite_coin',
    'createdeco:pressing/coins/zinc_coin',
    'createdeco:pressing/zinc_sheet',
    'computercraft:computer_normal',
    'computercraft:computer_advanced',
    'computercraft:pocket_computer_normal',
    'computercraft:pocket_computer_advanced',
    'eidolon:raven_feather_arrows',
    'eidolon:smelt_lead_dust_create',
    'eidolon:smelt_silver_dust',
    'galosphere:raw_silver',
    'galosphere:raw_block',
    'galosphere:silver_block',
    'galosphere:silver_ingot',
    'galosphere:silver_ingot_from_blasting_deepslate_silver_ore',
    'galosphere:silver_ingot_from_blasting_raw_silver',
    'galosphere:silver_ingot_from_blasting_silver_ore',
    'galosphere:silver_ingot_from_nuggets',
    'galosphere:silver_ingot_from_smelting_deepslate_silver_ore',
    'galosphere:silver_ingot_from_smelting_raw_silver',
    'galosphere:silver_ingot_from_smelting_silver_ore',
    'galosphere:silver_nugget',
    'hyperbox:hyperbox',
    /incubation:fried_egg.*/,
    'integrateddynamics:blasting/menril_log_coal',
    'integrateddynamics:blasting/menril_log_filled_coal',
    'integrateddynamics:smelting/menril_log_coal',
    'integrateddynamics:smelting/menril_log_filled_coal',
    'immersive_aircraft:hull',
    'immersive_aircraft:hull_reinforcement',
    'immersive_aircraft:propeller',
    'immersive_aircraft:quadrocopter',
    /immersiveengineering:arcfurnace\/.*uranium.*/,
    'immersiveengineering:crafting/hammercrushing_uranium',
    'immersiveengineering:crafting/ingot_electrum_to_nugget_electrum',
    'immersiveengineering:crafting/ingot_lead_to_nugget_lead',
    'immersiveengineering:crafting/ingot_silver_to_nugget_silver',
    'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
    'immersiveengineering:crafting/ingot_lead_to_storage_lead',
    'immersiveengineering:crafting/ingot_silver_to_storage_silver',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'immersiveengineering:crafting/nugget_electrum_to_ingot_electrum',
    'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/raw_block_lead_to_raw_lead',
    'immersiveengineering:crafting/raw_block_silver_to_raw_silver',
    'immersiveengineering:crafting/raw_block_uranium_to_raw_uranium',
    'immersiveengineering:crafting/raw_hammercrushing_uranium',
    'immersiveengineering:crafting/raw_lead_to_raw_block_lead',
    'immersiveengineering:crafting/raw_silver_to_raw_block_silver',
    'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium',
    'immersiveengineering:crafting/stick_aluminum',
    'immersiveengineering:crafting/stick_iron',
    'immersiveengineering:crafting/stick_steel',
    'immersiveengineering:crafting/storage_lead_to_ingot_lead',
    'immersiveengineering:crafting/storage_silver_to_ingot_silver',
    'immersiveengineering:crafting/storage_uranium_from_slab',
    'immersiveengineering:crafting/storage_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/storage_uranium_to_slab',
    'immersiveengineering:crusher/nether_wart',
    /immersiveengineering:crusher\/.*uranium.*/,
    /immersiveengineering:recycling\/.*uranium.*/,
    'immersiveengineering:smelting/ingot_iron_from_dust',
    'immersiveengineering:smelting/ingot_lead_from_dust_from_blasting',
    'immersiveengineering:smelting/ingot_silver',
    'immersiveengineering:smelting/ingot_silver2',
    'immersiveengineering:smelting/ingot_silver3',
    'immersiveengineering:smelting/ingot_silver_from_blasting',
    'immersiveengineering:smelting/ingot_silver_from_blasting2',
    'immersiveengineering:smelting/ingot_silver_from_blasting3',
    'immersiveengineering:smelting/ingot_silver_from_dust',
    'immersiveengineering:smelting/ingot_silver_from_dust_from_blasting',
    'immersiveengineering:smelting/ingot_uranium_from_blasting3',
    'immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting',
    'immersiveengineering:smelting/ingot_uranium_from_dust',
    'immersiveengineering:smelting/ingot_uranium3',
    'lightmanscurrency:atm_swap',
    'lightmanscurrency:terminal_swap',
    'minecolonies:baked_bread',
    'minecolonies:baked_bread_campfire_cooking', 
    'minecolonies:baked_bread_smoking',
    'modularrouters:void_module',
    'moreminecarts:chunk_loader',
    'moreminecarts:chunkrodite',
    'moreminecarts:chunkrodite_from_block',
    'moreminecarts:minecart_with_chunk_loader',
    'neapolitan:milk_bottle',
    'nethersdelight:blackstone_furnace',
    'paraglider:paraglider',
    'pneumaticcraft:chunkloader_upgrade',
    'pneumaticcraft:copper_ingot_from_nugget',
    'pneumaticcraft:programmable_controller',
    'pneumaticcraft:speed_upgrade',
    'pneumaticcraft:speed_upgrade_from_glycerol',
    'powah:energizing/uranium_to_uraninite',
    'powah:energizing/uraninite_from_ore',
    'powah:energizing/uraninite_from_ore_dense',
    'powah:energizing/uraninite_from_ore_poor',
    'powah:energizing/uraninite_from_raw',
    'powah:smelting/uraninite_from_raw',
    'powah:smelting/uraninite_from_raw_blasting',
    /quark:.*shingles.*/,
    'quark:tweaks/crafting/utility/bent/bread',
    'quark:tweaks/smelting/bone_meal_utility',
    'rats:upgrades/aristocrat_upgrade',
    'sophisticatedbackpacks:void_upgrade',
    'storagedrawers:void_upgrade',
    'supplementaries:soap_clean_upgrade_aquatic_bedroll',
    'v_slab_compat:immersiveengineering/storage_uranium',
    'v_slab_compat:immersiveengineering/storage_uranium_stonecutter',
    /wardrobe:.*backpack/,
    /woodworks:.*ladder$/,
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove IE dusts that are replaced by Create crushed ores
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) =>
    event.remove({id: `immersiveengineering:dust_${material}`})
  );

  // Remove ladders from Woodworks sawmill so we can add the ones from BBB
  VANILLA_WOOD_LOG_TYPES.forEach((type) => {
    event.remove({id: `woodworks:${type}_ladder_from_${type}_logs_sawing`});
    event.remove({id: `woodworks:${type}_ladder_from_${type}_planks_sawing`});
  });
  VANILLA_WOOD_STEM_TYPES.forEach((type) => {
    event.remove({id: `woodworks:${type}_ladder_from_${type}_stems_sawing`});
    event.remove({id: `woodworks:${type}_ladder_from_${type}_planks_sawing`});
  });
});
