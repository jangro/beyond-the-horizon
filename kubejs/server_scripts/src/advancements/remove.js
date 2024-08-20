// priority: 15

/**
 * @file Removes unused / undesired advancements from the pack.
 */

/**
 * Which advancements to remove from the pack.
 * These should be the resource location of the advancement, including the .json file extension.
 * @example Example entry: 'irons_spellbooks:advancements/grant_patchouli.json'
 * @const {!string[]}
 */
const ADVANCEMENTS_TO_REMOVE = [
  'irons_spellbooks:advancements/grant_patchouli.json',
  'paraglider:advancements/statues_bargain.json',
  'paraglider:advancements/pray_to_the_goddess.json',
  'seavil:advancements/setup_undersea.json',
  'simplyswords:advancements/grant_book_on_first_join.json',
];

/**
 * Empty advancement JSON, for the purposes of effectively deleting an advancement (but without triggering errors).
 * @const {!Object}
 */
const EMPTY_ADVANCEMENT = {criteria:{impossible:{trigger:'minecraft:impossible'}}};

/**
 * Event handler for KubeJS's virtual datapack. Removes unused / undesired advancements
 * from the pack.
 */
ServerEvents.highPriorityData(event => {
  // Remove specified advancements.
  ADVANCEMENTS_TO_REMOVE.forEach(file => {
    event.addJson(file, EMPTY_ADVANCEMENT);
  });
});
