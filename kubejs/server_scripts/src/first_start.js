// priority: 5                  

/**
 * @file First Start Script - Handles the first time a player joins a world (whether single- or multiplayer).
 * 
 * This includes things like introductory chat messages + links, starting items, and anything else that needs 
 * to be set just once the first time a player connects.
 */

/**
 * Player Login Event Handler
 */
PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start');

    event.player.tell(Text.translate('bth.chat.first_start_message'));

    event.player.give(Item.of('eccentrictome:tome', ECCENTRIC_TOME_NBT));

    // Give player a wallet with slightly random amount of coins
    let count = 3 + Math.floor(7 * Math.random());
    event.player.give(Item.of('lightmanscurrency:wallet_leather', '{Items:[{Count:' + count + 'b,Slot:0b,id:"rats:tiny_coin"}]}'));

    // Give player some random starter food
    let index = Math.floor(FIRST_START_FOODS.length * Math.random());
    event.player.give(Item.of(FIRST_START_FOODS[index], 8));
  }

  if (!event.player.stages.has('first_start_v2')) {
    event.player.stages.add('first_start_v2');

    // Give player 3 ancient cookies for random teleportation
    event.player.give('3x bth:ancient_cookie');
  }

  // Note: If added to in the future, creating multiple stages would allow players updating the pack to receive any new
  // "first start" items / settings / whatever.
  // eg. instead of 'first_start', use 'first_start_v2', 'first_start_v3' to allow versioning the first start script.
});
