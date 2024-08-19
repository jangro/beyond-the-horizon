// priority: 10

/**
 * @file Recipe additions for Create Crafts & Additions' crafting methods.
 */

/**
 * CC&A Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:createaddition/';

  // Liquid Burning for Blaze Burner (when upgraded with straw)

  // Reference Burn Times
  // CC&A values calculated by multiplying the PNC value by 0.048, this causes *most* included fuels to match.
  // PNC values calculated by multiplying the CC&A value by (1000/48) then rounding up to nearest 100k if needed.
  // CC&A values from data/createaddition/recipes/liquid_burning/
  // PNC values from data/pneumaticcraft/recipes/pneumaticcraft_fuels/
  // +-----------+-------+---------+--------------+--------------------------------------------------------------+
  // | Fuel      | CC&A  | PNC     | Superheated? | Notes                                                        |
  // +-----------+-------+---------+--------------+--------------------------------------------------------------+
  // | Biodiesel | 48000 | 1000000 | Yes          |                                                              |
  // | Diesel    | 48000 | 1000000 | Yes          |                                                              |
  // | Gasoline  | 48000 | 1000000 | Yes          |                                                              |
  // | Crude Oil |  9600 |  200000 | No           |                                                              |
  // | Ethanol   |  6000 |  400000 | No           | Ratio is off here but these are default values in both mods. |
  // | Kerosene  | 60000 | 1100000 | Yes          |                                                              |
  // | LPG       | 86400 | 1800000 | Yes          |                                                              |
  // | Creosote  |  4800 |  100000 | No           | TODO: Add Creosote to PNC fuels too, not yet implemented.    |
  // | Plant Oil |  4800 |  100000 | No           | TODO: Add Plant Oil to PNC fuels too, not yet implemented.   |
  // | Lava      | 20000 |  400000 | No           | TODO: Add Lava to PNC fuels too, not yet implemented.        |
  // | Biofuel   | 24000 |  500000 | Yes          | TODO: Add Biofuel to PNC fuels too, not yet implemented.     |
  // +-----------+-------+---------+--------------+--------------------------------------------------------------+

  event.recipes.createaddition.liquid_burning({fluidTag: 'forge:kerosene', amount: 1000}, 60000, true).id(`${ID_PREFIX}kerosene_burning`);
  event.recipes.createaddition.liquid_burning({fluidTag: 'forge:lpg', amount: 1000}, 86400, true).id(`${ID_PREFIX}lpg_burning`);
});