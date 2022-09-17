import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-primary p-2  ">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="col text-light">
          <Link href="/">
            <a>
              <h2 className="">Switch.</h2>
            </a>
          </Link>
        </div>

        <div className="col text-light d-flex justify-content-end gap-5 fs-4">
          <Link href="/">
            <a>
              <h4>Home</h4>
            </a>
          </Link>
          <Link href="/experience">
            <a>
              <h4>Experience</h4>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <h4>Contact</h4>
            </a>
          </Link>
          <Link href="/lab-07">
            <a>
              <h4>Lab-07</h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
