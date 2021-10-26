import React from "react";
import { Offer } from "../utils/types";
import OffersListCard from "./OffersListCard";

type Props = {
  offers: Offer[];
};

function OffersList({ offers }: Props) {
  return (
    <div className="container">
      {offers.map((offer) => (
        <OffersListCard key={offer.id} offer={offer} />
      ))}
      <style jsx>{`
        .container {
          width: 50%;
          overflow-y: scroll;
          overflow-x: hidden;
          background-color: var(--main-second-color);
          height: calc(100vh - var(--header-height));
          padding: 0.5rem;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}

export default OffersList;
