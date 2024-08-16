// priority: 10

/**
 * @file Chest loot table injection / replacement for Beyond the Horizon.
 */

/**
 * Chest Loot Table Event Handler
 */
ServerEvents.chestLootTables(event => {
  // BTH Structures
  event.modify('bth_structures:aether_portal_framed', table => {
    table.addPool(pool => {
      pool.addItem('aether:zanite_pickaxe', 10).enchantWithLevels(2, true).damage([0.3, 0.9]);
      pool.addItem('aether:valkyrie_pickaxe', 10).enchantWithLevels(1, true).damage([0.3, 0.9]);
      pool.addItem('aether:golden_parachute', 10);
    });
    table.addPool(pool => {
      pool.rolls = [3, 6];
      pool.addItem('aether:enchanted_berry', 10, [1, 5]);
      pool.addItem('quark:bottled_cloud', 1);
      pool.addItem('aether:golden_dart', 10, [8, 32]);
      pool.addItem('aether:gold_dart_shooter', 1);
      pool.addItem('aether:golden_ring', 3);
      pool.addItem('aether:zanite_ring', 3);
      pool.addItem('aether:iron_gloves', 5);
      pool.addItem('aether:golden_gloves', 5);
      pool.addItem('aether:white_cape', 6);
      pool.addItem('aether:book_of_lore', 1);
      pool.addItem('aether:ambrosium_torch', 10, [4, 10]);
    });
  });

  event.modify('bth_structures:battle_grounds', table => {
    table.addPool(pool => {
      pool.rolls = [4, 8];
      pool.addItem('ae2:nether_quartz_sword', 10).damage([0.3, 0.9]);
      pool.addItem('aether:enhanced_dart', 10, [8, 32]);
      pool.addItem('aether:enhanced_dart_shooter', 10);
      pool.addItem('aether:holy_sword', 10).damage([0.3, 0.9]);
      pool.addItem('aether:ice_pendant', 10);
      pool.addItem('aether:lightning_knife', 10);
      pool.addItem('aether:lightning_sword', 10).damage([0.3, 0.9]);
      pool.addItem('aether:obsidian_gloves', 10).damage([0.3, 0.9]);
      pool.addItem('aether:phoenix_chestplate', 10).damage([0.3, 0.9]);
      pool.addItem('aether:pig_slayer', 10).damage([0.3, 0.9]);
      pool.addItem('aether:valkyrie_helmet', 10).damage([0.3, 0.9]);
      pool.addItem('aether:valkyrie_lance', 10).damage([0.3, 0.9]);
      pool.addItem('aether:zanite_axe', 10).damage([0.3, 0.9]);
      pool.addItem('endrem:nether_eye', 10);
      pool.addItem('immersive_armors:wither_boots', 10).damage([0.3, 0.9]);
      pool.addItem('immersive_armors:wither_chestplate', 10).damage([0.3, 0.9]);
      pool.addItem('immersive_armors:wither_helmet', 10).damage([0.3, 0.9]);
      pool.addItem('immersive_armors:wither_leggings', 10).damage([0.3, 0.9]);
      pool.addItem('irons_spellsbooks:keeper_flamberge', 10);
      pool.addItem('nethersdelight:warped_moldy_meat', 10);
      pool.addItem('travelersbackpack:nether', 10);
    });
  });

  event.modify('bth_structures:magician_house_loft', table => {
    table.addPool(pool => {
      pool.rolls = [3, 6];
      pool.addItem('forbidden_arcanus:arcance_crystal_dust', 10, [2, 4]);
      pool.addItem('forbidden_arcanus:arcane_bone_meal', 10);
      pool.addItem('forbidden_arcanus:edelwood_bucket', 10, [1, 2]);
      pool.addItem('forbidden_arcanus:golden_blacksmith_gavel', 10).damage([0.3, 0.9]);
      pool.addItem('forbidden_arcanus:sanity_meter', 10);
      pool.addItem('forbidden_arcanus:spawner_scrap', 10);
      pool.addItem('forbidden_arcanus:test_tube', 10, [1, 3]);
      pool.addItem('minecraft:blaze_powder', 10, [1, 3]);
      pool.addItem('minecraft:bone_meal', 10, [1, 8]);
      pool.addItem('minecraft:gunpowder', 10, [1, 4]);
      pool.addItem('minecraft:lapis_lazuli', 10, [4, 16]);
      pool.addItem('minecraft:phantom_membrane', 10, [1, 3]);
      pool.addItem('minecraft:redstone', 10, [1, 12]);
    });
  });

  event.modify('bth_structures:ruined_hangar_bunker', table => {
    table.addPool(pool => {
      pool.rolls = [1, 2];
      pool.addItem('immersive_aircraft:eco_engine');
      pool.addItem('immersive_aircraft:sturdy_pipes');
      pool.addItem('immersive_aircraft:enhanced_propeller');
      pool.addItem('immersive_aircraft:heavy_crossbow');
    });
  });

  event.modify('bth_structures:tinkerer_house_attic', table => {
    table.addPool(pool => {
      pool.rolls = [3, 6];
      // TODO: add something interesting
      pool.addItem('minecraft:cobweb');
    });
  });

  event.modify('bth_structures:tinkerer_house_basement', table => {
    table.addPool(pool => {
      pool.addItem('galosphere:salted_jerky', 1, [1, 6]);
    });
  });

  event.modify('bth_structures:tinkerer_house_safe', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:diamond', 1, [1, 4]);
    });
    table.addPool(pool => {
      pool.addItem('artifacts:crystal_heart', 3);
      pool.addItem('rats:tiny_coin', 10, [8, 16]);
    });
  });

  event.modify('bth_structures:tinkerer_house_topsecret', table => {
    table.addPool(pool => {
      pool.addItem('pneumaticcraft:vortex_tube');
    });
    table.addPool(pool => {
      pool.addItem('pneumaticcraft:heat_sink');
    });
    table.addPool(pool => {
      pool.addItem('pneumaticcraft:pressure_tube', 1, [2, 8]);
    });
  });

  // The chest on top of BTH Towers (forest, frozen, and scarlet)
  event.modify('bth_structures:tower_top', table => {
    table.addPool(pool => {
      pool.addItem('paraglider:paraglider', 5);
      pool.addItem('paraglider:deku_leaf', 1);
    });
    table.addPool(pool => {
      pool.addItem('paraglider:stamina_vessel').randomChance(0.8);
    });
    table.addPool(pool => {
      pool.addItem(DESERT_MAP);
      pool.addItem(FLOWER_FOREST_MAP);
      pool.addItem(JUNGLE_MAP);
      pool.addItem(SWAMP_MAP);
      pool.addItem(LUSH_CAVES_MAP);
      pool.addItem(CHERRY_GROVE_MAP);
    });
    table.addPool(pool => {
      pool.addItem('rats:tiny_coin', 1, [8, 16]).randomChance(0.5);
    });
    table.addPool(pool => {
      pool.addItem('minecraft:spyglass').randomChance(0.5);
    });
    table.addPool(pool => {
      pool.addItem('galosphere:salted_jerky', 1, [1, 6]).randomChance(0.5);
    });
  });

  // Chest in the cabin of the industrial watch tower
  event.modify('bth_structures:watch_tower_top', table => {
    table.addPool(pool => {
      pool.addItem('paraglider:paraglider', 5);
      pool.addItem('paraglider:deku_leaf', 1);
    });
    table.addPool(pool => {
      pool.addItem('paraglider:stamina_vessel').randomChance(0.8);
    });
    table.addPool(pool => {
      pool.addItem(DESERT_MAP);
      pool.addItem(FLOWER_FOREST_MAP);
      pool.addItem(JUNGLE_MAP);
      pool.addItem(SWAMP_MAP);
      pool.addItem(LUSH_CAVES_MAP);
      pool.addItem(CHERRY_GROVE_MAP);
    });
    table.addPool(pool => {
      pool.addItem('minecraft:spyglass');
    });
  });

  // Additional Cooking Chest Loot (Valhelsia Structures)
  [
    'valhelsia_structures:desert_house',
    'valhelsia_structures:player_house',
    'valhelsia_structures:kitchen',
  ].forEach(function(chestID) {
    event.modify(chestID, table => {
      table.addPool(pool => {
        pool.rolls = [1, 4];
        pool.addItem('farmersdelight:cooked_bacon', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_cod_slice', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_salmon_slice', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_mutton_chops', 18, [2, 3]);
        pool.addItem('farmersdelight:smoked_ham', 18, [2, 3]);
        pool.addItem('farmersdelight:rice', 15, [2, 6]);
        pool.addItem('farmersdelight:onion', 15, [2, 6]);
        pool.addItem('farmersdelight:cabbage_seeds', 15, [2, 6]);
        pool.addItem('farmersdelight:tomato_seeds', 15, [2, 6]);
        pool.addItem('farmersdelight:cooking_pot', 3);
        pool.addItem('farmersdelight:skillet', 3);
        pool.addItem('farmersdelight:cutting_board', 6);
        pool.addItem('farmersdelight:iron_knife', 4);
        pool.addItem('supplementaries:rope', 10, [3, 9]);
      });
    });
  });

  // Additional Forge Chest Loot (Valhelsia Structures)
  event.modify('valhelsia_structures:forge', table => {
    table.addPool(pool => {
      pool.rolls = [1, 3];
      pool.addItem('minecraft:raw_iron', 10, [3, 6]);
      pool.addItem('minecraft:raw_gold', 7, [2, 5]);
      pool.addItem('minecraft:raw_copper', 7, [2, 5]);
      pool.addItem('minecraft:copper_ingot', 7, [1, 3]);
      pool.addItem('forbidden_arcanus:stone_blacksmith_gavel', 15);
      pool.addItem('forbidden_arcanus:iron_blacksmith_gavel', 10);
      pool.addItem('forbidden_arcanus:diamond_blacksmith_gavel', 2);
      pool.addItem('immersiveengineering:ingot_steel', 7, [1, 3]);
      pool.addItem('pneumaticcraft:ingot_iron_compressed', 6, [1, 3]);
    });
  });

  // Additional Castle Ruin Loot (Valhelsia Structures)
  event.modify('valhelsia_structures:castle_ruin', table => {
    table.addPool(pool => {
      pool.rolls = [0, 1];
      pool.addItem(Item.of('minecraft:player_head', '{SkullOwner:"Ollari0n"}'), 5);
      pool.addItem('immersiveengineering:sword_steel', 5);
      pool.addItem('immersiveengineering:axe_steel', 5);
      pool.addItem('irons_spellbooks:iron_spell_book', 10);
    });
  });

  // Additional Witch Hut Loot (Valhelsia Structures)
  event.modify('valhelsia_structures:witch_hut', table => {
    table.addPool(pool => {
      pool.rolls = [1, 2];
      pool.addItem('ars_nouveau:dominion_wand', 2);
      pool.addItem('ars_nouveau:wand', 3);
      pool.addItem('ars_nouveau:wixie_shards', 5);
      pool.addItem('endrem:witch_pupil', 12, 1);
      pool.addItem('irons_spellbooks:cinder_essence', 12, [1, 3]);
      pool.addItem('irons_spellbooks:gold_spell_book', 10);
      pool.addItem('irons_spellbooks:diamond_spell_book', 5);
      pool.addItem('forbidden_arcanus:corrupt_soul', 5);
    });
  });

  // Add Nether Eye to treasure chest of The Aether's final boss
  event.modify('aether:dungeon/gold/gold_dungeon_treasure', table => {
    table.addPool(pool => {
      pool.addItem('endrem:nether_eye');
    });
  });

  // Add Old Eye to the hidden chest in the Pharaoh's room
  event.modify('betterdeserttemples:pharaoh_hidden', table => {
    table.addPool(pool => {
      pool.addItem('endrem:old_eye');
    });
  });

});