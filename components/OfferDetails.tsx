import React from "react";
import { Offer } from "../utils/types";
import Image from "next/image";

type Props = {
  offer: Offer;
};

function OfferDetails({ offer }: Props) {
  console.log(offer);
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div className="logo">
            <Image
              alt={offer.company_name}
              src={offer.company_logo_url}
              height={50}
              width={50}
            />
          </div>
          <div className="title">
            <h2>{offer.title}</h2>
            <div>{offer.company_name}</div>
            <div>
              {offer.salary_from} - {offer.salary_to} PLN net/month
            </div>
          </div>
        </div>

        <div className="details">
          <div>
            {offer.city}, {offer.street}
          </div>
          <ul>
            {offer.skills.map((skill) => (
              <li key={skill.name}>
                {skill.name} - level: {skill.level}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 50%;
          overflow-y: scroll;
          overflow-x: hidden;
          background-color: var(--main-second-color);
          padding: 0.5rem;
          overflow: auto;
        }
        .content {
          background-color: white;
          margin: 0.5rem;
          border-radius: 7px;
          padding: 2rem;
        }
        .logo {
          padding: 2rem;
          border-radius: 50%;
          width: max-content;
          height: fit-content;
          border: 1px solid var(--main-second-color);
        }
        .header {
          display: flex;
          align-items: center;
        }
        .title {
          margin-left: 2rem;
          height: max-content;
        }
        .title h2 {
          margin-top: 0;
        }
        .details {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}

export default OfferDetails;
