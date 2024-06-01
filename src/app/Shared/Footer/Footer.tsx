import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { IoCall, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto text-[#000000]">
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
          <div className="mt-5 flex flex-col md:flex-row justify-between pt-16 md:grid-cols-4 lg:grid-cols-6">
            <div className="text-center sm:text-left space-y-6">
              <div className="flex gap-2">
                <Image src={logo} alt="Logo" width={34} height={34} />
                <span className="font-black text-2xl">uifry</span>
              </div>
              <div className="flex gap-2 items-center">
                <p>
                  <IoMail className="text-[#FF5555] w-6 h-6" />
                </p>
                <p className=" font-semibold">help@frybix.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>
                  <IoCall className="text-[#FF5555] w-6 h-6" />
                </p>
                <p className=" font-semibold">+1 234 456 678 89</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-medium">Links</p>
              <ul className="mt-8 space-y-4 font-medium">
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  Home
                </li>
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  About Us
                </li>
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  Bookings
                </li>
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  Blog
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-medium ">Legal</p>
              <ul className="mt-8 space-y-4 font-medium">
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  terms of use
                </li>
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  privacy policy
                </li>
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  cookie policy
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-medium">Product</p>
              <ul className="mt-8 space-y-4 font-medium">
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  take a tour
                </li>
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  live chat
                </li>
                <li className="capitalize transition hover:text-gray-700/75 cursor-pointer">
                  reviews
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left md:col-span-4">
              <p className="text-3xl font-medium">Newsletter</p>
              <div className="mx-auto mt-8 max-w-md sm:ms-0">
                <p className="capitalize font-medium">stay up to date</p>
                <form className="mt-4">
                  <div className="relative">
                    <input
                      type="email"
                      className="block w-full p-4   border border-gray-300 rounded-lg bg-gray-50 "
                      placeholder="Your Email"
                    />
                    <button
                      type="submit"
                      className="absolute end-2.5 bottom-2 text-sm px-6 py-3 w-fit rounded font-medium text-white bg-black hover:bg-[#FF5555] transition ease-linear duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-5 border-t border-gray-400 pt-6 flex justify-center items-center">
            <p className="sm:text-left font-medium">
              Copyright 2022 Uifry.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
