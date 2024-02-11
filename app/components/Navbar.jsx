"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <nav className="z-20 w-full flex items-center justify-between py-2 px-4 lg:px-8 bg-[#1D1F21] fixed">
        <div className="flex items-center lg:pr-80">
          <Link href="/">
            <span className="text-[35px] text-gray-300 font-semibold">
              <span className="text-[#FF6600]">T</span>rans
              <span className="text-[#FF0000]">L</span>ingo.
              <span className="text-[#FFC300]">M</span>eet
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-between lg:w-auto">
          <ul className="lg:w-[20vw] flex flex-row justify-between items-center text-xl font-[Inter] text-gray-300">
            <li>
              <Link href="/">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <span className="nav-link">About us</span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="nav-link">Contact us</span>
              </Link>
            </li>
          </ul>
          <div className="text-xl font-semibold text-[#FF6600] ml-6">
            <Link href={'get-started'}>
              <span className="nav-link">Get started</span>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Responsive menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed w-full lg:hidden bg-[#1D1F21] py-2 px-4  top-16`}
      >
        <ul className=" flex flex-col items-center text-xl font-[Inter] text-gray-300">
          <li className="my-2">
            <Link href="/">
              <span className="nav-link">Home</span>
            </Link>
          </li>
          <li className="my-2">
            <Link href="#about">
              <span className="nav-link">About us</span>
            </Link>
          </li>
          <li className="my-2">
            <Link href="#contact">
              <span className="nav-link">Contact us</span>
            </Link>
          </li>
          <li className="my-2">
            <Link href="get-started">
              <span className="nav-link">Get started</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
