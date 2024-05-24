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
  'simplyswords:advancements/grant_book_on_first_join.json',
  'totw_modded:advancements/derelict_grass_tower.json',
  'totw_modded:advancements/derelict_tower.json',
  'totw_modded:advancements/jungle_tower.json',
  'dungeons_arise:advancements/find_heavenly_challenger.json',
  'dungeons_arise:advancements/find_heavenly_conqueror.json',
  'dungeons_arise:advancements/find_heavenly_rider.json',
  'dungeons_arise:advancements/find_illager_corsair_or_illager_galley.json',
  'dungeons_arise:advancements/find_mechanical_nest.json',
  'dungeons_arise:advancements/find_mushroom_house.json',
  'dungeons_arise:advancements/find_mushroom_mines.json',
  'dungeons_arise:advancements/find_scorched_mines.json',
  'dungeons_arise:advancements/find_small_blimp.json',
  'dungeons_arise:advancements/find_wishing_well.json',
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