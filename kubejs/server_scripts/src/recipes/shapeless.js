// priority: 10

/**
 * @file Shapeless recipe additions for Beyond the Horizon.
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:crafting/';

  // Beyond the Horizon
  event.shapeless('modularrouters:void_module', ['modularrouters:blank_module', 'ars_nouveau:void_prism']).id(`${ID_PREFIX}void_module`);
  event.shapeless('storagedrawers:void_upgrade', ['storagedrawers:upgrade_template', 'ars_nouveau:void_prism']).id(`${ID_PREFIX}void_upgrade`);

  // Minecraft
  event.shapeless('minecraft:magenta_dye', 'ecologics:azalea_flower').id(`${ID_PREFIX}magenta_dye_from_azalea_flower`);
  event.shapeless('minecraft:yellow_dye', 'forbidden_arcanus:yellow_orchid').id(`${ID_PREFIX}yellow_dye_from_yellow_orchid`);
  event.shapeless('minecraft:white_dye', 'ribbits:swamp_daisy').id(`${ID_PREFIX}white_dye_from_swamp_daisy`);

  // Create
  event.shapeless('create:brass_sheet', ['#forge:ingots/brass', 'immersiveengineering:hammer']).id(`${ID_PREFIX}hammer/brass_sheet`);
  event.shapeless('createaddition:zinc_sheet', ['#forge:ingots/zinc', 'immersiveengineering:hammer']).id(`${ID_PREFIX}hammer/zinc_sheet`);
  event.shapeless('createdeco:andesite_sheet', ['create:andesite_alloy', 'immersiveengineering:hammer']).id(`${ID_PREFIX}hammer/andesite_sheet`);
  event.shapeless('createdeco:industrial_iron_sheet', ['createdeco:industrial_iron_ingot', 'immersiveengineering:hammer']).id(`${ID_PREFIX}hammer/industrial_iron_sheet`);
  event.shapeless('createdeco:netherite_sheet', ['#forge:ingots/netherite', 'immersiveengineering:hammer']).id(`${ID_PREFIX}hammer/netherite_sheet`);

  // Create Crafts & Additions
  event.shapeless('createaddition:gold_wire', ['#forge:plates/gold', 'immersiveengineering:wirecutter']).id(`${ID_PREFIX}cutter/gold_wire`);
  event.shapeless('createaddition:iron_wire', ['#forge:plates/iron', 'immersiveengineering:wirecutter']).id(`${ID_PREFIX}cutter/iron_wire`);

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ]).id(`${ID_PREFIX}compost_from_sawdust`);

  // Quark
  event.shapeless('2x quark:myalite', ['minecraft:cobblestone', 'minecraft:amethyst_block', 'quark:myalite_crystal']).id(`${ID_PREFIX}myalite`);
  event.shapeless('quark:dusky_myalite', ['ars_nouveau:sourcestone', 'quark:myalite_crystal']).id(`${ID_PREFIX}dusky_myalite`);

  // Plushies
  event.shapeless('plushies:allay_plushie', [Item.of('exposure:photograph', '{"minecraft:allay":1b}').weakNBT(), 'minecraft:string', 'minecraft:light_blue_wool']).id(`${ID_PREFIX}allay_plushie`);
  event.shapeless('plushies:axolotl_plushie', [Item.of('exposure:photograph', '{"minecraft:axolotl":1b}').weakNBT(), 'minecraft:string', 'minecraft:pink_wool']).id(`${ID_PREFIX}axolotl_plushie`);
  event.shapeless('plushies:bat_plushie', [Item.of('exposure:photograph', '{"minecraft:bat":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}bat_plushie`);
  event.shapeless('perfectplushies:bear_plushie', [Item.of('exposure:photograph', '{"alexsmobs:bear":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}bear_plushie`);
  event.shapeless('plushies:bee_plushie', [Item.of('exposure:photograph', '{"minecraft:bee":1b}').weakNBT(), 'minecraft:string', 'minecraft:yellow_wool']).id(`${ID_PREFIX}bee_plushie`);
  event.shapeless('plushies:blaze_plushie', [Item.of('exposure:photograph', '{"minecraft:blaze":1b}').weakNBT(), 'minecraft:string', 'minecraft:orange_wool']).id(`${ID_PREFIX}blaze_plushie`);
  event.shapeless('plushie_buddies:plushie_camel', [Item.of('exposure:photograph', '{"minecraft:camel":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_camel`);
  event.shapeless('perfectplushies:monkey_plushie', [Item.of('exposure:photograph', '{"neapolitan:chimpanzee":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}monkey_plushie`);
  event.shapeless('perfectplushies:cat_plushie', [Item.of('exposure:photograph', '{"minecraft:cat":1b}').weakNBT(), 'minecraft:string', 'minecraft:yellow_wool']).id(`${ID_PREFIX}cat_plushie`);
  event.shapeless('plushie_buddies:plushie_cave_spider', [Item.of('exposure:photograph', '{"minecraft:cave_spider":1b}').weakNBT(), 'minecraft:string', 'minecraft:black_wool']).id(`${ID_PREFIX}plushie_cave_spider`);
  event.shapeless('plushie_buddies:plushie_chicken', [Item.of('exposure:photograph', '{"minecraft:chicken":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_chicken`);
  event.shapeless('plushies:cod_plushie', [Item.of('exposure:photograph', '{"minecraft:cod":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}cod_plushie`);
  event.shapeless('plushie_buddies:plushie_cow', [Item.of('exposure:photograph', '{"minecraft:cow":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_cow`);
  event.shapeless('plushie_buddies:plushie_creeper', [Item.of('exposure:photograph', '{"minecraft:creeper":1b}').weakNBT(), 'minecraft:string', 'minecraft:lime_wool']).id(`${ID_PREFIX}plushie_creeper`);
  event.shapeless('perfectplushies:dolphin_plushie', [Item.of('exposure:photograph', '{"minecraft:dolphin":1b}').weakNBT(), 'minecraft:string', 'minecraft:light_gray_wool']).id(`${ID_PREFIX}dolphin_plushie`);
  event.shapeless('plushie_buddies:plushie_enderdragon', [Item.of('exposure:photograph', '{"minecraft:ender_dragon":1b}').weakNBT(), 'minecraft:string', 'minecraft:black_wool']).id(`${ID_PREFIX}plushie_enderdragon`);
  event.shapeless('plushie_buddies:plushie_drowned', [Item.of('exposure:photograph', '{"minecraft:drowned":1b}').weakNBT(), 'minecraft:string', 'minecraft:green_wool']).id(`${ID_PREFIX}plushie_drowned`);
  event.shapeless('plushie_buddies:plushie_elder_guardian', [Item.of('exposure:photograph', '{"minecraft:elder_guardian":1b}').weakNBT(), 'minecraft:string', 'minecraft:light_gray_wool']).id(`${ID_PREFIX}plushie_elder_guardian`);
  event.shapeless('perfectplushies:elephant_plushie', [Item.of('exposure:photograph', '{"alexsmobs:elephant":1b}').weakNBT(), 'minecraft:string', 'minecraft:gray_wool']).id(`${ID_PREFIX}elephant_plushie`);
  event.shapeless('plushie_buddies:plushie_enderman', [Item.of('exposure:photograph', '{"minecraft:enderman":1b}').weakNBT(), 'minecraft:string', 'minecraft:black_wool']).id(`${ID_PREFIX}plushie_enderman`);
  event.shapeless('plushies:endermite_plushie', [Item.of('exposure:photograph', '{"minecraft:endermite":1b}').weakNBT(), 'minecraft:string', 'minecraft:purple_wool']).id(`${ID_PREFIX}endermite_plushie`);
  event.shapeless('plushie_buddies:plushie_evoker', [Item.of('exposure:photograph', '{"minecraft:evoker":1b}').weakNBT(), 'minecraft:string', 'minecraft:gray_wool']).id(`${ID_PREFIX}plushie_evoker`);
  event.shapeless('perfectplushies:frog_plushie', [Item.of('exposure:photograph', '{"minecraft:frog":1b}').weakNBT(), 'minecraft:string', 'minecraft:green_wool']).id(`${ID_PREFIX}frog_plushie`);
  event.shapeless('perfectplushies:red_fox_plushie', [Item.of('exposure:photograph', '{"minecraft:fox":1b}').weakNBT(), 'minecraft:string', 'minecraft:orange_wool']).id(`${ID_PREFIX}red_fox_plushie`);
  event.shapeless('plushie_buddies:plushie_fox', [Item.of('exposure:photograph', '{"quark:foxhound":1b}').weakNBT(), 'minecraft:string', 'minecraft:red_wool']).id(`${ID_PREFIX}plushie_fox`);
  event.shapeless('perfectplushies:doe_plushie', [Item.of('exposure:photograph', '{"alexsmobs:gazelle":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}doe_plushie`);
  event.shapeless('plushies:ghast_plushie', [Item.of('exposure:photograph', '{"minecraft:ghast":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}ghast_plushie`);
  event.shapeless('plushies:glow_squid_plushie', [Item.of('exposure:photograph', '{"minecraft:glow_squid":1b}').weakNBT(), 'minecraft:string', 'minecraft:cyan_wool']).id(`${ID_PREFIX}glow_squid_plushie`);
  event.shapeless('plushie_buddies:plushie_goat', [Item.of('exposure:photograph', '{"minecraft:goat":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_goat`);
  event.shapeless('plushie_buddies:plushie_guardian', [Item.of('exposure:photograph', '{"minecraft:guardian":1b}').weakNBT(), 'minecraft:string', 'minecraft:cyan_wool']).id(`${ID_PREFIX}plushie_guardian`);
  event.shapeless('plushie_buddies:plushie_hoglin', [Item.of('exposure:photograph', '{"minecraft:hoglin":1b}').weakNBT(), 'minecraft:string', 'minecraft:pink_wool']).id(`${ID_PREFIX}plushie_hoglin`);
  event.shapeless('plushie_buddies:plushie_horse', [Item.of('exposure:photograph', '{"minecraft:horse":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_horse`);
  event.shapeless('perfectplushies:hummingbird_plushie', [Item.of('exposure:photograph', '{"alexsmobs:hummingbird":1b}').weakNBT(), 'minecraft:string', 'minecraft:cyan_wool']).id(`${ID_PREFIX}hummingbird_plushie`);
  event.shapeless('plushie_buddies:plushie_husk', [Item.of('exposure:photograph', '{"minecraft:husk":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_husk`);
  event.shapeless('plushies:illusioner_plushie', [Item.of('exposure:photograph', '{"minecraft:illusioner":1b}').weakNBT(), 'minecraft:string', 'minecraft:blue_wool']).id(`${ID_PREFIX}illusioner_plushie`);
  event.shapeless('plushie_buddies:plushie_iron_golem', [Item.of('exposure:photograph', '{"minecraft:iron_golem":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_iron_golem`);
  event.shapeless('plushie_buddies:plushie_llama', [Item.of('exposure:photograph', '{"minecraft:llama":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_llama`);
  event.shapeless('plushies:magma_cube_plushie', [Item.of('exposure:photograph', '{"minecraft:magma_cube":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}magma_cube_plushie`);
  event.shapeless('perfectplushies:reindeer_plushie', [Item.of('exposure:photograph', '{"alexsmobs:moose":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}reindeer_plushie`);
  event.shapeless('plushie_buddies:plushie_mooshroom', [Item.of('exposure:photograph', '{"minecraft:mooshroom":1b}').weakNBT(), 'minecraft:string', 'minecraft:red_wool']).id(`${ID_PREFIX}plushie_mooshroom`);
  event.shapeless('plushies:ocelot_plushie', [Item.of('exposure:photograph', '{"minecraft:ocelot":1b}').weakNBT(), 'minecraft:string', 'minecraft:yellow_wool']).id(`${ID_PREFIX}ocelot_plushie`);
  event.shapeless('perfectplushies:panda_plushie', [Item.of('exposure:photograph', '{"minecraft:panda":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}panda_plushie`);
  event.shapeless('plushie_buddies:plushie_parrot', [Item.of('exposure:photograph', '{"minecraft:parrot":1b}').weakNBT(), 'minecraft:string', 'minecraft:red_wool']).id(`${ID_PREFIX}plushie_parrot`);
  event.shapeless('plushie_buddies:plushie_phantom', [Item.of('exposure:photograph', '{"minecraft:phantom":1b}').weakNBT(), 'minecraft:string', 'minecraft:blue_wool']).id(`${ID_PREFIX}plushie_phantom`);
  event.shapeless('plushie_buddies:plushie_pig', [Item.of('exposure:photograph', '{"minecraft:pig":1b}').weakNBT(), 'minecraft:string', 'minecraft:pink_wool']).id(`${ID_PREFIX}plushie_pig`);
  event.shapeless('plushie_buddies:plushie_piglin', [Item.of('exposure:photograph', '{"minecraft:piglin":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_piglin`);
  event.shapeless('plushie_buddies:plushie_piglin_brute', [Item.of('exposure:photograph', '{"minecraft:piglin_brute":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_piglin_brute`);
  event.shapeless('plushie_buddies:plushie_pillager', [Item.of('exposure:photograph', '{"minecraft:pillager":1b}').weakNBT(), 'minecraft:string', 'minecraft:gray_wool']).id(`${ID_PREFIX}plushie_pillager`);
  event.shapeless('plushie_buddies:plushie_polar_bear', [Item.of('exposure:photograph', '{"minecraft:polar_bear":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_polar_bear`);
  event.shapeless('plushies:pufferfish_plushie', [Item.of('exposure:photograph', '{"minecraft:pufferfish":1b}').weakNBT(), 'minecraft:string', 'minecraft:yellow_wool']).id(`${ID_PREFIX}pufferfish_plushie`);
  event.shapeless('perfectplushies:raccoon_plushie', [Item.of('exposure:photograph', '{"alexsmobs:raccoon":1b}').weakNBT(), 'minecraft:string', 'minecraft:gray_wool']).id(`${ID_PREFIX}raccoon_plushie`);
  event.shapeless('perfectplushies:mouse_plushie', [Item.of('exposure:photograph', '{"rats:rat":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}mouse_plushie`);
  event.shapeless('plushies:ravager_plushie', [Item.of('exposure:photograph', '{"minecraft:ravager":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}ravager_plushie`);
  event.shapeless('perfectplushies:hedgehog_plushie', [Item.of('exposure:photograph', '{"alexsmobs:rocky_roller":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}hedgehog_plushie`);
  event.shapeless('plushies:salmon_plushie', [Item.of('exposure:photograph', '{"minecraft:salmon":1b}').weakNBT(), 'minecraft:string', 'minecraft:red_wool']).id(`${ID_PREFIX}salmon_plushie`);
  event.shapeless('plushie_buddies:plushie_rabbit', [Item.of('exposure:photograph', '{"minecraft:rabbit":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_rabbit`);
  event.shapeless('perfectplushies:goose_plushie', [Item.of('exposure:photograph', '{"alexsmobs:seagull":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}goose_plushie`);
  event.shapeless('perfectplushies:seal_plushie', [Item.of('exposure:photograph', '{"alexsmobs:seal":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}seal_plushie`);
  event.shapeless('plushie_buddies:plushie_sheep', [Item.of('exposure:photograph', '{"minecraft:sheep":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_sheep`);
  event.shapeless('perfectplushies:dog_plushie', [Item.of('exposure:photograph', '{"quark:shiba":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}dog_plushie`);
  event.shapeless('plushie_buddies:plushie_shulker', [Item.of('exposure:photograph', '{"minecraft:shulker":1b}').weakNBT(), 'minecraft:string', 'minecraft:purple_wool']).id(`${ID_PREFIX}plushie_shulker`);
  event.shapeless('plushies:silverfish_plushie', [Item.of('exposure:photograph', '{"minecraft:silverfish":1b}').weakNBT(), 'minecraft:string', 'minecraft:gray_wool']).id(`${ID_PREFIX}silverfish_plushie`);
  event.shapeless('plushie_buddies:plushie_skeleton', [Item.of('exposure:photograph', '{"minecraft:skeleton":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_skeleton`);
  event.shapeless('plushie_buddies:plushie_skeleton_horse', [Item.of('exposure:photograph', '{"minecraft:skeleton_horse":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_skeleton_horse`);
  event.shapeless('plushies:slime_plushie', [Item.of('exposure:photograph', '{"minecraft:slime":1b}').weakNBT(), 'minecraft:string', 'minecraft:lime_wool']).id(`${ID_PREFIX}slime_plushie`);
  event.shapeless('plushies:sniffer_plushie', [Item.of('exposure:photograph', '{"minecraft:sniffer":1b}').weakNBT(), 'minecraft:string', 'minecraft:green_wool']).id(`${ID_PREFIX}sniffer_plushie`);
  event.shapeless('plushies:snow_golem_plushie', [Item.of('exposure:photograph', '{"minecraft:snow_golem":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}snow_golem_plushie`);
  event.shapeless('plushie_buddies:plushie_spider', [Item.of('exposure:photograph', '{"minecraft:spider":1b}').weakNBT(), 'minecraft:string', 'minecraft:black_wool']).id(`${ID_PREFIX}plushie_spider`);
  event.shapeless('plushies:squid_plushie', [Item.of('exposure:photograph', '{"minecraft:squid":1b}').weakNBT(), 'minecraft:string', 'minecraft:black_wool']).id(`${ID_PREFIX}squid_plushie`);
  event.shapeless('plushie_buddies:plushie_stray', [Item.of('exposure:photograph', '{"minecraft:stray":1b}').weakNBT(), 'minecraft:string', 'minecraft:gray_wool']).id(`${ID_PREFIX}plushie_stray`);
  event.shapeless('plushie_buddies:plushie_strider', [Item.of('exposure:photograph', '{"minecraft:strider":1b}').weakNBT(), 'minecraft:string', 'minecraft:red_wool']).id(`${ID_PREFIX}plushie_strider`);
  event.shapeless('plushies:tadpole_plushie', [Item.of('exposure:photograph', '{"minecraft:tadpole":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}tadpole_plushie`);
  event.shapeless('perfectplushies:lion_cub_plushie', [Item.of('exposure:photograph', '{"alexsmobs:tiger":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}lion_cub_plushie`);
  event.shapeless('plushie_buddies:plushie_turtle', [Item.of('exposure:photograph', '{"minecraft:turtle":1b}').weakNBT(), 'minecraft:string', 'minecraft:green_wool']).id(`${ID_PREFIX}plushie_turtle`);
  event.shapeless('plushie_buddies:plushie_vex', [Item.of('exposure:photograph', '{"minecraft:vex":1b}').weakNBT(), 'minecraft:string', 'minecraft:light_gray_wool']).id(`${ID_PREFIX}plushie_vex`);
  event.shapeless('plushie_buddies:plushie_villager', [Item.of('exposure:photograph', '{"minecraft:villager":1b}').weakNBT(), 'minecraft:string', 'minecraft:brown_wool']).id(`${ID_PREFIX}plushie_villager`);
  event.shapeless('plushie_buddies:plushie_vindicator', [Item.of('exposure:photograph', '{"minecraft:vindicator":1b}').weakNBT(), 'minecraft:string', 'minecraft:gray_wool']).id(`${ID_PREFIX}plushie_vindicator`);
  event.shapeless('plushie_buddies:plushie_wandering_trader', [Item.of('exposure:photograph', '{"minecraft:wandering_trader":1b}').weakNBT(), 'minecraft:string', 'minecraft:blue_wool']).id(`${ID_PREFIX}plushie_wandering_trader`);
  event.shapeless('plushie_buddies:plushie_warden', [Item.of('exposure:photograph', '{"minecraft:warden":1b}').weakNBT(), 'minecraft:string', 'minecraft:cyan_wool']).id(`${ID_PREFIX}plushie_warden`);
  event.shapeless('plushie_buddies:plushie_witch', [Item.of('exposure:photograph', '{"minecraft:witch":1b}').weakNBT(), 'minecraft:string', 'minecraft:purple_wool']).id(`${ID_PREFIX}plushie_witch`);
  event.shapeless('plushie_buddies:plushie_wither', [Item.of('exposure:photograph', '{"minecraft:wither":1b}').weakNBT(), 'minecraft:string', 'minecraft:black_wool']).id(`${ID_PREFIX}plushie_wither`);
  event.shapeless('plushie_buddies:plushie_wither_skeleton', [Item.of('exposure:photograph', '{"minecraft:wither_skeleton":1b}').weakNBT(), 'minecraft:string', 'minecraft:black_wool']).id(`${ID_PREFIX}plushie_wither_skeleton`);
  event.shapeless('plushie_buddies:plushie_wolf', [Item.of('exposure:photograph', '{"minecraft:wolf":1b}').weakNBT(), 'minecraft:string', 'minecraft:white_wool']).id(`${ID_PREFIX}plushie_wolf`);
  event.shapeless('plushie_buddies:plushie_zoglin', [Item.of('exposure:photograph', '{"minecraft:zoglin":1b}').weakNBT(), 'minecraft:string', 'minecraft:pink_wool']).id(`${ID_PREFIX}plushie_zoglin`);
  event.shapeless('plushie_buddies:plushie_zombie', [Item.of('exposure:photograph', '{"minecraft:zombie":1b}').weakNBT(), 'minecraft:string', 'minecraft:green_wool']).id(`${ID_PREFIX}plushie_zombie`);
  event.shapeless('plushie_buddies:plushie_zombie_villager', [Item.of('exposure:photograph', '{"minecraft:zombie_villager":1b}').weakNBT(), 'minecraft:string', 'minecraft:green_wool']).id(`${ID_PREFIX}plushie_zombie_villager`);
  event.shapeless('plushie_buddies:plushie_zombified_piglin', [Item.of('exposure:photograph', '{"minecraft:zombified_piglin":1b}').weakNBT(), 'minecraft:string', 'minecraft:pink_wool']).id(`${ID_PREFIX}plushie_zombified_piglin`);
});
