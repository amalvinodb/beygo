"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./headers.css";
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full items-center fixed">
      <nav
        className="flex justify-between h-[60px] max-w-[660px] w-full bg-white items-center rounded-4xl drop-shadow-xl"
        style={{ padding: "30px", marginTop: "20px" }}
      >
        <div className="">
          <div className="header-logo">
            <span className="b">b</span>
            <span className="e">e</span>
            <span className="y">y</span>
            <span className="g">g</span>
            <span className="o">o</span>
          </div>
        </div>
        {/* This div will show only when the screen width is 760px or more */}
        <div style={{ paddingLeft: "20px" }}>
          <div className="hidden md:block">
            <ul className="list-none flex w-[400px] justify-between items-center">
              <li className="font-semibold">Home</li>
              <li className="font-semibold">About</li>
              <li className="font-semibold">Contact</li>
            </ul>
          </div>

          {/* This div will show only when the screen width is below 760px */}
          <div className="block md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image
                src="/icons/hamburger_icon.svg"
                alt="Icon"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
    // <nav className="bg-gray-800 text-white">
    //   <div className="flex items-center justify-between px-4 py-3">
    //     {/* Brand Name */}
    //     <div className="text-lg font-bold">My Website</div>

    //     {/* Hamburger Icon */}
    //     <button
    //       className="block md:hidden"
    //       onClick={() => setIsOpen(!isOpen)} // Toggle the menu on click
    //     >
    //       <svg
    //         className="h-6 w-6"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M4 6h16M4 12h16m-7 6h7"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Links (Hidden on small screens, visible when menu is open) */}
    //   <div
    //     className={`${
    //       isOpen ? "block" : "hidden"
    //     } md:flex md:items-center md:justify-between`}
    //   >
    //     <a href="#" className="block px-4 py-2">
    //       Home
    //     </a>
    //     <a href="#" className="block px-4 py-2">
    //       About
    //     </a>
    //     <a href="#" className="block px-4 py-2">
    //       Services
    //     </a>
    //     <a href="#" className="block px-4 py-2">
    //       Contact
    //     </a>
    //   </div>
    // </nav>
  );
}
