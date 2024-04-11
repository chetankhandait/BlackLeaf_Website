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
    <div className="mt-16 bg-black pt-9 font-sans">
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
                {/* <span className="text-rose-600">YOUR</span>LOGO */}
                <img src="/images/blackleaf.jpeg" className="w-14" />
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
