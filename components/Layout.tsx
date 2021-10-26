import Navbar from "./Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <style jsx>{`
        main {
          padding-top: 54px;
        }
      `}</style>
    </>
  );
}
