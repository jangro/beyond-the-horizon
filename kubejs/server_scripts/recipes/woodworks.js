// priority: 10

/**
 * @file Additions, removals, and changes for Woodworks sawmill recipes in Beyond the Horizon.
 */

/**
 * Sawing Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:sawing/';

  /**
   * Adds a sawing recipe for the sawmill.
   * @param {(string|Item)} output Resulting sawed item.
   * @param {(string|Item)} input Ingredient to be sawed.
   * @param {Number} quantity Number of output items yielded.
   */
  const saw = (output, input, quantity) => {
    // TODO: Determine quantity from the output parameter rather than having it as a separate parameter.

    event.custom({
      type: 'woodworks:sawmill',
      ingredient: InputItem.of(input).ingredient.toJson(),
      result: Item.of(output).toJson(),
      count: quantity,
    }).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  // Enlightend
  saw('everycomp:abnww/enlightened_end/indigo_boards', '#enlightened_end:indigo_stems', 4);

});
