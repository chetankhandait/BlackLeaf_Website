// import React, { useState, useEffect } from "react";

// function Hero() {
//   const [backgroundImages, setBackgroundImages] = useState([
//     "https://framerusercontent.com/images/Hygf64Ai0l4Nl2sRfWtZOKQ9BQc.jpg?scale-down-to=2048",
//     "https://framerusercontent.com/images/IRtceiCnSbSzdYAkWUXEPlwKvg.jpg?scale-down-to=2048",
//     "https://framerusercontent.com/images/Yk5NUfVTc3PA6kSeJiP2qU28o.jpg?scale-down-to=2048",
//   ]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % backgroundImages.length
//       );
//     }, 3000); // Change background image every 5 seconds (adjust as needed)

//     return () => clearInterval(intervalId);
//   }, [backgroundImages]);

//   const houseName = ["Chetan House", "Chirag House", "Aryan House"]; // Name of the houses
//   const housePrices = ["$500,000", "$700,000", "$600,000"]; // Prices of the houses

//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section
//         className="flex flex-col min-h-screen  bg-cover bg-fixed bg-center bg-black bg-opacity-30 relative justify-end"
//         style={{
//           backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
//         }}
//       >
//         {/* Name and Price of the house */}
//         <div className="flex flex-col items-start justify-center h-full p-8 sm:mx-6 sm:mb-6">
//           <div className="text-white text-4xl sm:text-6xl font-semibold mb-4">
//             {houseName[currentImageIndex]}
//           </div>
//           <div className="text-white text-xl font-semibold mb-8 font-sans">
//             Offered at {housePrices[currentImageIndex]}
//           </div>
//           <button className="border border-gray-300 bg-transparent text-white px-6 py-3 text-xl hover:bg-white hover:text-black">
//             Learn More
//           </button>
//         </div>
//       </section>

//       {/* New Collection Section */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//           <header className="text-center">
//             <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
//               New Collection
//             </h2>
//             <p className="mx-auto mt-4 max-w-md text-gray-500">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
//               praesentium cumque iure dicta incidunt est ipsam, officia dolor
//               fugit natus?
//             </p>
//           </header>

//           <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
//             {backgroundImages.map((imageUrl, index) => (
//               <li key={index}>
//                 <a href="#" className="group relative block">
//                   <div
//                     className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
//                     style={{ backgroundImage: `url(${imageUrl})` }}
//                   />
//                   <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
//                     <h3 className="text-xl font-medium text-white">
//                       {houseName[index]}
//                     </h3>
//                     <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
//                       Shop Now
//                     </span>
//                   </div>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Hero;
import React, { useState } from "react";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="">
      <header className="py-0 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                <span
                  style={{ display: !expanded ? "block" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span
                  style={{ display: expanded ? "block" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Products{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Features{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Support{" "}
              </a>
            </nav>
          </div>

          <nav style={{ display: expanded ? "block" : "none" }}>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Products{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Features{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Support{" "}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="py-8 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className=" mr-6  md:absolute md:mt-0 sm:top-0 md:top-32 lg:top-12 md:right-0">
            <img
              className="w-full max-w-xs mx-auto sm:mt-20 mt-8 lg:max-w-lg xl:max-w-xl"
              src="/images/house.png"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                A Hub for Designers, Developers & Marketers
              </p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Unlimited
                </span>{" "}
                <br />
                Design Inspiration
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  {" "}
                  Start Exploring Inspiration{" "}
                </a>
              </div>

              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17"
                      stroke="url(#a)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="3"
                        y1="7"
                        x2="22.2956"
                        y2="12.0274"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "var(--color-cyan-500)" }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "var(--color-purple-500)" }}
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
// import React from "react";

// function Hero() {
//   return (
//     <section>
//       <div className="bg-black text-white py-20">
//         <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
//           <div className="p-2 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
//             <div className="h-48 flex flex-wrap content-center">
//               <div>
//                 <img
//                   className="inline-block mt-28 hidden xl:block"
//                   src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
//                   alt="Image1"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="inline-block mt-24 md:mt-0 p-8 md:p-0"
//                   src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
//                   alt="Image2"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="inline-block mt-28 hidden lg:block"
//                   src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
//                   alt="Image3"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
//             <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
//               TechFest
//             </h1>
//             <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
//               Space : The Timeless Infinity
//             </h2>
//             <p className="text-sm md:text-base text-gray-50 mb-4">
//               Explore your favourite events and register now to showcase your
//               talent and win exciting prizes.
//             </p>
//             <a
//               href="#"
//               className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
//             >
//               Explore Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
