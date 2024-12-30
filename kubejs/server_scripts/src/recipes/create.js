// priority: 10

/**
 * @file Recipe additions for Create's crafting methods.
 *
 */

/**
 * Create Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:create/';

  // Compacting
  event.recipes.create.compacting('pneumaticcraft:plastic', '3x rats:raw_plastic').heated().id(`${ID_PREFIX}compacting/plastic_from_raw_plastic`);
  event.recipes.create.compacting(Fluid.of('integrateddynamics:liquid_chorus 125'), 'minecraft:popped_chorus_fruit').heated().id(`${ID_PREFIX}compacting/liquid_chorus`);

  // Crushing
  event.recipes.create.crushing([Item.of('rats:plastic_waste').withChance(0.5)], 'rats:garbage_pile').id(`${ID_PREFIX}crushing/plastic_waste_from_garbage_pile`);

  // Haunting
  event.recipes.create.haunting('quark:soul_sandstone', 'minecraft:sandstone').id(`${ID_PREFIX}haunting/soul_sandstone_from_sandstone`);
  event.recipes.create.haunting('valhelsia_structures:soul_brazier', 'valhelsia_structures:brazier').id(`${ID_PREFIX}haunting/soul_brazier_from_brazier`);
  event.recipes.create.haunting('valhelsia_structures:unlit_soul_lantern', 'valhelsia_structures:unlit_lantern').id(`${ID_PREFIX}haunting/unlit_soul_lantern_from_unlit_lantern`);
  
  // Mechanical Crafting
  event.recipes.create.mechanical_crafting('valhelsia_structures:dungeon_door', [
    'CCCC',
    'HWWH',
    'CWWC',
    'HSSH',
    'CCCC'
  ], {
    C: '#forge:ingots/steel',
    W: 'minecraft:dark_oak_planks',
    H: 'create:shaft',
    S: '#forge:plates/steel',
  }).id(`${ID_PREFIX}mechanical_crafting/dungeon_door`);

  // Milling
  event.recipes.create.milling(Item.of('rats:plastic_waste').withChance(0.5), 'rats:garbage_pile').id(`${ID_PREFIX}milling/plastic_waste_from_garbage_pile`);

  // Mixing
  event.recipes.create.mixing('rats:chunky_cheese_token', 'createdeco:gold_coin').superheated().id(`${ID_PREFIX}mixing/chunky_cheese_token`);
  event.recipes.create.mixing(Fluid.of('minecraft:milk 250'), [Fluid.of('minecraft:water 250'), '#bth:nuts']).heated().id(`${ID_PREFIX}mixing/milk_from_nuts`);
  event.recipes.create.mixing('minecraft:paper', [Fluid.of('minecraft:water 500'), '2x #forge:dusts/wood']).id(`${ID_PREFIX}mixing/paper_from_sawdust`);
  event.recipes.create.mixing('pneumaticcraft:speed_upgrade', [Fluid.of('pneumaticcraft:lubricant 500'), '2x pneumaticcraft:glycerol', '2x #pneumaticcraft:upgrade_components']).id(`${ID_PREFIX}mixing/speed_upgrade_from_glycerol`);

  event.recipes.create.mixing(Fluid.of('bth:sugar_water 1000'), [Fluid.of('minecraft:water 1000'), 'minecraft:sugar']).id(`${ID_PREFIX}mixing/sugar_water`);
  event.recipes.create.mixing(Fluid.of('bth:soul_mixture 1000'), [Fluid.of('minecraft:water 1000'), 'minecraft:soul_sand']).heated().id(`${ID_PREFIX}mixing/soul_mixture`);
  event.recipes.create.mixing(Fluid.of('bth:ender_fuel 1000'), [Fluid.of('integrateddynamics:liquid_chorus 500'), Fluid.of('bth:soul_mixture', 500)]).heated().id(`${ID_PREFIX}mixing/ender_fuel`);

  // Artificial Dye 
  // - white
  event.recipes.create.mixing(Item.of('minecraft:white_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:invisibility"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_invisibility`);
  event.recipes.create.mixing(Item.of('minecraft:white_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"enlightened_end:levitation"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_levitation`);
  // - light_grey
  event.recipes.create.mixing(Item.of('minecraft:light_gray_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:slowness"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_slowness`);
   // - grey
  event.recipes.create.mixing(Item.of('minecraft:gray_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"eidolon:vulnerable"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_vulnerable`);
  event.recipes.create.mixing(Item.of('minecraft:gray_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexscaves:magnetizing"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_magnetizing`);
  // - black
  event.recipes.create.mixing(Item.of('minecraft:black_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:weakness"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_weakness`);
  event.recipes.create.mixing(Item.of('minecraft:black_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"enlightened_end:burdened"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_burdened`);
  event.recipes.create.mixing(Item.of('minecraft:black_dye', 7), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"mutantmonsters:chemical_x"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_x`);
  event.recipes.create.mixing(Item.of('minecraft:black_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"eidolon:undeath"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_undeath`);
  // - brown
  event.recipes.create.mixing(Item.of('minecraft:brown_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:harming"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_harming`);
  event.recipes.create.mixing(Item.of('minecraft:brown_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexsmobs:knockback_resistance"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_knockback_resistance`);
  event.recipes.create.mixing(Item.of('minecraft:brown_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexsmobs:bug_pheromones"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_bug_pheromones`);
  event.recipes.create.mixing(Item.of('minecraft:brown_dye', 6), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"eidolon:decay"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_decay`);
  event.recipes.create.mixing(Item.of('minecraft:brown_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"enlightened_end:rooted_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_rooting`);
  event.recipes.create.mixing(Item.of('minecraft:brown_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"upgrade_aquatic:restfulness"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_restfulness`);
  // - red
  event.recipes.create.mixing(Item.of('minecraft:red_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:healing"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_healing`);
  event.recipes.create.mixing(Item.of('minecraft:red_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ars_noveau:blasting_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_blasting`);
  event.recipes.create.mixing(Item.of('minecraft:red_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexsmobs:clinging"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_clinging`);
  // - orange
  event.recipes.create.mixing(Item.of('minecraft:orange_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:fire_resistance"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_fire_resistance`);
  event.recipes.create.mixing(Item.of('minecraft:orange_dye', 6), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexsmobs:lava_vision"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_lava_vision`);
  // - yellow
  event.recipes.create.mixing(Item.of('minecraft:yellow_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:strength"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_strength`);
  event.recipes.create.mixing(Item.of('minecraft:yellow_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:leaping"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_leaping`);
  event.recipes.create.mixing(Item.of('minecraft:yellow_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"eidolon:reinforced"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_reinforced`);
  event.recipes.create.mixing(Item.of('minecraft:yellow_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ars_elemental:shock_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_shocking`);
  event.recipes.create.mixing(Item.of('minecraft:yellow_dye', 6), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"buzzier_bees:unluck"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_unluck`);
  event.recipes.create.mixing(Item.of('minecraft:yellow_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexscaves:haste"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_haste`);
  // - lime
  event.recipes.create.mixing(Item.of('minecraft:lime_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:night_vision"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_night_vision`);
  // - green
  event.recipes.create.mixing(Item.of('minecraft:green_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ars_noveau:recovery_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_recovery`);
  event.recipes.create.mixing(Item.of('minecraft:green_dye', 6), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:luck"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_luck`);
  event.recipes.create.mixing(Item.of('minecraft:green_dye', 6), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexsmobs:poison_resistance"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_poison_resistance`);
  event.recipes.create.mixing(Item.of('minecraft:green_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:poison"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_poison`);
  // - cyan
  event.recipes.create.mixing(Item.of('minecraft:cyan_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ars_noveau:spell_damage_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_spell_damage_potion`);
  event.recipes.create.mixing(Item.of('minecraft:cyan_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:swiftness"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_swiftness`);
  event.recipes.create.mixing(Item.of('minecraft:cyan_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:water_breathing"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_water_breathing`);
  // - light_blue
  event.recipes.create.mixing(Item.of('minecraft:light_blue_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"eidolon:chilled"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_chilled`);
  event.recipes.create.mixing(Item.of('minecraft:light_blue_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexsmobs:soulsteal"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_soulsteal`);
  event.recipes.create.mixing(Item.of('minecraft:light_blue_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"irons_spellbooks:instant_mana_one"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_instant_mana_one`);
  event.recipes.create.mixing(Item.of('minecraft:light_blue_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ecologics:sliding"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_sliding`);
  event.recipes.create.mixing(Item.of('minecraft:light_blue_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"upgrade_aquatic:repellance"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_repellance`);
 // - blue
  event.recipes.create.mixing(Item.of('minecraft:blue_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ars_noveau:freezing_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_freezing_potion`);
  event.recipes.create.mixing(Item.of('minecraft:blue_dye', 5), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"alexcaves:deepsight"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_deepsight`);
  // - purple
  event.recipes.create.mixing(Item.of('minecraft:purple_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ars_noveau:shielding_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_shielding_potion`);
  event.recipes.create.mixing(Item.of('minecraft:purple_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"ars_elemental:enderference_potion"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_enderference_potion`);
  event.recipes.create.mixing(Item.of('minecraft:purple_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"upgrade_aquatic:insomnia"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_insomnia`);
  event.recipes.create.mixing(Item.of('minecraft:purple_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"eidolon:anchored"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_anchored`);
  // - pink
  event.recipes.create.mixing(Item.of('minecraft:pink_dye', 4), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"minecraft:regeneration"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_regeneration`);
  // - magenta
  event.recipes.create.mixing(Item.of('minecraft:magenta_dye', 6), [Fluid.of('create:potion', 250, {Bottle:"REGULAR",Potion:"upgrade_aquatic:vibing"}), Fluid.of('immersiveengineering:creosote 250')]).heated().id(`${ID_PREFIX}mixing/artificial_dye_vibing`);
  



  // Sandpaper Polishing
  // Hearth and Home Sanded Wood
  VANILLA_WOOD_TYPES_ALL.forEach((wood) => {
    event.recipes.create.sandpaper_polishing(`hearth_and_home:${wood}_sanded_wood`, `minecraft:${wood}_planks`).id(`${ID_PREFIX}sanding/${wood}`);
  });
  // TODO: Add Every Compat ones, too.

  // Splashing
  event.recipes.create.splashing('alexscaves:rusty_barrel', 'alexscaves:metal_barrel').id(`${ID_PREFIX}splashing/rusty_barrel`);
  event.recipes.create.splashing('alexscaves:rusty_rebar', 'alexscaves:metal_rebar').id(`${ID_PREFIX}splashing/rusty_rebar`);
  event.recipes.create.splashing('alexscaves:rusty_scaffolding', 'alexscaves:metal_scaffolding').id(`${ID_PREFIX}splashing/rusty_scaffolding`);
  event.recipes.create.splashing('alexscaves:rusty_scrap_metal', 'alexscaves:scrap_metal').id(`${ID_PREFIX}splashing/rusty_scrap_metal`);
  event.recipes.create.splashing('alexscaves:rusty_scrap_metal_plate', 'alexscaves:scrap_metal_plate').id(`${ID_PREFIX}splashing/rusty_scrap_metal_plate`);
  event.recipes.create.splashing(Item.of('rats:plastic_waste').withChance(0.5), 'rats:garbage_pile').id(`${ID_PREFIX}splashing/plastic_waste_from_garbage_pile`);
  event.recipes.create.splashing('valhelsia_structures:unlit_lantern', 'minecraft:lantern').id(`${ID_PREFIX}splashing/unlit_lantern_from_lantern`);
  event.recipes.create.splashing('valhelsia_structures:unlit_soul_lantern', 'minecraft:soul_lantern').id(`${ID_PREFIX}splashing/unlit_soul_lantern_from_soul_lantern`);

});
