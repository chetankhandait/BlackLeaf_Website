// import React from "react";

// function Card({ imageSrc, altText, category, title, description, price }) {
//   return (
//     <>
//       <div className="rounded overflow-hidden shadow-lg font-sans bg-black text-white">
//         <a href="#"></a>
//         <div className="relative">
//           <a href="#">
//             <img className="w-full" src={imageSrc} alt={altText} />
//             <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//           </a>
//           <a href="#!">
//             <div className="absolute bottom-0 left-0 bg-transparent  px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//               <div className="flex gap-4">
//                 <span className="">3 Bedrooms</span>
//                 <span>2 Bathroom</span>
//                 <span>3200 Sq.ft</span>
//               </div>
//             </div>
//           </a>

//           <a href="!#">
//             <div className="text-sm absolute top-0 right-0 bg-black  text-white flex flex-col items-center justify-center mt-0 mr-0 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//               {/* <span className="font-bold">{date}</span>
//             <small>{timeRead}</small> */}
//               <a className="text-white bg-transparent  px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
//                 For Sale
//               </a>
//             </div>
//           </a>
//         </div>
//         <div className=" py-4">
//           <a
//             href="#"
//             className="font-bold leading-5 text-base inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
//           >
//             {title}
//           </a>
//           <p className="text-500 text-md leading-6 mt-1">{description}</p>
//         </div>
//         <div className="">
//           <a
//             href="#"
//             className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
//           >
//             {price}
//           </a>
//         </div>
//         <div className=" py-4 flex flex-row items-center">
//           <a className="text-white bg-transparent border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
//             See More{" "}
//           </a>
//           {/* <span
//           href="#"
//           className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
//         >
//           <svg
//             height="13px"
//             width="13px"
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             x="0px"
//             y="0px"
//             viewBox="0 0 512 512"
//             style={{ enableBackground: "new 0 0 512 512" }}
//             xmlSpace="preserve"
//           >
//             <g>
//               <g>
//                 <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
//               </g>
//             </g>
//           </svg>
//           <span className="ml-1">{timeRead}</span>
//         </span> */}
//         </div>
//       </div>
//     </>
//   );
// }

// function MyComponent() {
//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
//       <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Heights Residence"
//           category="Photos"
//           title="Heights Residence"
//           description="Hilltop Lane, Elevated Estates"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//         <Card
//           imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           altText="Sunset in the mountains"
//           category="Photos"
//           title="Coastal Retreat Oasis"
//           description="Oceanfront Avenue, Seaside Sanctuary"
//           price="$13500"
//         />
//       </div>
//     </div>
//   );
// }

// export default MyComponent;
// import React, { useState } from "react";

// function Card({ imageSrc, altText, category, title, description, price }) {
//   return (
//     <div className="rounded overflow-hidden shadow-lg font-sans bg-black text-white">
//       <a href="#"></a>
//       <div className="relative">
//         <a href="#">
//           <img className="w-full" src={imageSrc} alt={altText} />
//           <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//         </a>
//         <a href="#!">
//           <div className="absolute bottom-0 left-0 bg-transparent  px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//             <div className="flex gap-4">
//               <span className="">3 Bedrooms</span>
//               <span>2 Bathroom</span>
//               <span>3200 Sq.ft</span>
//             </div>
//           </div>
//         </a>

