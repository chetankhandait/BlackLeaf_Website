import React from "react";
import { FaStar } from "react-icons/fa";

const SeprateNavbar = (prop) => {
  console.log(prop);
  return (
    <>
      <div className="py-4 pl-3 text-white">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 pl-6 pt-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <a
                href="/"
                className="block transition hover:text-gray-700 dark:hover:text-gray-200"
              >
                <span className="sr-only"> Home </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>

            <li className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <a
                href="#"
                className="block transition hover:text-gray-700 dark:hover:text-gray-200"
              >
                {" "}
                {prop.title}{" "}
              </a>
            </li>

            <li className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <a
                href="#"
                className="block transition hover:text-gray-700 dark:hover:text-gray-200"
              >
                {prop.name}
              </a>
            </li>
          </ol>
        </nav>
        <header>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-4">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="text-left sm:text-left">
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  {prop.name}
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                  by{" "}
                  <span className="font-semibold text-blue-400 mx-1">
                    {prop.owner}
                  </span>{" "}
                </p>
                <p className="text-white">

                {prop.address && prop.address.length > 0 && Object.entries(prop.address[0]).map(([key, value]) => `  ${value}`).join(', ')}
                </p>
                <p className="flex items-center gap-2 pt-1 cursor-pointer  ">
               <span className=" flex items-center gap-1 w-11   p-1 bg-blue-600 rounded-md">
               <FaStar/> 5
                </span> 
                <span className="bg-gray-500 p-1.5 rounded-md text-sm">

                Write a review
                </span>
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:mt-0   sm:items-center">
                <div className="flex gap-1 font-serif">

                <h3 className="text-white font-semibold ">{prop.price}</h3>
                <h3 className="text-white font-semibold ">| {prop.pricepersqfeet}</h3>
                </div>

                <div className="flex flex-col gap-2 ">
                  <button
                    className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                    type="button"
                  >
                    Contact Me{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default SeprateNavbar;
