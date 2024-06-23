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
      pool.addItem('minecraft:carrot');
    });
  });

  event.modify('bth_structures:battle_grounds', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:potato');
    });
  });

  event.modify('bth_structures:magician_house_loft', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:oak_log');
    });
  });

  event.modify('bth_structures:ruined_hangar_bunker', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:spruce_log');
    });
  });

  event.modify('bth_structures:tinkerer_house_attic', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:string');
    });
  });

  event.modify('bth_structures:tinkerer_house_basement', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:cobblestone');
    });
  });

  event.modify('bth_structures:tinkerer_house_safe', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:diamond');
    });
  });

  event.modify('bth_structures:tinkerer_house_topsecret', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:emerald');
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

  // Add Old Eye to the hidden chest in the Pharao's room
  event.modify('betterdeserttemples:pharaoh_hidden', table => {
    table.addPool(pool => {
      pool.addItem('endrem:old_eye');
    });
  });

});
