// priority: 10

/**
 * @file Merchant / Villager trading table injection / replacement for Beyond the Horizon.
 */

/**
 * Replaces the inputs of a trade with a new item, keeping quantities intact.
 * @param {$OfferExtension} offer The trade offer to modify.
 * @param {string} oldItem The ID of the item to replace from.
 * @param {string} newItem The ID of the item to replace to.
 */
const replaceInputs = (offer, oldItem, newItem) => {
  if (offer.getFirstInput().getId() == oldItem) {
    offer.setFirstInput(Item.of(newItem, offer.getFirstInput().count));
  }

  if (offer.getSecondInput().getId() == oldItem) {
    offer.setSecondInput(Item.of(newItem, offer.getSecondInput().count));
  }
};

/**
* Replaces the output of a trade offer with a new item, keeping quantities intact.
 * @param {$OfferExtension} offer The trade offer to modify.
 * @param {string} oldItem The ID of the item to replace from.
 * @param {string} newItem The ID of the item to replace to.
*/
const replaceOutput = (offer, oldItem, newItem) => {
  if (offer.getOutput().getId() == oldItem) {
    offer.setOutput(Item.of(newItem, offer.getOutput().count));
  }
};

/**
* Replaces the inputs and output of a trade offer with a new item, keeping quantities intact.
 * @param {$OfferExtension} offer The trade offer to modify.
 * @param {string} oldItem The ID of the item to replace from.
 * @param {string} newItem The ID of the item to replace to.
*/
const replaceItem = (offer, oldItem, newItem) => {
  replaceInputs(offer, oldItem, newItem);
  replaceOutput(offer, oldItem, newItem);
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

MoreJSEvents.updateVillagerOffers((event) => {
  // Replace Coins in Lightman's Currency Villagers with Create Deco variants.
  if (event.isProfession("lightmanscurrency:banker") || event.isProfession("lightmanscurrency:cashier")) {
    event.getOffers().forEach((offer) => {
      replaceInputs(offer, 'lightmanscurrency:coin_copper', 'rats:tiny_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_iron', 'createdeco:copper_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_gold', 'createdeco:iron_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_emerald', 'createdeco:gold_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_diamond', 'createdeco:netherite_coin');
<<<<<<< Updated upstream
=======
      replaceOutput(offer, 'lightmanscurrency:coinmint', 'botania:cosmetic_black_tie');
      replaceOutput(offer, 'lightmanscurrency:portable_atm', 'rats:top_hat');
      replaceOutput(offer, 'lightmanscurrency:portable_terminal', 'supplementaries:safe');
>>>>>>> Stashed changes
    });
  }

  // Replace FD rope with Supplementaries Rope in Chef trades.
  if (event.isProfession('chefsdelight:delightchef')) {
    event.getOffers().forEach((offer) => {
      replaceItem(offer, 'farmersdelight:rope', 'supplementaries:rope');
    });
  }
});