// priority: 10

/**
 * @file Merchant / Villager trading table injection / replacement for Beyond the Horizon.
 */

// Not currently used but leaving this here for future work on actually removing the coin trade entirely.
const PLAGUE_DOCTOR_TRADES = Java.loadClass("com.github.alexthe666.rats.server.misc.PlagueDoctorTrades").PLAGUE_DOCTOR_TRADES;

// Disable the coin trade (how to just remove it?!)
MoreJSEvents.playerStartTrading((event) => {
  if (event.merchant.getClass().getName().includes('PlagueDoctor')) {
    event.forEachOffers((offer) => {
      if (offer.getResult().getItem() == 'token_fragment') {
        offer.disabled = true;
      }
    });
  }
});