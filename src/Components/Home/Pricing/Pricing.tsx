const Pricing = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="md:max-w-md mx-auto text-center mb-5">
        <h6 className="uppercase md:text-lg font-medium tracking-[6px]">
          pricing
        </h6>
        <h1 className="font-semibold text-lg md:text-3xl capitalize">
          Compare Our Plans and Choose What Works Best
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        <div className="rounded-2xl border border-[#FF5555] p-6 shadow-sm ring-1 ring-[#FF5555] sm:order-last sm:px-8 lg:p-12 ">
          <div className="text-center">
            <h2 className="text-lg font-medium dark:text-white text-gray-900 dark:text-white">
              Pro
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold dark:text-white text-gray-900 dark:text-white sm:text-4xl">
                {" "}
                30${" "}
              </strong>
              <span className="text-sm font-medium dark:text-white text-gray-700 dark:text-white">
                /month
              </span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                20 users included{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                5GB of storage{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                Email support{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                Help center access{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                Phone support{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="dark:text-white text-gray-700">
                {" "}
                Community access{" "}
              </span>
            </li>
          </ul>
          <button className="mt-8 block rounded-full border border-[#FF5555] bg-[#FF5555] px-12 py-3 text-center text-sm font-medium text-white hover:bg-black hover:ring-1 hover:ring-black focus:outline-none focus:ring transition ease-linear duration-300 dark:hover:bg-white dark:hover:text-[#FF5555]">
            Get Started
          </button>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium dark:text-white text-gray-900">
              Starter
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold dark:text-white text-gray-900 sm:text-4xl">
                {" "}
                20${" "}
              </strong>

              <span className="text-sm font-medium dark:text-white text-gray-700">
                /month
              </span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                10 users included{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                2GB of storage{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="dark:text-white text-gray-700">
                {" "}
                Email support{" "}
              </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-[#FF5555]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="dark:text-white text-gray-700">
                Help center access
              </span>
            </li>
          </ul>

          <button className="mt-8 block rounded-full border border-[#FF5555] bg-white px-12 py-3 text-center text-sm font-medium text-[#FF5555] hover:ring-1 hover:ring-black active:text-[#FF5555] transition ease-linear duration-300 hover:bg-[#FF5555] hover:text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
