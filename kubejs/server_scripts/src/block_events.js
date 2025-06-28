//priority: 100

/**
 * @file BlockEvents Event Handler
 */

// Make all plushies squeek like the ones from @plushie_buddies
[ 'perfectplushies:bear_plushie',
  'perfectplushies:cat_plushie',
  'perfectplushies:doe_plushie',
  'perfectplushies:dog_plushie',
  'perfectplushies:dolphin_plushie',
  'perfectplushies:elephant_plushie',
  'perfectplushies:frog_plushie',
  'perfectplushies:goose_plushie',
  'perfectplushies:hedgehog_plushie',
  'perfectplushies:hummingbird_plushie',
  'perfectplushies:lion_cub_plushie',
  'perfectplushies:monkey_plushie',
  'perfectplushies:mouse_plushie',
  'perfectplushies:panda_plushie',
  'perfectplushies:raccoon_plushie',
  'perfectplushies:red_fox_plushie',
  'perfectplushies:reindeer_plushie',
  'perfectplushies:seal_plushie',
  'plushies:axolotl_plushie',
  'plushies:bat_plushie',
  'plushies:bee_plushie',
  'plushies:blaze_plushie',
  'plushies:cod_plushie',
  'plushies:endermite_plushie',
  'plushies:ghast_plushie',
  'plushies:glow_squid_plushie',
  'plushies:illusioner_plushie',
  'plushies:magma_cube_plushie',
  'plushies:ocelot_plushie',
  'plushies:pufferfish_plushie',
  'plushies:ravager_plushie',
  'plushies:salmon_plushie',
  'plushies:silverfish_plushie',
  'plushies:slime_plushie',
  'plushies:sniffer_plushie',
  'plushies:snow_golem_plushie',
  'plushies:squid_plushie',
  'plushies:tadpole_plushie',
  'plushies:allay_plushie',
].forEach((plushie) => {
  BlockEvents.rightClicked(plushie, event => {
    event.server.runCommandSilent(`execute in ${event.level.dimension} run playsound plushie_buddies:plushie_sound master @p ${event.block.x} ${event.block.y} ${event.block.z}`);
  });
});

BlockEvents.rightClicked("botania:alfheim_portal", event => {
  let player = event.player;
  if (!player || event.hand !== "MAIN_HAND") { return; }

  let heldItem = player.getMainHandItem();
  if (heldItem.id === "bth:mallorn_leaf") {
    event.player.mainHandItem.count--;

    // Define possible random rewards
    const rewards = [
      "botania:dragonstone",
      "botania:elementium_ingot",
      "botania:manasteel_ingot",
      "botania:pixie_dust",
      "botania:quartz_elven",
      "botania:elf_glass",
      "botania:dreamwood_log",
      "bth:ancient_cookie",
      "bth:lembas_bread"
    ];

    let chosenReward = rewards[Math.floor(Math.random() * rewards.length)];
    player.give(chosenReward);
  }
});


//
// Fix compatibility between SoL: Valheim and block food items like cakes and pancakes.
//
const $foodData = Java.loadClass('vice.sol_valheim.ValheimFoodData');

function handleCakeSlice(event, slice) {
  // If the player is holding a knife, just return and don't cancel event allowing the player to get a cake slice item.
  if (event.player.getMainHandItem().hasTag('forge:tools/knives')) {
    return;
  }

  // Otherwise, assume the player wants to eat the cake slice, regardless of what is in their hand.
  let fd = event.player.sol_valheim$getFoodData();
  if (fd.canEat(slice)) {
    event.server.runCommandSilent(`execute in ${event.level.dimension} run playsound minecraft:entity.generic.eat master @p ${event.block.x} ${event.block.y} ${event.block.z}`);
    fd.eatItem(slice);
  } else {
    // player.tell('You are too full to eat this!');
    event.cancel();
  }
}

['adzuki',
  'banana',
  'chocolate',
  'mint',
  'strawberry',
  'vanilla',
].forEach((flavor) => {
  BlockEvents.rightClicked(`neapolitan:${flavor}_cake`, event => {
    handleCakeSlice(event, `abnormals_delight:${flavor}_cake_slice`);
  });
});

BlockEvents.rightClicked('farmersrespite:coffee_cake', event => {
  handleCakeSlice(event, 'farmersrespite:coffee_cake_slice');
});

BlockEvents.rightClicked('createaddition:honey_cake', event => {
  // The honey cake is missing the drop item on knife interaction mechanic so emulate it here.
  if (event.player.getMainHandItem().hasTag('forge:tools/knives')) {
    event.block.popItem('bth:honey_cake_slice');
    return;
  }
  handleCakeSlice(event, 'bth:honey_cake_slice');
});

BlockEvents.rightClicked('supplementaries:pancake', event => {
  const heldItem = event.player.getMainHandItem().id;
  if (heldItem === 'supplementaries:pancake' || heldItem === 'minecraft:honey_bottle') {
    return;
  }
  let fd = event.player.sol_valheim$getFoodData();
  if (fd.canEat('bth:pancake')) {
    fd.eatItem('bth:pancake');
  } else {
    // The 'eat' sound is played regardless here. Not a big deal though.
    event.cancel();
  }
});

/**
 * Prevent breaking a Clibano Furnace from crashing the game.
 */
[
  'forbidden_arcanus:clibano_center',
  'forbidden_arcanus:clibano_corner',
  'forbidden_arcanus:clibano_side_vertical',
  'forbidden_arcanus:clibano_side_horizontal',
].forEach((block) => {
  BlockEvents.broken(block, event => {
    event.block.set('minecraft:air');
    event.cancel();
  });
});

//
// Alex's Caves biome treat is bound to the biome if eaten when the player is starving.
// We don't have starving mechanics so bind it when left clicking a block instead.
//
BlockEvents.leftClicked(event => {
  const heldItem = event.player.getMainHandItem();
  if (heldItem.id !== 'alexscaves:biome_treat') {
    return;
  }
  // If heldItem has the NBT key 'CaveBiome', it is already bound so return early.
  if (heldItem.nbt && heldItem.nbt.CaveBiome) {
    return;
  }
  const biome = event.block.biomeId;
  if (biome) {
    player.mainHandItem = Item.of('alexscaves:biome_treat', `{CaveBiome:"${biome}"}`);
  } else {
    console.warn(`Could not bind Alex's Caves biome treat - biome not found.`);
    return;
  }
});