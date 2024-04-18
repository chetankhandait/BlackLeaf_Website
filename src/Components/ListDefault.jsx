import React, { useState } from "react";
import Data from "../Data/data.js";
export function ListDefault() {
  // console.log(Data);
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { ...x } = Data;

  // console.log(x);
  const renderTabContent = () => {
    // console.log(Data);
    switch (activeTab) {
      case "description":
        return (
          <div className="font-sans w-full sm:w-2/3   text-white ">
            <section>
              <div className="flex flex-col items-start   max-w-7xl p-4 w-full">
                <div className="flex flex-col w-full max-w-3xl  text-left prose-blue">
                  <div className="w-full ">
                    <div className="text-2xl sm:text-4xl  font-bold pb-2">
                      <h1>
                        Relax and Enjoy the peaceful charm of a 3 BHK home at
                        Trishla City!
                      </h1>
                    </div>
                    <div className="text-sm sm:text-2xl  font-semibold pb-8">
                      <h3>
                        Do you dream of a life that’s exciting and convenient,
                        but also peaceful and relaxing?
                      </h3>
                    </div>
                    <p className="leading-8 tracking-wide font-medium">
                      Are you looking 3 BHK Flats near me So, look no further
                      than Trishla City Zirakpur! We’re a friendly community in
                      the heart of Zirakpur, offering spacious 3-bedroom
                      apartments that are perfect for unwinding after a busy
                      day. It’s more than just an apartment – it’s a whole new
                      way of life!
                    </p>
                    <div className="pt-4 leading-7 tracking-wide font-medium">
                      <h2 className="pb-3 text-black font-bold text-lg sm:text-xl">
                        Imgine this:
                      </h2>
                      <ul className="list-disc pl-6">
                        <li className="pb-5">
                          <span className="font-bold text-lg mr-2">
                            Spacious Living:
                          </span>
                          <span>
                            At Trishla City , Our 3 BHK Apartments starts from
                            1770 sqft. Each layout is thoughtfully designed to
                            feel bright and airy, letting your family breathe
                            and thrive. No more cramped feeling, just pure
                            spaciousness!
                          </span>
                        </li>
                        <li className="pb-5">
                          <span className="font-bold text-lg mr-2">
                            Comfortable Bedrooms:
                          </span>
                          <span>
                            Imagine yourself melting into cozy beds in sunlit
                            bedrooms, each a private retreat with plenty of
                            storage to keep things organized. Wake up feeling
                            refreshed and energized, ready to take on the day as
                            if you just had a luxurious 5-star sleepover.
                          </span>
                        </li>
                        <li className="pb-5">
                          <span className="font-bold text-lg mr-2">
                            Entertaining Living areas:
                          </span>
                          <span>
                            Gather your loved ones in expansive living and
                            dining areas, perfect for movie nights, board game
                            battles, or impromptu dance parties. Large windows
                            bathe the space in warm, natural light, creating a
                            cheerful and inviting atmosphere for every shared
                            moment.
                          </span>
                        </li>
                        <li className="pb-5">
                          <span className="font-bold text-lg mr-2">
                            Modern Kitchens:
                          </span>
                          <span>
                            Unleash your inner chef in sleek, modern kitchens.
                            Imagine gleaming countertops, top-of-the-line
                            appliances, and ample space to whip up culinary
                            masterpieces. Cooking becomes a joy, not a chore, in
                            your very own gourmet haven.s
                          </span>
                        </li>
                        <li className="pb-5">
                          <span className="font-bold text-lg mr-2">
                            Luxurious Bathrooms:
                          </span>
                          <span>
                            Step into spa-like bathrooms, complete with
                            luxurious fixtures like jacuzzi and fittings. Let
                            the stress melt away with a hot shower or soak in a
                            deep tub, transforming your bathroom into a personal
                            oasis of rejuvenation.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="block w-full overflow-x-auto max-w-full border dark:bg-gray-900">
                      <table className="items-center w-full bg-transparent border-collapse ">
                        <thead>
                          <tr>
                            <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap">
                              All Variants
                            </th>
                            <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap">
                              Super Area (sqft)
                            </th>
                            <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr className="text-white">
                            <th className="border-t-0 px-4 align-middle text-md font-normal whitespace-nowrap p-4 text-left">
                              3 BHK + Store
                            </th>
                            <td className="border-t-0 px-4 align-middle text-md font-medium  whitespace-nowrap p-4">
                              1770
                            </td>
                            <td className="border-t-0 px-4 align-middle text-md whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2 text-lg font-medium">
                                  ₹1234567
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-white">
                            <th className="border-t-0 px-4 align-middle text-md font-normal whitespace-nowrap p-4 text-left">
                              3 BHK + Store
                            </th>
                            <td className="border-t-0 px-4 align-middle text-md font-medium  whitespace-nowrap p-4">
                              1770
                            </td>
                            <td className="border-t-0 px-4 align-middle text-md whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2 text-lg font-medium">
                                  ₹1234567
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-white">
                            <th className="border-t-0 px-4 align-middle text-md font-normal whitespace-nowrap p-4 text-left">
                              3 BHK + Store
                            </th>
                            <td className="border-t-0 px-4 align-middle text-md font-medium  whitespace-nowrap p-4">
                              1770
                            </td>
                            <td className="border-t-0 px-4 align-middle text-md whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2 text-lg font-medium">
                                  ₹1234567
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-white">
                            <th className="border-t-0 px-4 align-middle text-md font-normal whitespace-nowrap p-4 text-left">
                              3 BHK + Store
                            </th>
                            <td className="border-t-0 px-4 align-middle text-md font-medium  whitespace-nowrap p-4">
                              1770
                            </td>
                            <td className="border-t-0 px-4 align-middle text-md whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2 text-lg font-medium">
                                  ₹1234567
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-white">
                            <th className="border-t-0 px-4 align-middle text-md font-normal whitespace-nowrap p-4 text-left">
                              3 BHK + Store
                            </th>
                            <td className="border-t-0 px-4 align-middle text-md font-medium  whitespace-nowrap p-4">
                              1770
                            </td>
                            <td className="border-t-0 px-4 align-middle text-md whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2 text-lg font-medium">
                                  ₹1234567
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-white">
                            <th className="border-t-0 px-4 align-middle text-md font-normal whitespace-nowrap p-4 text-left">
                              3 BHK + Store
                            </th>
                            <td className="border-t-0 px-4 align-middle text-md font-medium  whitespace-nowrap p-4">
                              1770
                            </td>
                            <td className="border-t-0 px-4 align-middle text-md whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2 text-lg font-medium">
                                  ₹1234567
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case "address":
        return (
          <div className="w-full sm:w-2/3 overflow-hidden bg-gray-900 shadow sm:rounded-lg p-1 sm:m-4">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-white">
                User database
              </h3>
              <p className="max-w-2xl mt-1 text-sm text-white">
                Details and informations about user.
              </p>
            </div>
            <div className="border-t border-gray-200 p-4">
              <dl>
                <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-white"> City</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    Zirkapur
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-white">State</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    Punjab
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-white">
                    Zip/Postal Code
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    140306
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-white">Country</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    India
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-white">
                    Area/Location
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    Patiala Road, Zirakpur
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-white">Address</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    Trishla City High Ground Road, Patiala Rd, Zirakpur, Punjab
                    140603
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );
      case "details":
        return (
          <div>
            <h2>Details</h2>
            <p>Placeholder for details content...</p>
          </div>
        );
      case "feature":
        return (
          <div>
            <h2>Feature</h2>
            <p>Placeholder for feature content...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="max-w-3xl bg-black text-white shadow-md mt-4 flex justify-center items-center ">
        <ul className="list-none p-0 flex">
          <li
            className={`py-3 px-4   cursor-pointer ${
              activeTab === "description"
                ? "border-b bg-gray "
                : " hover:border-b hover:bg-gray "
            }`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </li>
          <li
            className={`py-3 px-4 cursor-pointer ${
              activeTab === "address"
                ? "border-b bg-gray"
                : "hover:border-b hover:bg-gray"
            }`}
            onClick={() => handleTabClick("address")}
          >
            Address
          </li>
          <li
            className={`py-3 px-4 cursor-pointer ${
              activeTab === "details"
                ? "border-b bg-gray"
                : "hover:border-b hover:bg-gray"
            }`}
            onClick={() => handleTabClick("details")}
          >
            Details
          </li>
          <li
            className={`py-3 px-4 cursor-pointer ${
              activeTab === "feature"
                ? "border-b bg-gray"
                : "hover:border-b hover:bg-gray"
            }`}
            onClick={() => handleTabClick("feature")}
          >
            Feature
          </li>
        </ul>
      </div>
      <div className="mt-4  sm:flex  ">
        {renderTabContent()}

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Get started today
            </h1>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati sunt dolores deleniti inventore quaerat mollitia?
            </p>

            <form
              action="#"
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <p className="text-center text-lg font-medium">
                Sign in to your account
              </p>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>

              <p className="text-center text-sm text-gray-500">
                No account?
                <a className="underline" href="#">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
