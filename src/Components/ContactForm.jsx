// // import React, { useState } from "react";

// // const ContactForm = () => {
// //   const [isChatboxOpen, setIsChatboxOpen] = useState(false);

// //   const toggleChatbox = () => {
// //     setIsChatboxOpen(!isChatboxOpen);
// //   };

// //   return (
// //     <div className="flex items-center justify-center p-12">
// //       <div className="fixed bottom-0 right-0 w-full mt-8">
// //         <div
// //           className={`formbold-form-wrapper mx-auto ${
// //             isChatboxOpen ? "" : "hidden"
// //           } w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white`}
// //         >
// //           <div className="flex items-center justify-between rounded-t-lg bg-[#6A64F1] py-4 px-9">
// //             <h3 className="text-xl font-bold text-white">
// //               Let's chat? - Online
// //             </h3>
// //             <button onClick={toggleChatbox} className="text-white">
// //               <svg
// //                 width="17"
// //                 height="17"
// //                 viewBox="0 0 17 17"
// //                 className="fill-current"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   clipRule="evenodd"
// //                   d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
// //                 />
// //                 <path
// //                   fillRule="evenodd"
// //                   clipRule="evenodd"
// //                   d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //           <form
// //             action="https://formbold.com/s/FORM_ID"
// //             method="POST"
// //             className="py-6 px-9"
// //           >
// //             <div className="mb-5">
// //               <label
// //                 htmlFor="name"
// //                 className="mb-3 block text-base font-medium text-[#07074D]"
// //               >
// //                 Your Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 id="name"
// //                 placeholder="Enter your name"
// //                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
// //               />
// //             </div>
// //             <div className="mb-5">
// //               <label
// //                 htmlFor="email"
// //                 className="mb-3 block text-base font-medium text-[#07074D]"
// //               >
// //                 Email Address
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 id="email"
// //                 placeholder="example@domain.com"
// //                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
// //               />
// //             </div>
// //             <div className="mb-5">
// //               <label
// //                 htmlFor="message"
// //                 className="mb-3 block text-base font-medium text-[#07074D]"
// //               >
// //                 Message
// //               </label>
// //               <textarea
// //                 rows="4"
// //                 name="message"
// //                 id="message"
// //                 placeholder="Explain your queries"
// //                 className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
// //               ></textarea>
// //             </div>
// //             <div>
// //               <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
// //                 Start Chat
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //         <div className="mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5">
// //           <button
// //             className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#6A64F1] text-white"
// //             onClick={toggleChatbox}
// //           >
// //             <span className={`${isChatboxOpen ? "hidden" : "cross-icon"}`}>
// //               <svg width="17" height="17" viewBox="0 0 17 17" fill="white">
// //                 <path
// //                   fillRule="evenodd"
// //                   clipRule="evenodd"
// //                   d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
// //                 />
// //                 <path
// //                   fillRule="evenodd"
// //                   clipRule="evenodd"
// //                   d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
// //                 />
// //               </svg>
// //             </span>
// //             <span className={`${isChatboxOpen ? "hidden" : "chat-icon"}`}>
// //               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
// //                 <path
// //                   d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
// //                   fill="white"
// //                 />
// //               </svg>
// //             </span>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactForm;
// import React, { useState } from "react";
// import { IoCloseOutline, FaCartShopping } from "react-icons/io5";

// const ContactForm = () => {
//   const [orderPopup, setOrderPopup] = useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   return (
//     <>
//       {orderPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 w-[300px]">
//             <div className="flex items-center justify-between mb-4">
//               <h1 className="text-xl font-bold">Order Now</h1>
//               <IoCloseOutline
//                 onClick={handleOrderPopup}
//                 className="text-gray-500 cursor-pointer"
//               />
//             </div>
//             <form>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="form-input mb-3"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="form-input mb-3"
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="form-input mb-3"
//               />
//               <div className="flex justify-center">
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
//                   Order Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       <button className="p-3" onClick={handleOrderPopup}>
//         <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
//         {/* Display notification count */}
//         <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//           4
//         </div>
//       </button>
//     </>
//   );
// };

// export default ContactForm;
import React from "react";

const ContactForm = () => {
  return (
    <div className="h-screen bg-black font-sans">
      <div className="pt-10 md:pt-6">
        <div className="p-4 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-white font-sans text-4xl font-normal text-wrap sm:text-6xl">
              Get in Touch with us
            </h1>
          </div>
          <form className="flex flex-col items-center">
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Name"
                />
                <input
                  id="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
              </div>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                id="message"
                rows="5"
                placeholder="Say Something"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-transparent hover:bg-white text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
