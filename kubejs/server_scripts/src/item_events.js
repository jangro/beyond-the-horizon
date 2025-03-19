//priority: 100

/**
 * @file ItemEvents Event Handler
 */

//
// Add bounty proof to the player's inventory when interacting with a mob using spectre snare
//
ItemEvents.entityInteracted('bth:spectre_snare', event => {
  const { player, player: { x, y, z }, target } = event;

  let entity_id = target.entityType.toString();
  if (entity_id.startsWith("entity.")) {
    entity_id = entity_id.replace("entity.", "").replace(".", ":");
  }
  //console.log(`Entity ID: ${entity_id}`);
  //const mod = entity_id.split(":")[0];
  const mob = entity_id.split(":")[1];

  // Iterate through player's inventory to find a bounty item
  let has_bounty = false;
  for (let item of player.inventory.items) {
    if (!item || item.id !== 'bountiful:bounty') {
      continue;
    }
    let nbt = item.nbt.toString();
    if (nbt.contains(`bth:bounty_proof_${mob}`) && !nbt.contains('pingComplete')) {
      has_bounty = true;
      break;
    }
  }

  if (!has_bounty) {
    player.tell(Text.translate('bth.chat.no_bounty'));
    event.cancel();
    return;
  }

  let item = player.mainHandItem; // Get item in the main hand
  if (!item.isEmpty()) { // Check if player is holding an item
    let currentDamage = item.nbt["Damage"] || 0; // Get current damage of the item
    let maxDamage = item.maxDamage; // Get max durability of the item
    let newDamage = currentDamage + 1; // Increase damage by 1
    if (newDamage >= maxDamage) {
      item.count = 0; // Break the item
    } else {
      item.nbt["Damage"] = newDamage; // Set new damage
    }
  }

  let proof = Item.of(`bth:bounty_proof_${mob}`);
  player.give(proof);
  target.discard();
  event.cancel();
});

//
// Fix compatibility between SoL: Valheim and rat with carrat upgrade
//
ItemEvents.entityInteracted(event => {
  let entity_id = event.target.entityType.toString();
  if (entity_id == 'entity.rats.tamed_rat') {
    // TODO? Check the json structure instead of string matching
    const nbt = event.target.nbt.toString();
    if (nbt.contains('rat_upgrade_carrat')) {
      let fd = event.player.sol_valheim$getFoodData();
      if (fd.canEat('rats:assorted_vegetables')) {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run playsound minecraft:entity.generic.eat master @p ${event.entity.x} ${event.entity.y} ${event.entity.z}`);
        fd.eatItem('rats:assorted_vegetables');
        event.cancel();
      }
    }
  }
});

//
// Improve lunch basket functionality. By default you have to close the basket to cycle food with sneak-right click.
// This code allows you to cycle food with sneak-right click while the basket is open as well.
//
ItemEvents.rightClicked('supplementaries:lunch_basket', event => {
  let stack = event.player.getMainHandItem();
  let item = stack.item;
  if (item.getData) {
    let data = item.getData(stack);
    if (data && data.canEatFrom && data.cycle) {
      const open = data.canEatFrom();
      if (open && event.player.crouching) {
        data.cycle(1);
        event.cancel();
      }
    }
  }
});
