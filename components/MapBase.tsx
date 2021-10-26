import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Offer } from "../utils/types";

export type Props = {
  offers: Offer[];
  center?: LatLngExpression;
  zoom?: number;
};

const POLAND_LAT_LONG: LatLngExpression = [51.919, 19.145];

function MapBase({ center, offers, zoom }: Props) {
  console.log(center, offers, zoom);
  return (
    <MapContainer
      center={center ?? POLAND_LAT_LONG}
      zoom={zoom ?? 6}
      scrollWheelZoom={false}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.map((offer) => (
        // TODO add marker cluster
        <Marker key={offer.id} position={[offer.latitude, offer.longitude]}>
          <Popup>{offer.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapBase;
