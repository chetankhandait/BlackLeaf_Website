// import React, { useEffect } from "react";
// import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
// // import "./Slider.css";
// const Testimonial = () => {
//   useEffect(() => {
//     const keenSlider = new KeenSlider(
//       "#keen-slider",
//       {
//         loop: true,
//         slides: {
//           origin: "center",
//           perView: 1.25,
//           spacing: 16,
//         },
//         breakpoints: {
//           "(min-width: 1024px)": {
//             slides: {
//               origin: "auto",
//               perView: 2.5,
//               spacing: 32,
//             },
//           },
//         },
//       },
//       []
//     );

//     const keenSliderPrevious = document.getElementById("keen-slider-previous");
//     const keenSliderNext = document.getElementById("keen-slider-next");

//     keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
//     keenSliderNext.addEventListener("click", () => keenSlider.next());
//   }, []);

//   return (
//     <>
//       <h1 className="text-5xl py-8 text-center font-serif underline mb-8 text-[#076253] drop-shadow text-heading  ">
//         Testimonials
//       </h1>
//       <div className="flex flex-col w-full bg-[#02312f] text-white lg:flex-row   ">
//         <section
//           className="w-full bg-[#02312f] text-white lg:w-2/3 "
//           id="testimonials"
//         >
//           <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
//             <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
//               <h2 className="max-w-xl text-4xl font-bold tracking-tight   sm:text-5xl">
//                 Read trusted reviews from our customers
//               </h2>

//               <div className="mt-8 flex gap-4 lg:mt-0">
//                 <button
//                   aria-label="Previous slide"
//                   id="keen-slider-previous"
//                   className="rounded-full border border-white p-3   transition hover:bg-[#076253] hover:text-white"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="size-5 rtl:rotate-180"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15.75 19.5L8.25 12l7.5-7.5"
//                     />
//                   </svg>
//                 </button>

//                 <button
//                   aria-label="Next slide"
//                   id="keen-slider-next"
//                   className="rounded-full border border-white p-3 text-white transition hover:bg-[#076253] hover:text-white"
//                 >
//                   <svg
//                     className="size-5 rtl:rotate-180"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M9 5l7 7-7 7"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <div className="-mx-5 mt-8  lg:col-span-1 lg:mx-0">
//               <div id="keen-slider" className="keen-slider">
//                 <div className="keen-slider__slide">
//                   {/* Review 1 content */}
//                   "As a commercial developer, we have worked with numerous
//                   design firms over the years. NextSpace stands out for their
//                   innovative designs, and ability to meet deadlines."
//                 </div>
//                 <div className="keen-slider__slide">
//                   {/* Review 2 content */}
//                   "We specialize in transforming visions into reality. Explore
//                   our portfolio of innovative architectural and interior design
//                   projects crafted with precision."
//                 </div>
//                 {/* Add more keen-slider__slide divs for additional reviews */}
//               </div>
//             </div>
//           </div>
//         </section>
//         <img
//           src="/images/img.webp"
//           alt=""
//           className="w-full p-5  rounded-md object-cover   lg:w-1/3  h-full block lg:p-0 lg:rounded-none"
//         />
//       </div>
//     </>
//   );
// };

// export default Testimonial;
import React from "react";

const Testimonial = () => {
  return (
    <div
      className="text-gray-600 dark:text-gray-300 pt-12 dark:bg-gray-900 font-sans"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        {/* <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div> */}
        <div className="flex justify-center items-center">
          <h1 className="text-white text-center  font-sans text-4xl  font-normal text-wrap sm:text-6xl py-6 ">
            Custmer Reviews
          </h1>
        </div>
        <div className="md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 grid">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Sarabjit Singh
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Buyer (4-BHK flat)
                </p>
              </div>
            </div>
            <p className="mt-8">
              The level of professionalism exhibited by 7 Dimensions is
              commendable. They truly understand the market, ensuring that every
              decision is well-informed. Their dedication to client satisfaction
              is evident in the excellent service we received. Highly
              recommended for anyone looking for flats in Mohali.
            </p>
          </div>

          {/* Additional similar divs */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/14.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
              cumque quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/18.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanick Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          {/* Additional similar divs */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/62.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Andy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Manager
                </p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/19.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanndy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
