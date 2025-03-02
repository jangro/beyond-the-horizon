//priority: 100

/**
 * @file ItemEvents Event Handler
 */

ItemEvents.entityInteracted('bth:spectre_snare', event => {
  const { player, player: { x, y, z }, target } = event;

  let entity_id = target.entityType.toString();
  if (entity_id.startsWith("entity.")) {
    entity_id = entity_id.replace("entity.", "").replace(".", ":");
  }
  //console.log(`Entity ID: ${entity_id}`);
  //const mod = entity_id.split(":")[0];
  const mob = entity_id.split(":")[1];

  console.log(`Player ${player.name} used a snare on ${mob}`);

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
