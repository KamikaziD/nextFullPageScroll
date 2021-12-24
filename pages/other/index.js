import React from "react";
import Link from "next/link";

export default function Other() {
  return (
    <>
      <div>
        <h1>Other Page</h1>
        <Link href="/#passport">
          <a>#passport</a>
        </Link>{" "}
        <Link href="/#casino">
          <a>Section 4</a>
        </Link>
      </div>
    </>
  );
}
