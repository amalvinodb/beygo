"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./headers.css";
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full items-center fixed z-5">
      <nav
        className="flex flex-col justify-between h-auto max-w-[660px] w-full bg-white items-center rounded-4xl drop-shadow-xl"
        style={{ padding: "10px 30px", margin: "20px auto" }}
      >
        <div className="w-full flex justify-between">
          <div className="w-[40%]">
            <a href="/">
              <div className="header-logo text-xl md:text-4xl">
                <span className="b">b</span>
                <span className="e">e</span>
                <span className="y">y</span>
                <span className="g">g</span>
                <span className="o">o</span>
              </div>
            </a>
          </div>
          <div
            className="w-[30%] flex justify-end items-center"
            style={{ paddingLeft: "0px" }}
          >
            <div className="hidden md:block w-full">
              <ul className="list-none flex justify-between items-center">
                {/* <li className="font-semibold">Home</li> */}
                <li className="font-semibold">
                  <a href="/about">About</a>
                </li>
                <hr />
                <li className="font-semibold">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* This div will show only when the screen width is below 760px */}
            <div className="block md:hidden flex justify-end">
              <button onClick={() => setIsOpen(!isOpen)}>
                <Image
                  src="/icons/hamburger_icon.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } border-t-2 border-solid w-full block md:hidden`}
          style={{ marginTop: "20px", padding: "20px 0px" }}
        >
          <ul className="flex flex-col gap-4">
            <li className="font-semibold">
              <a href="/about">About</a>
            </li>
            <li className="font-semibold mt-4">
              <a href="/contact">Contact</a>
            </li>
          </ul>
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
