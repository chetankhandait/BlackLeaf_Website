// import React from "react";
// export function FeaturedImageGallery() {
//   const data = [
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
//     },
//   ];

//   const [active, setActive] = React.useState(
//     "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//   );

//   return (
//     <div className=" gap-4 sm:flex">
//       <div>
//         <img
//           className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
//           src={active}
//           alt=""
//         />
//       </div>
//       <div className="sm:flex sm:flex-col lg:flex lg:flex-row  gap-4">
//         {data.map(({ imgelink }, index) => (
//           <div key={index}>
//             <img
//               onClick={() => setActive(imgelink)}
//               src={imgelink}
//               className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
//               alt="gallery-image"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";

// function FeaturedImageGallery() {
//   const imgs = [
//     "https://picsum.photos/id/7/1280/960",
//     "https://picsum.photos/id/4/1280/960",
//     "https://picsum.photos/id/3/1280/960",
//     "https://picsum.photos/id/2/1280/960",
//   ];
//   const [currentSrc, setCurrentSrc] = useState(
//     "https://picsum.photos/id/7/1280/960"
//   );

//   const chooseImg = (event) => {
//     setCurrentSrc(event.target.src);
//   };

//   return (
//     <div id="app">
//       <h1 className="bg-black text-white text-xl text-center p-4">
//         My easy React + Tailwind gallery
//       </h1>
//       <div className="main bg-black h-screen">
//         <div className="gallery-big border-2 sm:h-4/5 sm:w-3/5 flex items-center justify-center mx-auto relative">
//           <img src={currentSrc} className="w-full h-full bg-img" alt="" />
//           <div className="gallery-small absolute sm:h-3/4 sm:w-4/5 w-64">
//             <img
//               src={currentSrc}
//               className="w-full h-full"
//               alt="no-photozz-bitchezz"
//             />
//           </div>
//         </div>
//         <div className="gallery__mini-container sm:m-2 grid grid-cols-2 sm:grid-cols-4 sm:w-3/5 w-full sm:mx-auto">
//           {imgs.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt=""
//               className="w-full h-auto opacity-60 hover:opacity-100 cursor-pointer"
//               onClick={chooseImg}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeaturedImageGallery;
// import React from "react";

// export function FeaturedImageGallery() {
//   const data = [
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//     },
//     // {
//     //   imgelink:
//     //     "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
//     // },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
//     },
//   ];

//   const [active, setActive] = React.useState(
//     "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//   );

//   return (
//     <div className="flex gap-1 flex-col">
//       <div>
//         <img
//           className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
//           src={active}
//           alt=""
//         />
//       </div>
//       <div className="flex gap-1 mx-1 sm:gap-4 sm:mx-2">
//         {data.map(({ imgelink }, index) => (
//           <div key={index}>
//             <img
//               onClick={() => setActive(imgelink)}
//               src={imgelink}
//               className="h-16 sm:h-48 max-w-full cursor-pointer rounded-lg object-cover object-center"
//               alt="gallery-image"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";

export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  return (
    <div className="flex gap-2 flex-col">
      <div>
        <img
          className="h-auto max-h-[400px] w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="flex gap-1 mx-1 sm:gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-24 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
