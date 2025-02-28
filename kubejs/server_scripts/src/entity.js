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

  if (event.entity.type == 'minecraft:llama' && !event.entity.hasCustomName()) {
    // Chance for Llamas to be renamed to Noodle as a reference to Twitch Streamer Xytherea's Mascot.
    if (Math.random() >= 0.99) {
      event.entity.setCustomName('Noodle');
      event.entity.setCustomNameVisible(true);
    }
  } else if (event.entity.type == 'quark:shiba' && !event.entity.hasCustomName()) {
    // Chance for Grey Shibas to be renamed to Ash as a reference to Twitch Streamer BunniesCorner's IRL dog.
    // FIXME: Why is the UUID returned here different to the one stored in the entity's data? (as reported by the `/data get entity` command in-game)
    let least = Math.abs(event.entity.uuid.getLeastSignificantBits())
    let type = least % 3;

    if (type == 2) { // 0 = light brown, 1 = dark brown, 2 = grey
      if (Math.random() >= 0.97) {
        event.entity.setCustomName('Ash');
        event.entity.setCustomNameVisible(true);
      }
    }
  }
});