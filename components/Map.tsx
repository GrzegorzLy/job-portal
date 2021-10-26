import React from "react";
import dynamic from "next/dynamic";
import Loading from "./Loading";
import { Props as MapProps } from "./MapBase";

function Map(props: MapProps) {
  const MapBase = React.useMemo(
    () =>
      dynamic(() => import("./MapBase"), {
        loading: () => <Loading />,
        ssr: false,
      }),
    []
  );

  return (
    <div className="container">
      <MapBase {...props} />

      <style jsx>{`
        .container {
          height: calc(100vh - var(--header-height));
          width: 50%;
        }
      `}</style>
    </div>
  );
}

export default Map;
