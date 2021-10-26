import React from "react";
import { Offer } from "../utils/types";
import Link from "next/link";
import Image from "next/image";

type Props = {
  offer: Offer;
};

function OffersListCard({ offer }: Props) {
  const link = `/${offer.id}`;
  return (
    <div className="card-container">
      <Link href={link}>
        <a>
          <div className="card-content">
            <div className="logo">
              <Image
                alt={offer.company_name}
                src={offer.company_logo_url}
                layout="fill"
              />
            </div>
            <div className="title">{offer.title}</div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .card-container {
          padding: 0.5rem;
        }
        .card-content {
          display: flex;
          align-items: center;
          background-color: white;
          padding: 0.5rem;
          border-radius: 6px;
          box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%), 0 1px 5px 0 rgb(0 0 0 / 4%);
        }
        .logo {
          min-height: 30px;
          max-height: 40px;
          max-width: 60px;
          position: relative;
          margin-left: 1rem;
          width: 100%;
        }
        .title {
          margin-left: 2rem;
        }
      `}</style>
    </div>
  );
}

export default OffersListCard;
