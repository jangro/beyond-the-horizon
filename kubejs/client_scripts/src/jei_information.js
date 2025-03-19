// priority: 0

/**
 * @file JEI Information for Beyond the Horizon.
 * 
 */

/**
 * Event handler for adding JEI information.
 */
JEIEvents.information(event => {

  /**
   * Adds translated JEI information pane(s) to one or more items.
   * @param {string|string[]} items The ID(s) of the item(s) to add.
   * @param {string|string[]} textID The language entry/entries for the information.
   */
  const addInfo = (items, textID) => {
    if (Array.isArray(textID)) {
      textID.forEach((id) => event.addItem(items, Text.translate(id)));
    } else {
      event.addItem(items, Text.translate(textID));
    }
  };

  // BTH
  addInfo([
    'bth:bounty_proof_rat',
    'bth:bounty_proof_tiger',
    'bth:bounty_proof_mutant_zombie',
    'bth:bounty_proof_bone_serpent',
    'bth:bounty_proof_mutant_enderman',
    'bth:bounty_proof_mutant_skeleton',
    'bth:bounty_proof_aerwhale',
    'bth:bounty_proof_feral_ratlantean',
    'bth:bounty_proof_murmur',
    'bth:bounty_proof_mimicube',
    'bth:bounty_proof_behemoth',
    'bth:bounty_proof_farseer',
    'bth:bounty_proof_gum_worm',
    'bth:bounty_proof_warped_mosco',
    'bth:bounty_proof_void_worm',
  ], 'bth.information.bth.bounty_proof');

  // Minecraft

  // Bountiful
  addInfo('bountiful:bountyboard', 'bth.information.bountiful.bountyboard');

  // Eccentric Tome
  addInfo('eccentrictome:tome', ['bth.information.eccentrictome.filled_eccentric_tome', 'bth.information.eccentrictome.reverting']);

  // Farmer's Delight
  addInfo(['farmersdelight:brown_mushroom_colony', 'farmersdelight:red_mushroom_colony'], 'bth.information.farmersdelight.mushroom_colonies');

  // Rats
  addInfo('rats:charged_creeper_chunk', 'bth.information.rats.charged_creeper_chunk');
  addInfo('rats:tiny_coin', 'bth.information.rats.tiny_coin');

  // Supplementaries
  addInfo('supplementaries:urn', 'bth.information.supplementaries.urn');

  // Tetra
  addInfo(['minecraft:ancient_debris', 'aether:gravitite_ore', 'irons_spellbooks:arcane_debris', 'forbidden_arcanus:stella_arcanum', 'rats:oratchalcum_ore'], 'bth.information.tetra.scannable_blocks');

  // Waystones
  addInfo('waystones:waystone', 'bth.information.waystones.waystone');

});
