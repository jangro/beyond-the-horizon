// priority: 90

/**
 * @file Recipe input / output replacements for Beyond the Horizon.
 * 
 * Contains several convenience functions for frequently used replacement approaches.
 * The majority of the recipe changes in this script are to convert recipe inputs to
 * use tags instead of specific items, or adjusting the output where we have a preferred mod to use.
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

  // ----- Convenience Functions -----

  /**
   * Replaces a given input ingredient in all KubeJS-compatible recipes.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to);
  };

  /**
   * Replaces a given output item in all KubeJS-compatible recipes.
   * @param {*} from Original output item.
   * @param {*} to New output item.
   */
  const replaceOutput = (from, to) => {
    event.replaceOutput({}, from, to);
  };

  /**
   * Replaces input ingredients in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace ingredients in.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceInput({id: recipeID}, from, to));
    } else {
      event.replaceInput({id: recipes}, from, to);
    }
  };

  /**
   * Replaces output items in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace items in.
   * @param {*} from Original item.
   * @param {*} to New item.
   */
  const replaceOutputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceOutput({id: recipeID}, from, to));
    } else {
      event.replaceOutput({id: recipes}, from, to);
    }
  };

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {
    event.replaceInput({type: recipeType}, from, to);
  };

  const replaceOutputType = (recipeType, from, to) => {
    event.replaceOutput({type: recipeType}, from, to);
  };

  // ----- Compatibility -----
  // Use tags instead of items for all dye colours.
  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`));

  // Candles
  replaceInputID('minecraft:candle', 'minecraft:honeycomb', '#bth:candle_material');
  replaceInputID('eidolon:candle', 'eidolon:tallow', '#bth:candle_material');
  replaceInputID('forbidden_arcanus:purifying_soap', 'forbidden_arcanus:wax', '#bth:candle_material');
  replaceInputID('forbidden_arcanus:purifying_soap', 'minecraft:slime_ball', '#forge:slimeballs');
  replaceInputID('supplementaries:soap', 'minecraft:porkchop', ['#bth:candle_material', 'minecraft:porkchop']);


  // Dough Compatibility
  replaceInput('create:dough', '#forge:dough/wheat');
  replaceInput('farmersdelight:wheat_dough', '#forge:dough/wheat');
  replaceInput('minecolonies:bread_dough', '#forge:dough/wheat');

  // Dust Compatibility
  replaceInput('alexscaves:sulfur_dust', '#forge:dusts/sulfur');

  // Feather Compatibility
  replaceInputID([
    'minecraft:brush',
    'minecraft:writable_book',
    'ars_elemental:flight_alt',
    'ars_nouveau:orange_sbed',
    'ars_nouveau:ritual_cloudshaping',
    'ars_nouveau:ritual_gravity',
    'ars_nouveau:spike_to_arrow',
    'botania:flighttiara_0',
    'botania:tornado_rod',
    'botania:runic_altar/air',
    'enlightened_end:helium_dart',
    'enlightened_end:xenon_dart',
    'forbidden_arcanus:corrupted_pixie',
    'minecolonies:blockhutschool',
    'pneumaticcraft:jet_boots_upgrade_2',
    'rats:feathery_wing',
    'rats:piper_hat',
    'wardrobe:fletchers_hat_recipe',
    'xercamusic:music_sheet',
  ], 'minecraft:feather', '#forge:feathers');
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers');

  // Fibre Compatibility
  replaceInputID('immersiveengineering:crafting/hemp_fabric', 'immersiveengineering:hemp_fiber', ['immersiveengineering:hemp_fiber', 'supplementaries:flax']);
  
  // Flour Compatibility
  replaceInput('create:wheat_flour', '#forge:flour/wheat');
  replaceInput('pneumaticcraft:wheat_flour', '#forge:flour/wheat');

  // Glass Compatibility
  replaceInputID([
    'minecraft:beacon',
    'minecraft:end_crystal',
    'botania:glass_pickaxe',
    'botania:lens_normal',
    'botania:prism',
    'enlightened_end:gas_jar',
    'enlightened_end:xenon_laser',
    'littlelogistics:fluid_barge',
    'littlelogistics:fluid_car',
    'littlelogistics:fluid_hopper',
    'minecolonies:blockhutglassblower',
    'quark:building/crafting/stone_brick_lamp',
    'shoppy:shaped_bartering_station',
    'shoppy:shaped_shop_block',
    'starbunclemania:fluid_jar',
    'supplementaries:hourglass',
    'supplementaries:jar',
  ], 'minecraft:glass', '#forge:glass/colorless');
  
  // Ingot Compatibility
  replaceInput('eidolon:arcane_gold_ingot', '#forge:ingots/arcane_gold');
  replaceInput('forbidden_arcanus:deorum_ingot', '#forge:ingots/arcane_gold');
  replaceInput('forbidden_arcanus:obsidian_ingot', '#forge:ingots/obsidian');
  replaceInput('galosphere:silver_ingot', '#forge:ingots/silver');
  replaceInput('immersiveengineering:ingot_silver', '#forge:ingots/silver');
  replaceInput('#forge:ingots/uranium', 'alexscaves:uranium');

  // Leather Compatibility
  replaceInputID([
    'minecraft:book',
    'aether:aether_saddle',
    'alexsmobs:falconry_glove',
    'alexsmobs:falconry_hood',
    'alexsmobs:falconry_hood_alt',
    'alexsmobs:pocket_sand',
    'aquamirae:remnants_saber',
    'aquamirae:three_bolt_boots',
    'aquamirae:three_bolt_leggings',
    'aquamirae:three_bolt_suit',
    'ars_nouveau:annotated_codex',
    'botania:bellows',
    'botania:drum_canopy',
    'botania:drum_gathering',
    'botania:drum_wild',
    'botania:ender_hand',
    'botania:knockback_belt',
    'botania:travel_belt',
    'domesticationinnovation:drum',
    'irons_spellbooks:pumpkin_chestplate',
    'irons_spellbooks:pumpkin_leggings',
    'minecolonies:blockhutfield',
    'minecolonies:build_goggles',
    'minecolonies:clipboard',
    'minecolonies:questlog',
    'minecolonies:resourcescroll',
    'quark:tools/crafting/seed_pouch',
    'supplementaries:bellows',
    'xercamusic:drum',
  ], 'minecraft:leather', '#forge:leather');

  // Nugget Compatibility
  replaceInput('galosphere:silver_nugget', '#forge:nuggets/silver');
  replaceInput('immersiveengineering:nugget_silver', '#forge:nuggets/silver');
  
  // Ore Compatibility
  replaceInput('eidolon:silver_ore', '#forge:ores/silver');
  replaceInput('eidolon:deep_silver_ore', '#forge:ores/silver');
  replaceInput('galosphere:silver_ore', '#forge:ores/silver');
  replaceInput('galosphere:deepslate_silver_ore', '#forge:ores/silver');
  replaceInput('immersiveengineering:ore_silver', '#forge:ores/silver');
  replaceInput('immersiveengineering:deepslate_ore_silver', '#forge:ores/silver');

  // Plate Compatibility
  replaceInput('create:iron_sheet', '#forge:plates/iron');
  replaceInput('create:golden_sheet', '#forge:plates/gold');
  replaceInput('createaddition:zinc_sheet', '#forge:plates/zinc');
  replaceInput('createdeco:zinc_sheet', '#forge:plates/zinc');

  // Propeller Compatibility
  replaceInput('immersive_aircraft:propeller', 'create:propeller');

  // Raw Material Compatibility
  replaceInput('galosphere:raw_silver', '#forge:raw_materials/silver');
  replaceInput('immersiveengineering:raw_silver', '#forge:raw_materials/silver');

  // Slime Compatibility
  replaceInputID([
    'minecraft:lead',
    'minecraft:sticky_piston',
    'alexsmobs:pupfish_locator',
    'botania:dynamic/composite_lens',
    'botania:green_pavement',
    'botania:runic_altar/summer',
    'forbidden_arcanus:slimec_pickaxe',
    'forbidden_arcanus:wax',
    'immersive_aircraft:eco_engine',
    'packingtape:tape',
    'supplementaries:item_lore_display',
    'supplementaries:slingshot',
  ], 'minecraft:slime_ball', '#forge:slimeballs');

  // Steel compatibility (IE/EnderIO) for selected items
  replaceInputID([
    'immersiveengineering:crafting/steel_wallmount',
    'immersiveengineering:crafting/steel_scaffolding_standard',
    'immersiveengineering:crafting/plate_steel_hammering',
    'immersiveengineering:crafting/steel_fence',
    'immersiveengineering:metalpress/rod_steel',
    'createaddition:rolling/steel_ingot',
  ], 'immersiveengineering:ingot_steel', '#bth:ingots/steel');

  // Stick / Rod Compatibility
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden');

  // Storage Block Compatibility
  replaceInput('galosphere:silver_block', '#forge:storage_blocks/silver');
  replaceInput('immersiveengineering:raw_block_silver', '#forge:storage_blocks/raw_silver');
  replaceInput('immersiveengineering:storage_silver', '#forge:storage_blocks/silver');
  replaceInput('immersiveengineering:storage_uranium', '#forge:storage_blocks/uranium');

  // Wire Compatibility
  replaceInput('immersiveengineering:wire_copper', '#forge:wires/copper');

  // Misc Compatibility
  replaceInput('minecraft:blast_furnace', ['minecraft:blast_furnace', 'nethersdelight:blackstone_blast_furnace']);
  replaceInput('minecraft:furnace', ['minecraft:furnace', 'quark:blackstone_furnace', 'quark:deepslate_furnace']);
  replaceInput('minecraft:smoker', ['minecraft:smoker', 'nethersdelight:nether_brick_smoker']);
  replaceInput('nethersdelight:blackstone_furnace', ['minecraft:furnace', 'quark:blackstone_furnace', 'quark:deepslate_furnace']);

  // Make the alchemist cauldron more accessible
  replaceInputID('irons_spellbooks:alchemist_cauldron', 'irons_spellbooks:cinder_essence', 'minecraft:blaze_powder');

  // ----- Output Unification -----

  // Dusts
  replaceOutput('alexscaves:sulfur_dust', 'eidolon:sulfur');
  replaceOutput('immersiveengineering:dust_sulfur', 'eidolon:sulfur');

  // Ingots
  replaceOutput('galosphere:silver_ingot', 'eidolon:silver_ingot');
  replaceOutput('immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot');
  replaceOutput('immersiveengineering:ingot_lead', 'eidolon:lead_ingot');
  replaceOutput('immersiveengineering:ingot_silver', 'eidolon:silver_ingot');
  replaceOutput('immersiveengineering:ingot_uranium', 'alexscaves:uranium');

  // Nuggets
  replaceOutput('galosphere:silver_nugget', 'eidolon:silver_nugget');
  replaceOutput('immersiveengineering:nugget_copper', 'create:copper_nugget');
  replaceOutput('immersiveengineering:nugget_electrum', 'createaddition:electrum_nugget');
  replaceOutput('immersiveengineering:nugget_lead', 'eidolon:lead_nugget');
  replaceOutput('immersiveengineering:nugget_silver', 'eidolon:silver_nugget');
  replaceOutput('pneumaticcraft:copper_nugget', 'create:copper_nugget');
  // Note: Unsure of how best to handle Alex's Caves Uranium Shards, as they're nuggets but ones
  // that convert to raw material, not an ingot.

  // Plates
  replaceOutput('immersiveengineering:plate_copper', 'create:copper_sheet');
  replaceOutput('immersiveengineering:plate_electrum', 'createaddition:electrum_sheet');
  replaceOutput('immersiveengineering:plate_gold', 'create:golden_sheet');
  replaceOutput('immersiveengineering:plate_iron', 'create:iron_sheet');

  // Rods
  replaceOutput('createaddition:iron_rod', 'immersiveengineering:stick_iron');

  // Ore
  replaceOutput('galosphere:deepslate_silver_ore', 'eidolon:deep_silver_ore');
  replaceOutput('galosphere:silver_ore', 'eidolon:silver_ore');
  replaceOutput('immersiveengineering:deepslate_ore_silver', 'eidolon:deep_silver_ore');
  replaceOutput('immersiveengineering:ore_silver', 'eidolon:silver_ore');

  // Raw Materials
  replaceOutput('immersiveengineering:raw_lead', 'eidolon:raw_lead');
  replaceOutput('galosphere:raw_silver', 'eidolon:raw_silver');
  replaceOutput('immersiveengineering:raw_silver', 'eidolon:raw_silver');

  // Storage Blocks
  replaceOutput('galosphere:raw_silver_block', 'eidolon:raw_silver_block');
  replaceOutput('galosphere:silver_block', 'eidolon:silver_block');
  replaceOutput('immersiveengineering:raw_block_silver', 'eidolon:raw_silver_block');
  replaceOutput('immersiveengineering:storage_silver', 'eidolon:silver_block');

  // Wires
  replaceOutput('createaddition:copper_wire', 'immersiveengineering:wire_copper');
  replaceOutput('createaddition:electrum_wire', 'immersiveengineering:wire_electrum');

  // Misc
  replaceInput('rats:raw_plastic', 'pneumaticcraft:plastic');
  replaceInput('bbb:rope', 'supplementaries:rope');
  replaceInput('farmersdelight:rope', 'supplementaries:rope');
  replaceOutput('bbb:rope', 'supplementaries:rope');
  replaceOutput('farmersdelight:rope', 'supplementaries:rope');
  replaceOutput('createaddition:chocolate_cake', 'neapolitan:chocolate_cake');
  replaceOutput('incubation:fried_egg', 'farmersdelight:fried_egg');

  // Changes in specific recipes.
  replaceInputID('minecraft:copper_ingot', 'minecraft:copper_block', ['minecraft:copper_block', 'minecraft:waxed_copper_block']);
  replaceInputID('nethersdelight:blackstone_blast_furnace', 'nethersdelight:blackstone_furnace', 'quark:blackstone_furnace');

  // Quark tuff changes for the addition of copper and tuff backport mod.
  replaceInputID('quark:building/crafting/stonevariants/chiseled_tuff_bricks', 'quark:tuff_bricks_slab', 'copperandtuffbackport:tuff_brick_slab');
  replaceInputID('quark:building/crafting/stonevariants/tuff_pillar', 'quark:polished_tuff_slab', 'copperandtuffbackport:polished_tuff_slab');
  replaceInputID('quark:building/crafting/vertslabs/polished_tuff_vertical_slab', 'quark:polished_tuff_slab', 'copperandtuffbackport:polished_tuff_slab');
  replaceInputID('quark:building/crafting/vertslabs/tuff_vertical_slab', 'quark:tuff_slab', 'copperandtuffbackport:tuff_slab');


});
