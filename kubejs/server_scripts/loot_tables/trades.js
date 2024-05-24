
/**
 * @file Merchant / Village trading table injection / replacement for Beyond the Horizon.
 */


// Disable the coin trade (how to just remove it?!)
MoreJSEvents.playerStartTrading((event) => {
  if (event.merchant.getClass().getName().includes("PlagueDoctor")) {
    event.forEachOffers((o, i) => {
      if (o.getResult().getItem() == "token_fragment") {
        o.disabled = true;
      }
    });
  }
});
