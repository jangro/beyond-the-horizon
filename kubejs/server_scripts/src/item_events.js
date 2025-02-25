//priority: 100

/**
 * @file ItemEvents Event Handler
 */

ItemEvents.entityInteracted('bth:bounty_hunters_trap', event => {
  const { player, player: { x, y, z }, target } = event;

  // If the item in the main hand has 'entity' NBT tag, return early (don't allow use of filled traps)
  if (player.mainHandItem.nbt) {
    event.cancel();
    return;
  }

  let entity_id = target.entityType.toString();
  if (entity_id.startsWith("entity.")) {
    entity_id = entity_id.replace("entity.", "").replace(".", ":");
  }
  //console.log(`Entity ID: ${entity_id}`);

  // Iterate through player's inventory to find a bounty item
  let has_bounty = false;
  for (let item of player.inventory.items) {
    if (!item || item.id !== 'bountiful:bounty') {
      continue;
    }
    let nbt = item.nbt.toString();
    if (nbt.contains(`bounty_entity:\\\\"${entity_id}\\\\"`)) {
      has_bounty = true;
      break;
    }
  }

  if (!has_bounty) {
    player.tell(Text.translate('bth.chat.bounty_hunters_trap_no_bounty'));
    event.cancel();
    return;
  }

  let item = Item.of('bth:bounty_hunters_trap_used', `{bounty_entity:"${entity_id}",display:{Lore:['{"text":"Contains: ${entity_id}","italic":false,"color":"gray"}']}}`);
  player.mainHandItem.count--;
  player.give(item);
  target.discard();
  event.cancel();
});
