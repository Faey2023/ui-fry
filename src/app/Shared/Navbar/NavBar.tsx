import Image from "next/image";
import Link from "next/link";

//importing images
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const navLinks = (
    <>
      <Link href={"/"} className="text-[#FF5555] font-black text-2xl">
        Home
      </Link>
      <Link href={"/"} className="font-medium text-2xl">
        About Us
      </Link>
      <Link href={"/"} className="font-medium text-2xl">
        Features
      </Link>
      <Link href={"/"} className="font-medium text-2xl">
        Pricing
      </Link>
    </>
  );
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-10">
        <div className="flex gap-2">
          <Image src={logo} alt="Logo" width={34} height={34} />
          <span className="font-black text-3xl">uifry</span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks}
          </ul>
        </div>
        <button className="text-white bg-[#333333] px-7 py-3 uppercase text-xs hover:bg-[#FF5555] transform ease-linear duration-300">
          download
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
