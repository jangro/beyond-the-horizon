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

  // Forbidden and Arcanus Tags
  event.add('forbidden_arcanus:modifier/eternal_incompatible', [
    'tiered:armorers_hammer',
    'tiered:toolsmiths_hammer',
    'tiered:weaponsmiths_hammer',
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

  //
  // Add missing tags for Reforged (Tiered)
  //

  // Fix tags for Alex's Caves items
  event.add('forge:armors/helmets', event.get('forge:armor/helmets').getObjectIds());
  event.add('forge:armors/chestplates', event.get('forge:armor/chestplates').getObjectIds());
  event.add('forge:armors/leggings', event.get('forge:armor/leggings').getObjectIds());
  event.add('forge:armors/boots', event.get('forge:armor/boots').getObjectIds());

  // Fix tags for all simply swords items
  event.add('forge:tools/swords', event.get('simplyswords:swords').getObjectIds());
  event.add('minecraft:swords', event.get('simplyswords:swords').getObjectIds());

  //
  // Tools and weapons
  //

  // Axes
  const axes = [
    'eidolon:silver_axe',
    'forbidden_arcanus:draco_arcanus_axe',
    'forbidden_arcanus:reinforced_deorum_axe',
    'immersiveengineering:axe_steel',
  ];
  event.add('forge:tools/axes', axes);
  event.add('minecraft:axes', axes);

  // Bows
  const bows = [
    'deep_aether:storm_bow',
  ];
  event.add('forge:tools/bows', bows);

  // Hoes
  const hoes = [
    'eidolon:silver_hoe',
    'forbidden_arcanus:draco_arcanus_hoe',
    'forbidden_arcanus:reinforced_deorum_hoe',
    'immersiveengineering:hoe_steel',
  ];
  event.add('forge:tools/hoes', hoes);
  event.add('minecraft:hoes', hoes);

  // Knifes
  const knives = [
    'sullysmod:primitive_knife',
  ];
  event.add('farmersdelight:tools/knives', knives);
  event.add('forge:tools/knives', knives);
  event.add('minecraft:swords', knives);

  // Paxels
  const paxels = [
    'easypaxellite:wood_paxel',
    'easypaxellite:stone_paxel',
    'easypaxellite:iron_paxel',
    'easypaxellite:golden_paxel',
    'easypaxellite:diamond_paxel',
    'easypaxellite:netherite_paxel',
  ];
  event.add('forge:tools/axes', paxels);
  event.add('forge:tools/pickaxes', paxels);
  event.add('forge:tools/shovels', paxels);
  event.add('minecraft:axes', paxels);
  event.add('minecraft:pickaxes', paxels);
  event.add('minecraft:shovels', paxels);

  // Pickaxes
  const pickaxes = [
    'eidolon:reversal_pick',
    'eidolon:silver_pickaxe',
    'forbidden_arcanus:diamond_blacksmith_gavel',
    'forbidden_arcanus:draco_arcanus_pickaxe',
    'forbidden_arcanus:golden_blacksmith_gavel',
    'forbidden_arcanus:iron_blacksmith_gavel',
    'forbidden_arcanus:netherite_blacksmith_gavel',
    'forbidden_arcanus:reinforced_deorum_blacksmith_gavel',
    'forbidden_arcanus:reinforced_deorum_pickaxe',
    'forbidden_arcanus:slimec_pickaxe',
    'forbidden_arcanus:stone_blacksmith_gavel',
    'forbidden_arcanus:wooden_blacksmith_gavel',
    'immersiveengineering:pickaxe_steel',
  ];
  event.add('forge:tools/pickaxes', pickaxes);
  event.add('minecraft:pickaxes', pickaxes);


  // Shields
  const shields =  [
    'alexsmobs:shield_of_the_deep',
  ];
  event.add('forge:tools/shields', shields);

  // Shovels
  const shovels = [
    'eidolon:silver_shovel',
    'forbidden_arcanus:draco_arcanus_shovel',
    'forbidden_arcanus:reinforced_deorum_shovel',
    'immersiveengineering:shovel_steel',
  ];
  event.add('forge:tools/shovels', shovels);
  event.add('minecraft:shovels', shovels);

  // Spears
  const spears = [
    'alexscaves:extinction_spear',
    'alexscaves:frostmint_spear',
    'alexscaves:limestone_spear',
    'simplyswords:diamond_glaive',
    'simplyswords:diamond_spear',
    'simplyswords:gold_glaive',
    'simplyswords:gold_spear',
    'simplyswords:iron_glaive',
    'simplyswords:iron_spear',
    'simplyswords:magispear',
    'simplyswords:netherite_glaive',
    'simplyswords:netherite_spear',
    'simplyswords:runic_glaive',
    'simplyswords:runic_spear',
  ];
  event.add('forge:tools/spears', spears);

  // Swords
  const swords = [
    'alexscaves:frostmint_spear',
    'alexscaves:sharpened_candy_cane',
    'alexsmobs:tendon_whip',
    'aquamirae:coral_lance',
    'aquamirae:dagger_of_greed',
    'aquamirae:divider',
    'aquamirae:fin_cutter',
    'aquamirae:poisoned_blade',
    'aquamirae:remnants_saber',
    'aquamirae:terrible_sword',
    'aquamirae:whisper_of_the_abyss',
    'deep_aether:blade_of_luck',
    'deep_aether:storm_sword',
    'eidolon:athame',
    'eidolon:cleaving_axe',
    'eidolon:deathbringer_scythe',
    'eidolon:reaper_scythe',
    'eidolon:sapping_sword',
    'eidolon:silver_sword',
    'enderio:dark_steel_sword',
    'enlightened_end:rooting_blade',
    'forbidden_arcanus:draco_arcanus_sword',
    'forbidden_arcanus:mystical_dagger',
    'forbidden_arcanus:reinforced_deorum_sword',
    'forbidden_arcanus:shiny_zombie_arm',
    'forbidden_arcanus:zombie_arm',
    'graveyard:bone_dagger',
    'immersiveengineering:sword_steel',
    'minecolonies:chiefsword',
    'minecolonies:iron_scimitar',
    'minecolonies:spear',
    'mutantmonsters:endersoul_hand',
    'mutantmonsters:hulk_hammer',
    'nethersdelight:diamond_machete',
    'nethersdelight:golden_machete',
    'nethersdelight:iron_machete',
    'nethersdelight:netherite_machete',
    'rats:feral_bagh_nakhs',
    'rats:ghost_pirat_cutlass',
    'rats:pirat_cutlass',
    'rats:plague_scythe',
    'sullysmod:broken_bottle',
  ];
  event.add('forge:tools/swords', swords);
  event.add('minecraft:swords', swords);

  //
  // Armors
  //

  // Helmets
  const helmets = [
    'alexscaves:diving_helmet',
    'alexscaves:gingerbread_helmet',
    'alexscaves:hazmat_mask',
    'alexscaves:hood_of_darkness',
    'alexscaves:primordial_helmet',
    'alexsmobs:novelty_hat',
    'aquamirae:abyssal_heaume',
    'aquamirae:abyssal_tiara',
    'aquamirae:terrible_helmet',
    'aquamirae:three_bolt_helmet',
    'ars_elemental:air_hat',
    'ars_elemental:aqua_hat',
    'ars_elemental:earth_hat',
    'ars_elemental:fire_hat',
    'ars_technica:technomancer_helmet',
    'create:cardboard_helmet',
    'deep_aether:stormforged_helmet',
    'eidolon:bonelord_helm',
    'eidolon:silver_helmet',
    'eidolon:warlock_hat',
    'enlightened_end:adamantite_armor_helmet',
    'forbidden_arcanus:draco_arcanus_helmet',
    'forbidden_arcanus:mortem_helmet',
    'forbidden_arcanus:tyr_helmet',
    'galosphere:sterling_helmet',
    'minecolonies:build_goggles',
    'minecolonies:pirate_cap',
    'minecolonies:pirate_hat',
    'minecolonies:plate_armor_helmet',
    'minecolonies:santa_hat',
    'rats:chef_toque',
    'rats:rat_fez',
    'rats:rat_king_crown',
    'wardrobe:cake_hat_helmet',
    'wardrobe:desert_helmet',
    'wardrobe:entertainer_helmet',
    'wardrobe:farmers_hat_helmet',
    'wardrobe:fletchers_hat_helmet',
    'wardrobe:fox_hat_helmet',
    'wardrobe:hat_helmet',
    'wardrobe:leather_top_hat_helmet',
    'wardrobe:newsboy_cap_helmet',
    'wardrobe:snow_fox_hat_helmet',
    'wardrobe:snowy_helmet',
    'wardrobe:taiga_helmet',
  ];
  event.add('forge:armors/helmets', helmets);

  // Chestplates
  const chestplates = [
    'alexscaves:primordial_tunic',
    'alexscaves:cloak_of_darkness',
    'alexscaves:diving_chestplate',
    'alexscaves:gingerbread_chestplate',
    'alexscaves:hazmat_chestplate',
    'alexsmobs:tarantula_hawk_elytra',
    'aquamirae:abyssal_brigantine',
    'aquamirae:terrible_chestplate',
    'aquamirae:three_bolt_suit',
    'ars_elemental:air_robes',
    'ars_elemental:aqua_robes',
    'ars_elemental:earth_robes',
    'ars_elemental:fire_robes',
    'ars_technica:technomancer_chestplate',
    'create:cardboard_chestplate',
    'deep_aether:stormforged_chestplate',
    'eidolon:bonelord_chestplate',
    'eidolon:silver_chestplate',
    'eidolon:warlock_cloak',
    'enlightened_end:adamantite_armor_chestplate',
    'forbidden_arcanus:draco_arcanus_chestplate',
    'forbidden_arcanus:mortem_chestplate',
    'forbidden_arcanus:tyr_chestplate',
    'galosphere:sterling_chestplate',
    'minecolonies:pirate_chest',
    'minecolonies:pirate_top',
    'minecolonies:plate_armor_chest',
    'wardrobe:broken_barrel_chestplate',
    'wardrobe:desert_chestplate',
    'wardrobe:entertainer_chestplate',
    'wardrobe:jungle_chestplate',
    'wardrobe:savanna_chestplate',
    'wardrobe:snowy_chestplate',
    'wardrobe:taiga_chestplate',
    'wardrobe:wool_vest_chestplate'
  ];
  event.add('forge:armors/chestplates', chestplates);

  // Leggings
  const leggings = [
    'alexscaves:primordial_pants',
    'alexscaves:diving_leggings',
    'alexscaves:gingerbread_leggings',
    'alexscaves:hazmat_leggings',
    'aquamirae:abyssal_leggings',
    'aquamirae:terrible_leggings',
    'aquamirae:three_bolt_leggings',
    'ars_elemental:air_leggings',
    'ars_elemental:aqua_leggings',
    'ars_elemental:earth_leggings',
    'ars_elemental:fire_leggings',
    'ars_technica:technomancer_leggings',
    'deep_aether:stormforged_leggings',
    'eidolon:bonelord_greaves',
    'eidolon:silver_leggings',
    'enlightened_end:adamantite_armor_leggings',
    'enlightened_end:dashing_leggings',
    'forbidden_arcanus:draco_arcanus_leggings',
    'forbidden_arcanus:mortem_leggings',
    'forbidden_arcanus:tyr_leggings',
    'galosphere:sterling_leggings',
    'minecolonies:pirate_leggings',
    'minecolonies:pirate_legs',
    'minecolonies:plate_armor_legs',
    'wardrobe:desert_leggings',
    'wardrobe:entertainer_leggings',
    'wardrobe:jungle_leggings',
    'wardrobe:savanna_leggings',
    'wardrobe:snowy_leggings',
    'wardrobe:taiga_leggings'
  ];
  event.add('forge:armors/leggings', leggings);

  // Boots
  const boots = [
    'alexscaves:hazmat_boots',
    'alexscaves:diving_boots',
    'alexscaves:gingerbread_boots',
    'alexscaves:rainbounce_boots',
    'aquamirae:abyssal_boots',
    'aquamirae:terrible_boots',
    'aquamirae:three_bolt_boots',
    'ars_elemental:air_boots',
    'ars_elemental:aqua_boots',
    'ars_elemental:earth_boots',
    'ars_elemental:fire_boots',
    'ars_technica:technomancer_boots',
    'deep_aether:stormforged_boots',
    'eidolon:silver_boots',
    'eidolon:warlock_boots',
    'enlightened_end:boost_boots',
    'enlightened_end:adamantite_armor_boots',
    'forbidden_arcanus:draco_arcanus_boots',
    'forbidden_arcanus:mortem_boots',
    'forbidden_arcanus:tyr_boots',
    'galosphere:sterling_boots',
    'minecolonies:pirate_boots',
    'minecolonies:pirate_shoes',
    'minecolonies:plate_armor_boots',
    'wardrobe:desert_boots',
    'wardrobe:jungle_boots',
    'wardrobe:savanna_boots',
    'wardrobe:snowy_boots',
    'wardrobe:taiga_boots'
  ];
  event.add('forge:armors/boots', boots);

});
