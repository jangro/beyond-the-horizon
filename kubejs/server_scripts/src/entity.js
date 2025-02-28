//priority: 100

/**
 * @file Entity Events
 */


/**
 * Easter Egg Handler
 */
EntityEvents.spawned(event => {
  if (!event.entity.getTags().contains('bth.easter_egg_checked')) {
    event.entity.addTag('bth.easter_egg_checked');
  } else {
    return;
  }

  if (event.entity.hasCustomName()) {
    return;
  }

  switch(event.entity.type) {
    case 'minecraft:llama':
      // Chance for Llamas to be renamed to Noodle as a reference to Twitch Streamer Xytherea's Mascot.
      if (Math.random() >= 0.99) {
        event.entity.setCustomName('Noodle');
        event.entity.setCustomNameVisible(true);
      }
      break;

    case 'quark:shiba':
      // Chance for Grey Shibas to be renamed to Ash as a reference to Twitch Streamer BunniesCorner's IRL dog.
      // This is more complicated than it should be because JavaScript doesn't support 64-bit integers.
      let least = getLeastSignificantBitsBigInt(event.entity.uuid);
      let type = least.mod($BigInteger.valueOf(3));
      if (type == 2) { // 0 = light brown, 1 = dark brown, 2 = grey
        if (Math.random() >= 0.97) {
          event.entity.setCustomName('Ash');
          event.entity.setCustomNameVisible(true);
        }
      }
      break;
  }
});