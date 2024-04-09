// import React from "react";

// const Card = ({ imageUrl, title, beds, baths, price, rating, reviews }) => (
//   <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 mb-8">
//     <img
//       className="h-48 w-full object-cover object-end"
//       src={imageUrl}
//       alt={title}
//     />
//     <div className="p-6">
//       <div className="flex items-baseline">
//         <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
//           New
//         </span>
//         <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
//           {beds} beds &bull; {baths} baths
//         </div>
//       </div>
//       <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
//         {title}
//       </h4>

//       <div className="mt-1">
//         <span>${price}</span>
//         <span className="text-gray-600 text-sm">/ wk</span>
//       </div>
//       <div className="mt-2 flex items-center">
//         <span className="text-teal-600 font-semibold">
//           {Array.from({ length: rating }, (_, index) => (
//             <i key={index} className="fas fa-star"></i>
//           ))}
//           {Array.from({ length: 5 - rating }, (_, index) => (
//             <i key={index + rating} className="far fa-star"></i>
//           ))}
//         </span>
//         <span className="ml-2 text-gray-600 text-sm">{reviews} reviews</span>
//       </div>
//     </div>
//   </div>
// );

// const App = () => {
//   // Data for multiple cards
//   const cardData = [
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
//       title: "Beautiful Home in the countryside",
//       beds: 3,
//       baths: 2,
//       price: 1900.0,
//       rating: 4,
//       reviews: 34,
//     },
//     // Add more card data objects as needed
//   ];

//   return (
//     <div className="antialiased text-gray-900">
//       <div className="bg-gray-200 min-h-screen p-8 flex flex-wrap items-center justify-center">
//         {cardData.map((data, index) => (
//           <Card key={index} {...data} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";

function Card({ imageSrc, altText, category, title, description, price }) {
  return (
    <>
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
              {/* <span className="font-bold">{date}</span>
            <small>{timeRead}</small> */}
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
          <a className="text-white bg-transparent border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
            See More{" "}
          </a>
          {/* <span
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">{timeRead}</span>
        </span> */}
        </div>
      </div>
    </>
  );
}

function MyComponent() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Heights Residence"
          category="Photos"
          title="Heights Residence"
          description="Hilltop Lane, Elevated Estates"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Sunset in the mountains"
          category="Photos"
          title="Coastal Retreat Oasis"
          description="Oceanfront Avenue, Seaside Sanctuary"
          price="$13500"
        />
      </div>
    </div>
  );
}

export default MyComponent;
