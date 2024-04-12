import React, { useState } from "react";

const AboutUs = () => {
  //   const [theme, setTheme] = useState("light");

  //   const toggleTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //   };

  return (
    <div className="bg-black font-sans">
      {/* <h1 className="text-5xl py-7 text-center font-serif underline mb-8 text-[#076253] shadow-slate-600 text-heading">
        About Us
      </h1> */}
      {/* <div
        className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover mt-12 ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        }`}
      > */}
      <div
        className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto mt-16 lg:my-0 text-white border-white"
        id="about"
      >
        {/* Main Col */}
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/blackleaf.jpeg')`,
              }}
            ></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              BlackLeaf Properties
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{" "}
              Real Estate
            </p>
            {/* Other content */}
            <p className="pt-6 text-lg">
              Welcome to 7 Dimensions (Seven Dimensions), Where we extend our
              real estate expertise across seven dynamic dimensions. As a
              premier real estate consultant operating in Zirakpur, Mohali,
              Chandigarh, Punjab, Panchkula Haryana, Himachal Pradesh, Delhi
              NCR, and various other states of India, we take pride in
              seamlessly blending local insights with global standards. In
              Zirakpur, Mohali, Chandigarh, Punjab, Haryana, and Himachal
              Pradesh, we navigate the scenic landscapes to curate properties
              that resonate with the unique lifestyles of these regions.
            </p>
            {/* Theme toggle button */}
            <div className="pt-6">
              <a
                className="inline-flex items-center cursor-pointer justify-center rounded-xs bg-transparent px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-white hover:text-black hover:bg-white "
                href="https://www.instagram.com/p/C28EE2DBscS/"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/* Img Col */}
        <div className="w-full lg:w-2/5">
          <img
            src="/images/blackleaf.jpeg"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            alt="Profile"
          />
        </div>
      </div>
      {/* </div> */}
      <div>
        <div className="flex text-center">
          {/* <h1 className="text-white">How much custmer we serve</h1> */}
        </div>

        <section
          id="comparison"
          aria-label="QuickEdit vs traditional editor"
          className="bg-black dark:bg-gray-800 py-4 sm:pb-8"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                      <blockquote className="relative p-3">
                        <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                          10+
                        </p>
                      </blockquote>
                      <figcaption className="text-center">
                        <div className="font-display text-slate-900 dark:text-white">
                          {" "}
                          ✅ Years of experience
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                      <blockquote className="relative p-3">
                        <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                          100+
                        </p>
                      </blockquote>
                      <figcaption className="text-center">
                        <div className="font-display text-slate-900 dark:text-white">
                          💰 Properties sold
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                      <blockquote className="relative p-3">
                        <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                          30+
                        </p>
                      </blockquote>
                      <figcaption className="text-center">
                        <div className="font-display text-slate-900 dark:text-white">
                          😎 Affiliate partners
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
