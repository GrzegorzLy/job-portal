import type { NextPage } from "next";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import { getOffers } from "../utils/offersService";
import { Offer } from "../utils/types";
import OffersList from "../components/OffersList";
import Map from "../components/Map";

const Home: NextPage = () => {
  // TODO too many records
  const { isLoading, error, data } = useQuery<Offer[]>("offers", getOffers);

  if (isLoading) return <Loading />;

  if (error || !data) return <div>Something unexpected happened!</div>;

  return (
    <div className="container">
      <OffersList offers={data} />
      <Map offers={data} />
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
