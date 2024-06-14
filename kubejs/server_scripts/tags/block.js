// priority: 110

/**
 * @file Block Tag Additions for Beyond the Horizon.
 *
 * These tags differ from item tags in that they impact the block form only,
 * and therefore mainly have in-world effects.
 * 
 * The order of entries here should be:
 *   BTH Tags (if needed)
 *   Minecraft Tags
 *   Forge Tags
 *   All other mods, alphabetically.
 *
 */

/**
 * Block Tag Event Handler
 */
ServerEvents.tags('block', event => {

  // Beyond the Horizon Tags

  // Minecraft Tags
  event.add('minecraft:mineable/pickaxe', [
    'engineersdecor:small_electrical_furnace',
    'engineersdecor:steel_catwalk',
    'engineersdecor:steel_catwalk_ta',
    'engineersdecor:clinker_brick_block',
    'engineersdecor:dark_shingle_roof_wireconduit',
    'engineersdecor:iron_inset_light',
    'engineersdecor:steel_double_t_support',
    'engineersdecor:slag_brick_block',
    'engineersdecor:small_freezer',
    'engineersdecor:clinker_brick_slab',
    'engineersdecor:iron_hatch',
    'engineersdecor:rebar_concrete_stairs',
    'engineersdecor:clinker_brick_stained_slab',
    'engineersdecor:clinker_brick_sastor_corner_block',
    'engineersdecor:rebar_concrete_slab',
    'engineersdecor:metal_rung_steps',
    'engineersdecor:clinker_brick_vertical_slab_structured',
    'engineersdecor:clinker_brick_stained_block',
    'engineersdecor:straight_pipe_valve_redstone_analog',
    'engineersdecor:small_lab_furnace',
    'engineersdecor:slag_brick_slab',
    'engineersdecor:factory_hopper',
    'engineersdecor:iron_ceiling_edge_light',
    'engineersdecor:thin_steel_pole_head',
    'engineersdecor:dark_shingle_roof_metallized',
    'engineersdecor:steel_catwalk_stairs',
    'engineersdecor:metal_sliding_door',
    'engineersdecor:dark_shingle_roof_chimneytrunk',
    'engineersdecor:steel_mesh_fence_gate',
    'engineersdecor:thick_steel_pole_head',
    'engineersdecor:halfslab_rebar_concrete',
    'engineersdecor:metal_rung_ladder',
    'engineersdecor:steel_mesh_fence',
    'engineersdecor:dark_shingle_roof_skylight',
    'engineersdecor:clinker_brick_recessed',
    'engineersdecor:straight_pipe_valve',
    'engineersdecor:rebar_concrete_tile_slab',
    'engineersdecor:rebar_concrete_tile_stairs',
    'engineersdecor:steel_railing',
    'engineersdecor:rebar_concrete',
    'engineersdecor:dark_shingle_roof_block',
    'engineersdecor:dark_shingle_roof',
    'engineersdecor:rebar_concrete_tile',
    'engineersdecor:clinker_brick_vertical_slit',
    'engineersdecor:small_waste_incinerator',
    'engineersdecor:small_milking_machine',
    'engineersdecor:slag_brick_stairs',
    'engineersdecor:fluid_barrel',
    'engineersdecor:small_block_breaker',
    'engineersdecor:small_tree_cutter',
    'engineersdecor:factory_dropper',
    'engineersdecor:iron_bulb_light',
    'engineersdecor:straight_pipe_valve_redstone',
    'engineersdecor:clinker_brick_stained_stairs',
    'engineersdecor:rebar_concrete_wall',
    'engineersdecor:thin_steel_poled',
    'engineersdecor:dark_shingle_roof_chimney',
    'engineersdecor:iron_floor_edge_light',
    'engineersdecor:clinker_brick_stairs',
    'engineersdecor:small_solar_panel',
    'engineersdecor:small_mineral_smelter',
    'engineersdecor:steel_floor_grating',
    'engineersdecor:small_fluid_funnel',
    'engineersdecor:dark_shingle_roof_slabslice',
    'engineersdecor:factory_placer',
    'engineersdecor:steel_framed_window',
    'engineersdecor:thick_steel_pole',
    'engineersdecor:dark_shingle_roof_slab',
    'engineersdecor:panzerglass_slab',
    'engineersdecor:steel_table'
  ]);

  // Forge Tags
  event.add('forge:ores', [
    'alexscaves:coprolith_coal_ore',
    'alexscaves:guanostone_redstone_ore',
    'alexscaves:radrock_uranium_ore',
  ]);

  event.add('forge:ores/coal', [
    'alexscaves:coprolith_coal_ore',
  ]);

  event.add('forge:ores/redstone', [
    'alexscaves:guanostone_redstone_ore',
  ]);

  event.add('forge:ores/uranium', [
    'alexscaves:radrock_uranium_ore',
  ]);

  event.add('forge:storage_blocks/arcane_gold', [
    'forbidden_arcanus:deorum_block',
  ]);

  // Create Tags
  event.add('create:fan_processing_catalysts/haunting', [
    'valhelsia_structures:soul_brazier',
  ]);

  event.add('create:fan_processing_catalysts/smoking', [
    'valhelsia_structures:brazier',
  ]);

  // Tetra Tags
  event.add('tetra:scannable', [
    'forbidden_arcanus:stella_arcanum',
    'irons_spellbooks:arcane_debris'
  ]);

});
