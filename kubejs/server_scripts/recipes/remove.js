// priority: 100

/**
 * @file Recipe removals for Beyond the Horizon.
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {

  // Remove recipes for all sleeping bags & bedrolls.
  COLORS.forEach((color) => event.remove({id: `upgrade_aquatic:${color}_bedroll`}));
  COLORS.forEach((color) => event.remove({id: `valhelsia_structures:${color}_sleeping_bag`}));

  // Remove all Waystones recipes
  event.remove({mod: `waystones`});

  // Remove all Rustic Engineer recipes, we add our own for a subset of the items
  event.remove({mod: `rustic_engineer`});

  // Remove recipes by recipe ID:
  [
    'minecraft:bread',
    'aether:aether_saddle',
    'ars_nouveau:drygmy_charm',
    'ars_nouveau:whirlisprig_charm',
    'buzzier_bees:honey/honey_apple',
    /clayworks:.*terracotta_brick.*/,
    'create:blasting/ingot_uranium_compat_immersiveengineering',
    'create:crushing/raw_uranium_block',
    'create:crushing/raw_uranium_ore',
    'create:crushing/uranium_ore',
    'create:smelting/bread',
    'create:smelting/ingot_uranium_compat_immersiveengineering',
    'create:smoking/bread',
    'eidolon:raven_feather_arrows',
    'everycomp:abnww/enlightened_end/indigo_boards_from_indigo_logs_sawing',
    /incubation:fried_egg.*/,
    'immersive_aircraft:hull',
    'immersive_aircraft:hull_reinforcement',
    'immersive_aircraft:propeller',
    'immersiveengineering:crafting/hammercrushing_uranium',
    'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/raw_block_uranium_to_raw_uranium',
    'immersiveengineering:crafting/raw_hammercrushing_uranium',
    'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium',
    'immersiveengineering:crafting/storage_uranium_from_slab',
    'immersiveengineering:crafting/storage_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/storage_uranium_to_slab',
    'immersiveengineering:smelting/ingot_uranium_from_blasting3',
    'immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting',
    'immersiveengineering:smelting/ingot_uranium_from_dust',
    'immersiveengineering:smelting/ingot_uranium3',
    /immersiveengineering:arcfurnace\/.*uranium.*/,
    /immersiveengineering:crafting\/stick.*/,
    /immersiveengineering:crusher\/.*uranium.*/,
    /immersiveengineering:recycling\/.*uranium.*/,
    'minecolonies:baked_bread',
    'minecolonies:baked_bread_campfire_cooking', 
    'minecolonies:baked_bread_smoking',
    'neapolitan:milk_bottle',
    'paraglider:paraglider',
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
    'rats:upgrades/aristocrat_upgrade',
    'supplementaries:soap_clean_upgrade_aquatic_bedroll',
    'supplementaries:soap_clean_valhelsia_structures_sleeping_bag',
    'v_slab_compat:immersiveengineering/storage_uranium',
    'v_slab_compat:immersiveengineering/storage_uranium_stonecutter',
    /wardrobe:.*backpack/,
    /woodworks:.*ladder$/,
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove IE dusts that are replaced by Create crushed ores
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver'].forEach((material) =>
    event.remove({id: `immersiveengineering:dust_${material}`})
  );

});
