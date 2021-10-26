export function getOffers() {
  return fetch("https://test.justjoin.it/offers").then((res) => res.json());
}
