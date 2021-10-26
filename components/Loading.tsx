import React from "react";
import Link from "next/link";

export default function Loading() {
  return (
    <div>
      <h1>Loading...</h1>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: calc(100vh - 10rem);
        }
      `}</style>
    </div>
  );
}
