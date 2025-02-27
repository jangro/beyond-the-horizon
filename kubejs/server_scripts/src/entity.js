//priority: 100

/**
 * @file Entity Events
 */

// EntityEvents.hurt(event => {
//   let attacker = event.source.actual;
//   let victim = event.entity;
//   if (attacker == null || !attacker.living) {
//     return;
//   }
  
//   if (!(attacker.mainHandItem.id == "bth:coconut_maul")) {
//     return;
//   }

//   victim.potionEffects.add("poison", 60 * 20, 1);
// });

// EntityEvents.death(event => {
  
// });

/**
 * Entity Spawn Event Handler
 */
EntityEvents.spawned(event => {
  // Easter Egg - chance for llamas to get renamed to Noodle if they don't already have a name (only when first spawned).
  // This is a reference to the mascot of Xytherea on Twitch.
  if (event.entity.type == 'minecraft:llama' && !event.entity.hasCustomName()) {
    if (Math.random() >= 0.99) {
      event.entity.setCustomName('Noodle');
      event.entity.setCustomNameVisible(true);
    }
  }
});