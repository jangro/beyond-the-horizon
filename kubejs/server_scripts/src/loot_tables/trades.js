// priority: 10

/**
 * @file Merchant / Villager trading table injection / replacement for Beyond the Horizon.
 */

/**
 * Replaces the inputs of a trade with a new item, keeping quantities intact.
 * @param {$OfferExtension} offer 
 * @param {string} oldItem 
 * @param {string} newItem 
 */
const replaceInputs = (offer, oldItem, newItem) => {
  if (offer.getFirstInput().getId() == oldItem) {
    offer.setFirstInput(Item.of(newItem, offer.getFirstInput().count));
  }

  if (offer.getSecondInput().getId() == oldItem) {
    offer.setSecondInput(Item.of(newItem, offer.getSecondInput().count));
  }
};

// Not currently used but leaving this here for future work on actually removing the coin trade entirely.
//const PLAGUE_DOCTOR_TRADES = Java.loadClass("com.github.alexthe666.rats.server.misc.PlagueDoctorTrades").PLAGUE_DOCTOR_TRADES;

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

// Replace Coins in Lightman's Currency Villagers with Create Deco variants.
MoreJSEvents.updateVillagerOffers((event) => {
  if (event.isProfession("lightmanscurrency:banker") || event.isProfession("lightmanscurrency:cashier")) {
    replaceInputs('lightmanscurrency:coin_copper', 'rats:tiny_coin');
    replaceInputs('lightmanscurrency:coin_iron', 'createdeco:copper_coin');
    replaceInputs('lightmanscurrency:coin_gold', 'createdeco:iron_coin');
    replaceInputs('lightmanscurrency:coin_emerald', 'createdeco:gold_coin');
    replaceInputs('lightmanscurrency:coin_diamond', 'createdeco:netherite_coin');
  }
});