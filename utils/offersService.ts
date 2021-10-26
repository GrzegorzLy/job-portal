export function getOffers() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("Missing api url!");
  }
  return fetch(process.env.NEXT_PUBLIC_API_URL).then((res) => res.json());
}
