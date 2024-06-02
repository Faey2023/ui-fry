"use client";
import Image from "next/image";

//importing images
import logo from "@/app/assets/images/logo.png";
import ThemeButton from "../Theme Button/ThemeButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  //active
  const path = usePathname().startsWith("href");

  const navLinks = (
    <>
      <li>
        <a href="#home" className=" font-bold text-xl active:text-[#FF5555]">
          Home
        </a>
      </li>
      <li>
        <a href="#feature" className="font-medium text-xl">
          Features
        </a>
      </li>
      <li>
        <a href="#advantage" className="font-medium text-xl">
          Advantages
        </a>
      </li>

      <li>
        <a href="#testimonial" className="font-medium text-xl">
          Testimonial
        </a>
      </li>
      <li>
        <a href="#pricing" className="font-medium text-xl">
          Pricing
        </a>
      </li>
      <li>
        <button className="text-white bg-black px-7 py-3 capitalize text-xs hover:bg-[#FF5555] transform ease-linear duration-300 md:hidden">
          download
        </button>
      </li>
    </>
  );
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-[999999]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-5">
        <div className="flex gap-2 justify-center items-center">
          <Image src={logo} alt="Logo" width={34} height={34} />
          <span className="font-black text-3xl">uifry</span>
          <ThemeButton />
          <div
            onClick={handleToggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex md:flex-row flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks}
          </ul>
        </div>
        <button className="text-white bg-black px-7 py-3 capitalize text-xs hover:bg-[#FF5555] transform ease-linear duration-300 hidden md:flex">
          download
        </button>
      </div>
      {toggleNav && (
        <div className="md:hidden">
          <ul className="shadow-lg w-fit dark:text-white">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
