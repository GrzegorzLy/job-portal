import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <Link href="/">
        <a>Jobs portal</a>
      </Link>
      <style jsx>{`
        header {
          position: fixed;
          left: 0;
          right: 0;
          padding: 1rem;
          font-size: 18px;
          border-bottom: 1px solid var(--main-second-color);
          background-color: white;
          z-index: 1;
          max-height: var(--header-height);
        }
      `}</style>
    </header>
  );
}
