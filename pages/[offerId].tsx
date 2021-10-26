import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import { getOffers } from "../utils/offersService";
import { Offer } from "../utils/types";
import OfferDetails from "../components/OfferDetails";
import Map from "../components/Map";

const OfferPage: NextPage = () => {
  const router = useRouter();
  const { offerId } = router.query;

  // TODO offers/id query doesn't work
  const { isLoading, error, data } = useQuery<Offer[]>("offers", getOffers);

  if (isLoading) return <Loading />;

  const offer = data?.find((offer) => offer.id === offerId);

  if (error || !data || !offer)
    return <div>Something unexpected happened!</div>;

  return (
    <div className="container">
      <OfferDetails offer={offer} />
      <Map offers={data} zoom={12} center={[offer.latitude, offer.longitude]} />
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default OfferPage;