//         <a href="!#">
//           <div className="text-sm absolute top-0 right-0 bg-black  text-white flex flex-col items-center justify-center mt-0 mr-0 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//             {/* <span className="font-bold">{date}</span>
//           <small>{timeRead}</small> */}
//             <a className="text-white bg-transparent  px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
//               For Sale
//             </a>
//           </div>
//         </a>
//       </div>
//       <div className=" py-4">
//         <a
//           href="#"
//           className="font-bold leading-5 text-base inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
//         >
//           {title}
//         </a>
//         <p className="text-500 text-md leading-6 mt-1">{description}</p>
//       </div>
//       <div className="">
//         <a
//           href="#"
//           className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
//         >
//           {price}
//         </a>
//       </div>
//       <div className=" py-4 flex flex-row items-center">
//         <a className="text-white bg-transparent border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
//           See More{" "}
//         </a>
//         {/* <span
//         href="#"
//         className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
//       >
//         <svg
//           height="13px"
//           width="13px"
//           version="1.1"
//           id="Layer_1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           x="0px"
//           y="0px"
//           viewBox="0 0 512 512"
//           style={{ enableBackground: "new 0 0 512 512" }}
//           xmlSpace="preserve"
//         >
//           <g>
//             <g>
//               <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
//             </g>
//           </g>
//         </svg>
//         <span className="ml-1">{timeRead}</span>
//       </span> */}
//       </div>
//     </div>
//   );
// }

// function MyComponent() {
//   const [showAllCards, setShowAllCards] = useState(false);

//   const cardData = [
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13500",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       altText: "Placeholder",
//       category: "Category",
//       title: "Coastal Retreat Oasis",
//       description: "Oceanfront Avenue, Seaside Sanctuary",
//       price: "$13000",
//     },
//     // Add more card data objects as needed
//   ];

//   const visibleCards = showAllCards ? cardData : cardData.slice(0, 3);

//   const toggleShowAllCards = () => {
//     setShowAllCards(!showAllCards);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
//       <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
//         {visibleCards.map((data, index) => (
//           <Card key={index} {...data} />
//         ))}
//       </div>
//       {!showAllCards && (
//         <div className="text-center mt-4">
//           <button
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             onClick={toggleShowAllCards}
//           >
//             See More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyComponent;
import React, { useState } from "react";

function Card({ imageSrc, altText, category, title, description, price }) {
  return (
    <div className="rounded overflow-hidden shadow-lg font-sans bg-black text-white">
      <a href="#"></a>
      <div className="relative">
        <a href="#">
          <img className="w-full" src={imageSrc} alt={altText} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="absolute bottom-0 left-0 bg-transparent  px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            <div className="flex gap-4">
              <span className="">3 Bedrooms</span>
              <span>2 Bathroom</span>
              <span>3200 Sq.ft</span>
            </div>
          </div>
        </a>

        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-black  text-white flex flex-col items-center justify-center mt-0 mr-0 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            <a className="text-white bg-transparent  px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
              For Sale
            </a>
          </div>
        </a>
      </div>
      <div className=" py-4">
        <a
          href="#"
          className="font-bold leading-5 text-base inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </a>
        <p className="text-500 text-md leading-6 mt-1">{description}</p>
      </div>
      <div className="">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {price}
        </a>
      </div>
      <div className=" py-4 flex flex-row items-center">
        <a className="text-white bg-transparent border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-black" href="/sepratepage">
          See More{" "}
        </a>
      </div>
    </div>
  );
}

function MyComponent() {
  const [showAllCards, setShowAllCards] = useState(false);

  const cardData = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Placeholder",
      category: "Category",
      title: "Coastal Retreat Oasis",
      description: "Oceanfront Avenue, Seaside Sanctuary",
      price: "$13000",
    },
    // Add more card data objects as needed
  ];

  const visibleCards = showAllCards ? cardData : cardData.slice(0, 3);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {visibleCards.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
      {cardData.length > 3 && !showAllCards && (
        <div className="text-center mt-14">
          <button
            className="bg-black font-sans border border-white text-lg hover:bg-white hover:text-black text-white font-bold py-2 px-6 "
            onClick={toggleShowAllCards}
          >
            Show More
          </button>
        </div>
      )}
      {cardData.length === 9 && showAllCards && (
        <div className="text-center mt-14">
          <button
            className="bg-black font-sans border border-white text-lg hover:bg-white hover:text-black text-white font-bold py-2 px-6  "
            onClick={toggleShowAllCards}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
