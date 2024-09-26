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

  // Minecraft

  // Eccentric Tome
  addInfo('eccentrictome:tome', ['bth.information.eccentrictome.filled_eccentric_tome', 'bth.information.eccentrictome.reverting']);

  // Farmer's Delight
  addInfo(['farmersdelight:brown_mushroom_colony', 'farmersdelight:red_mushroom_colony'], 'bth.information.farmersdelight.mushroom_colonies');

  // Tetra
  addInfo(['minecraft:ancient_debris', 'aether:gravitite_ore', 'irons_spellbooks:arcane_debris', 'forbidden_arcanus:stella_arcanum', 'rats:oratchalcum_ore'], 'bth.information.tetra.scannable_blocks');

});
