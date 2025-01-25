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
    event.addTrade(2, TradeItem.of('createdeco:gold_coin', 2, 2), 'rats:chunky_cheese_token');
  }
});

MoreJSEvents.wandererTrades((event) => {
  // Remove all default trades (some are also removed through datapacks in minecraft/moonlight/villager_trades//wandering_trader/)
  event.removeVanillaTrades(1);
  event.removeVanillaTrades(2);
  event.removeModdedTrades(1);
  event.removeModdedTrades(2);

  // Level 1 trades:
  // Common
  event.addTrade(1, TradeItem.of('rats:tiny_coin', 1, 3), 'supplementaries:flax_seeds');
  // Uncommon
  event.addTrade(1, TradeItem.of('rats:tiny_coin', 4, 7), 'farmersrespite:tea_seeds');
  event.addTrade(1, TradeItem.of('rats:tiny_coin', 1, 3), 'eidolon:illwood_sapling');
  // Rare
  event.addTrade(1, TradeItem.of('createdeco:copper_coin', 1, 2), 'minecraft:slime_ball');
  event.addTrade(1, TradeItem.of('createdeco:copper_coin', 2, 6), 'supplementaries:globe');
  event.addTrade(1, TradeItem.of('createdeco:copper_coin', 2, 6), 'botania:white_mystical_flower');
  event.addTrade(1, TradeItem.of('createdeco:copper_coin', 2, 6), 'forbidden_arcanus:yellow_orchid');
  event.addTrade(1, TradeItem.of('createdeco:copper_coin', 6, 9), 'forbidden_arcanus:nipa');

  // Level 2 trades: (only 1 of these will be selected)
  event.addTrade(2, TradeItem.of('createdeco:iron_coin', 1, 3), 'minecraft:nether_wart');
  event.addTrade(2, TradeItem.of('createdeco:iron_coin', 1, 3), 'farmersrespite:coffee_berries');
  event.addTrade(2, TradeItem.of('createdeco:iron_coin', 1, 3), 'blazingbamboo:blazing_bamboo_item');
  event.addTrade(2, TradeItem.of('createdeco:iron_coin', 3, 5), 'minecraft:chorus_fruit');
  event.addTrade(2, TradeItem.of('createdeco:iron_coin', 4, 7), 'minecraft:chorus_flower');
  event.addTrade(2, TradeItem.of('createdeco:gold_coin', 2, 2), 'rats:chunky_cheese_token');
});

MoreJSEvents.villagerTrades((event) => {
  // Remove all default trades
  event.removeModdedTrades('lightmanscurrency:cashier', 'novice');
  event.removeModdedTrades('lightmanscurrency:cashier', 'apprentice');
  event.removeModdedTrades('lightmanscurrency:cashier', 'journeyman');
  event.removeModdedTrades('lightmanscurrency:cashier', 'expert');
  event.removeModdedTrades('lightmanscurrency:cashier', 'master');

  // BTH: villager xp is set so that 10 food trades is required to level up for each level, utils trade gives double the xp.

  // <=5 minute foods
  var trade = event.addTrade('lightmanscurrency:cashier', 1, TradeItem.of('rats:tiny_coin', 1, 2), 'alexsmobs:banana'); // 5 minutes, 2 hearts
  trade.villagerExperience(1);
  trade = event.addTrade('lightmanscurrency:cashier', 1, TradeItem.of('rats:tiny_coin', 1, 2), 'farmersrespite:coffee'); // 5 minutes, 1 heart
  trade.villagerExperience(1);

  // 6-10 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 2, TradeItem.of('rats:tiny_coin', 2, 4), 'miners_delight:baked_squid'); // 7 minutes, 3 hearts
  trade.villagerExperience(6);
  trade = event.addTrade('lightmanscurrency:cashier', 2, TradeItem.of('rats:tiny_coin', 2, 4), 'pneumaticcraft:chips'); // 9 minutes, 2.5 hearts
  trade.villagerExperience(6);

  // 11-15 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 3, TradeItem.of('rats:tiny_coin', 3, 6), 'nethersdelight:nether_skewer'); // 11 minutes, 3.5 hearts
  trade.villagerExperience(8);
  trade = event.addTrade('lightmanscurrency:cashier', 3, TradeItem.of('rats:tiny_coin', 3, 6), 'neapolitan:vanilla_chocolate_fingers') // 11 minutes, 3 hearts
  trade.villagerExperience(8);

  // 16-25 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 4, TradeItem.of('rats:tiny_coin', 4, 8), 'miners_delight:vegan_wrap'); // 21 minutes, 5 hearts
  trade.villagerExperience(11);
  trade = event.addTrade('lightmanscurrency:cashier', 4, TradeItem.of('rats:tiny_coin', 4, 8), 'farmersdelight:milk_bottle'); // 23 minutes, 3.5 hearts
  trade.villagerExperience(11);

  // >26 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 5, TradeItem.of('rats:tiny_coin', 5, 10), 'farmersdelight:hamburger'); // 34 minutes, 6.5 hearts
  trade.villagerExperience(16);
  trade = event.addTrade('lightmanscurrency:cashier', 5, TradeItem.of('rats:tiny_coin', 5, 10), 'pneumaticcraft:cod_n_chips'); // 36 minutes, 6 hearts
  trade.villagerExperience(16);

  // Utilities
  trade = event.addTrade('lightmanscurrency:cashier', 1, TradeItem.of('createdeco:copper_coin', 1, 2), 'astikorcarts:supply_cart');
  trade.villagerExperience(2);
  trade = event.addTrade('lightmanscurrency:cashier', 2, TradeItem.of('createdeco:copper_coin', 2, 4), 'sophisticatedbackpacks:backpack');
  trade.villagerExperience(12);
  trade = event.addTrade('lightmanscurrency:cashier', 3, TradeItem.of('createdeco:copper_coin', 3, 6), 'paraglider:paraglider');
  trade.villagerExperience(16);
  trade = event.addTrade('lightmanscurrency:cashier', 4, TradeItem.of('createdeco:copper_coin', 4, 8), 'smallships:oak_cog');
  trade.villagerExperience(22);
  trade = event.addTrade('lightmanscurrency:cashier', 5, TradeItem.of('createdeco:copper_coin', 5, 10), 'immersiveengineering:glider');
  trade.villagerExperience(32);

});

MoreJSEvents.updateVillagerOffers((event) => {
  if (event.isProfession("lightmanscurrency:banker")) {
    event.getOffers().forEach((offer) => {
      // Replace Coins in Lightman's Currency Villagers with Create Deco variants.
      replaceInputs(offer, 'lightmanscurrency:coin_copper', 'rats:tiny_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_iron', 'createdeco:copper_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_gold', 'createdeco:iron_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_emerald', 'createdeco:gold_coin');
      replaceInputs(offer, 'lightmanscurrency:coin_diamond', 'createdeco:netherite_coin');

      // Replace some disabled items with new alternatives.
      replaceOutput(offer, 'lightmanscurrency:coinmint', 'botania:cosmetic_black_tie');
      replaceOutput(offer, 'lightmanscurrency:portable_atm', 'rats:top_hat');
      replaceOutput(offer, 'lightmanscurrency:portable_terminal', 'supplementaries:safe');
    });
  }

  // Replace FD rope with Supplementaries Rope in Chef trades.
  if (event.isProfession('chefsdelight:delightchef')) {
    event.getOffers().forEach((offer) => {
      replaceItem(offer, 'farmersdelight:rope', 'supplementaries:rope');
    });
  }
});
