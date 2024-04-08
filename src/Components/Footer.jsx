// import React from "react";
// import { FaInstagram } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="bg-gray-100">
//       <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
//         <div className="p-5 sm:w-2/12 border-r">
//           <div className="text-sm uppercase text-indigo-600 font-bold">
//             Menu
//           </div>
//           <ul>
//             <li className="my-2">
//               <a className="hover:text-indigo-600" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="my-2">
//               <a className="hover:text-indigo-600" href="#">
//                 Services
//               </a>
//             </li>
//             <li className="my-2">
//               <a className="hover:text-indigo-600" href="#">
//                 Products
//               </a>
//             </li>
//             <li className="my-2">
//               <a className="hover:text-indigo-600" href="#">
//                 Pricing
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="p-5 sm:w-7/12 border-r text-center">
//           <h3 className="font-bold text-xl text-indigo-600 mb-4">
//             Componentity
//           </h3>
//           <p className="text-gray-500 text-sm mb-10">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s.
//           </p>
//         </div>
//         <div className="p-5 sm:w-3/12">
//           <div className="text-sm uppercase text-indigo-600 font-bold">
//             Contact Us
//           </div>
//           <ul>
//             <li className="my-2">
//               <a className="hover:text-indigo-600" href="#">
//                 XXX XXXX, Floor 4 San Francisco, CA
//               </a>
//             </li>
//             <li className="my-2">
//               <a className="hover:text-indigo-600" href="#">
//                 contact@company.com
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
//         <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
//           <a href="#" className="w-6 mx-1">
//             <FaInstagram />
//           </a>
//           <a href="#" className="w-6 mx-1">
//             <svg
//               className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
//               width="100%"
//               height="100%"
//               viewBox="0 0 24 24"
//               version="1.1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               xml:space="preserve"
//               xmlns:serif="http://www.serif.com"
//               style={{
//                 fillRule: "evenodd",
//                 clipRule: "evenodd",
//                 strokeLinejoin: "round",
//                 strokeMiterlimit: 2,
//               }}
//             >
//               <path
//                 id="Facebook"
//                 d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
//               ></path>
//             </svg>
//           </a>
//           <a href="#" className="w-6 mx-1">
//             <svg
//               className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
//               width="100%"
//               height="100%"
//               viewBox="0 0 24 24"
//               version="1.1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               xml:space="preserve"
//               xmlns:serif="http://www.serif.com"
//               style={{
//                 fillRule: "evenodd",
//                 clipRule: "evenodd",
//                 strokeLinejoin: "round",
//                 strokeMiterlimit: 2,
//               }}
//             >
//               <g id="Layer_1">
//                 <circle id="Oval" cx="12" cy="12" r="12"></circle>
//                 <path
//                   id="Shape"
//                   d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938 -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125 0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813 -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068 -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204 -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068 0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204 0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
//                 ></path>
//               </g>
//             </svg>
//           </a>
//           <a href="#" className="w-6 mx-1">
//             <svg
//               className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
//               width="100%"
//               height="100%"
//               viewBox="0 0 24 24"
//               version="1.1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               xml:space="preserve"
//               xmlns:serif="http://www.serif.com"
//               style={{
//                 fillRule: "evenodd",
//                 clipRule: "evenodd",
//                 strokeLinejoin: "round",
//                 strokeMiterlimit: 2,
//               }}
//             >
//               <path
//                 id="Combined-Shape"
//                 d="M12,24c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm6.591,-15.556l-0.722,0c-0.189,0 -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323 0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0 0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385 -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"
//               ></path>
//             </svg>
//           </a>
//         </div>
//         <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-8 bg-black pt-9 font-sans">
      <div className="text-white text-wrap from-neutral-600  text-3xl sm:text-6xl ml-4 flex items-center justify-center w-full max-w-[1166px]">
        {" "}
        <h1>Together we find your dream home</h1>
      </div>
      <hr className="my-[30px] text-white" />
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between  sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <p className="text-[18px] font-medium text-white">
              <h1 className="text-white font-extrabold">
                <span className="text-rose-600">YOUR</span>LOGO
              </h1>
            </p>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio
              facere officiis enim animi placeat eaque nesciunt alias beatae id,
              at dicta.
            </p>
            <div className="mt-[18px] flex gap-4">
              {/* Social Icons */}
              <a className="hover:scale-110" target="_blank" href="#">
                <FaFacebook className="text-white text-2xl" />
              </a>
              <a className="hover:scale-110" target="_blank" href="/">
                <FaLinkedin className="text-white text-2xl" />
              </a>
              <a className="hover:scale-110" target="_blank" href="/">
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a className="hover:scale-110" target="_blank" href="/">
                <FaTwitter className="text-white text-2xl" />
              </a>
              <a
                className="hover:scale-110"
                target="_blank"
                href="https://www.youtube.com/"
              >
                <FaYoutube className="text-white text-2xl" />
              </a>
            </div>
          </div>
          <div className="md:w-[316px]">
            {/* Contact Info */}
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%] bg-blue-500 text-white">
                <FaPhone size={24} />
              </div>
              <div className="ml-[18px]">
                <a
                  href="tel:+911800123444"
                  className="font-Inter text-[14px] font-medium text-white"
                >
                  +91 1800123444
                </a>
                <p className="font-Inter text-[12px] font-medium text-white">
                  Support Number
                </p>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%] bg-blue-500 text-white">
                <FaEnvelope size={24} />
              </div>
              <div className="ml-[18px]">
                <a
                  href="mailto:help@lorem.com"
                  className="font-Inter text-[14px] font-medium text-[#fff]"
                >
                  help@lorem.com
                </a>
                <p className="font-Inter text-[12px] font-medium text-[#fff]">
                  Support Email
                </p>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%] bg-blue-500 text-white">
                <FaMapMarkerAlt size={24} />
              </div>
              <div className="ml-[18px]">
                <a
                  href="mailto:help@lorem.com"
                  className="font-Inter text-[14px] font-medium text-[#fff]"
                >
                  Sub Nerul, Mumbia, India, 123456
                </a>
                <p className="font-Inter text-[12px] font-medium text-white">
                  Address
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div className="">
              {/* Pages */}
              <p className="text-deutziawhite font-inter text-[18px] font-bold leading-normal">
                Pages
              </p>
              <ul>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/our-tutors"
                  >
                    BUY
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/become-a-tutor"
                  >
                    RENT
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/plans-and-pricing"
                  >
                    SELL
                  </a>
                </li>
                {/* <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/terms-and-conditions"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/privacy-policy"
                  >
                    Privcay policy
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              Download the app
              {/* <p className="text-deutziawhite font-inter text-[18px] font-medium">
                Download the app
              </p>
              <div className="flex gap-4 sm:flex-col">
                <a target="_blank" href="#">
                  <img
                    alt="google play store icon"
                    loading="lazy"
                    width="168"
                    height="50"
                    decoding="async"
                    src="https://www.englishyaari.com/img/google-store.svg"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    alt="apple app store icon"
                    loading="lazy"
                    width="168"
                    height="50"
                    decoding="async"
                    src="https://www.englishyaari.com/img/apple-store.svg"
                  />
                </a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            © Copyright
            {/* -->2024 */}, All Rights Reserved by YOUR WEBSITES. PVT. LTD
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
