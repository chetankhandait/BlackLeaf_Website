// import React from "react";

// const Form = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
//           <div className="max-w-md mx-auto">
//             <div className="flex items-center space-x-5">
//               <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
//                 i
//               </div>
//               <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
//                 <h2 className="leading-relaxed">Create an Event</h2>
//                 <p className="text-sm text-gray-500 font-normal leading-relaxed">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Event Title</label>
//                   <input
//                     type="text"
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Event title"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Event Subtitle</label>
//                   <input
//                     type="text"
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Optional"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex flex-col">
//                     <label className="leading-loose">Start</label>
//                     <div className="relative focus-within:text-gray-600 text-gray-400">
//                       <input
//                         type="text"
//                         className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                         placeholder="25/02/2020"
//                       />
//                       <div className="absolute left-3 top-2">
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                           ></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col">
//                     <label className="leading-loose">End</label>
//                     <div className="relative focus-within:text-gray-600 text-gray-400">
//                       <input
//                         type="text"
//                         className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                         placeholder="26/02/2020"
//                       />
//                       <div className="absolute left-3 top-2">
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                           ></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Event Description</label>
//                   <input
//                     type="text"
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Optional"
//                   />
//                 </div>
//               </div>
//               <div className="pt-4 flex items-center space-x-4">
//                 <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
//                   <svg
//                     className="w-6 h-6 mr-3"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>{" "}
//                   Cancel
//                 </button>
//                 <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
//                   Create
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;
// import React from "react";

// const Form = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
//           <div className="max-w-md mx-auto">
//             <div className="flex items-center space-x-5">
//               <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
//                 i
//               </div>
//               <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
//                 <h2 className="leading-relaxed">Create an Event</h2>
//                 <p className="text-sm text-gray-500 font-normal leading-relaxed">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Name</label>
//                   <input
//                     type="text"
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Name"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Email Address</label>
//                   <input
//                     type="text"
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Email Address"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex flex-col">
//                     <label className="leading-loose">Start</label>
//                     <div className="relative focus-within:text-gray-600 text-gray-400">
//                       <input
//                         type="date"
//                         className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                         placeholder="25/02/2020"
//                       />
//                       {/* <div className="absolute left-3 top-2">
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                           ></path>
//                         </svg>
//                       </div> */}
//                     </div>
//                   </div>
//                   <div className="flex flex-col">
//                     <label className="leading-loose">End</label>
//                     <div className="relative focus-within:text-gray-600 text-gray-400">
//                       <input
//                         type="time"
//                         className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                         placeholder="26/02/2020"
//                       />
//                       {/* <div className="absolute left-3 top-2">
//                         <svg
//                           className="w-6 h-6"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                           ></path>
//                         </svg>
//                       </div> */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Message</label>
//                   <textarea
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Message"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="pt-4 flex items-center space-x-4">
//                 <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
//                   <svg
//                     className="w-6 h-6 mr-3"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>{" "}
//                   Cancel
//                 </button>
//                 <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
//                   Create
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;
// import React from "react";

// const Form = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="relative px-4 py-10 bg-white mx-auto  shadow rounded-3xl sm:p-10">
//           <div className="max-w-md mx-auto">
//             <div className="flex items-center space-x-5">
//               <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
//                 i
//               </div>
//               <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
//                 <h2 className="leading-relaxed">Create an Event</h2>
//                 <p className="text-sm text-gray-500 font-normal leading-relaxed">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Name</label>
//                   <input
//                     type="text"
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Name"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Email Address</label>
//                   <input
//                     type="text"
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Email Address"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Start</label>
//                   <div className="relative focus-within:text-gray-600 text-gray-400">
//                     <input
//                       type="date"
//                       className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                       placeholder="25/02/2020"
//                     />
//                     {/* <div className="absolute left-3 top-2">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                         ></path>
//                       </svg>
//                     </div> */}
//                   </div>
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Time</label>
//                   <div className="relative focus-within:text-gray-600 text-gray-400">
//                     <input
//                       type="text"
//                       className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                       placeholder="26/02/2020"
//                     />
//                     {/* <div className="absolute left-3 top-2">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                         ></path>
//                       </svg>
//                     </div> */}
//                   </div>
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Message</label>
//                   <textarea
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                     placeholder="Message"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="pt-4 flex items-center justify-end space-x-4">
//                 <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
//                   Create
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;
import React from "react";

const Form = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden h-full">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Book an Appointment
      </div>
      <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="Select a date"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="time"
            placeholder="Select a time"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-gray-700 font-bold mb-2"
          >
            Service
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            name="service"
          >
            <option value="">Select a service</option>
            <option value="haircut">Haircut</option>
            <option value="coloring">Coloring</option>
            <option value="styling">Styling</option>
            <option value="facial">Facial</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Enter any additional information"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
