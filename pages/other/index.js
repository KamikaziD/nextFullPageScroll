import React from "react";
import Link from "next/link";

export default function Other() {
  return (
    <>
      <div>
        <h1>Other Page</h1>
        <Link href="/#passport">
          <a>Section 2</a>
        </Link>
        <Link href="/#documents">
          <a>Section 4</a>
        </Link>
      </div>
    </>
  );
}
