import React, { useState } from "react";
import {Link} from 'react-router-dom'
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
        <Link to={`/sepratepage/${title}`}>
          <p className="text-white bg-transparent border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-black">

          See More{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}

function MyComponent() {
  const [showAllCards, setShowAllCards] = useState(false);

  const cardData = [
     
      {
        id: "one",
        name: "Ko Samui, Thailand",
        type: "Single Room",
        rooms: "Superier Double Room",
        dp: "https://a0.muscache.com/im/pictures/982ef679-2ce5-45f5-96c9-f66b34244be7.jpg?im_w=960",
        img: [
          "https://a0.muscache.com/im/pictures/982ef679-2ce5-45f5-96c9-f66b34244be7.jpg?im_w=960",
          "https://a0.muscache.com/im/pictures/miso/Hosting-28298543/original/2f63e7c9-1133-49ac-b75d-dff79b61920e.jpeg?im_w=480",
          "https://a0.muscache.com/im/pictures/a279ba4f-eb9a-4743-b9fe-3d042fe9fb84.jpg?im_w=480",
          "https://a0.muscache.com/im/pictures/81423324-52d0-49d9-9f2d-6ce2f817808d.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/3019ad9f-9745-4512-a86a-7368fdeda540.jpg?im_w=720"
        ],
        geocode: [9.5071545, 99.9957562],
        description: "A mini pool villa for a couple who look for a nice and quiet vacation. Located in the Heart of Bang MaKham, local of Koh Samui. The sunset of Bang MaKham will be your best experience of your vacation.",
        capacity: "2 guests 1 bedroom 1 bed 1 private bathroom",
        review: "4.84",
        reviewCount: 162,
        
        guest: '16+',
        owner: 'Twesuk',
        ownerImg: "https://a0.muscache.com/im/pictures/user/c9d70d6c-f4ec-4438-a065-f47839c203d3.jpg?im_w=240",
        feature: [
          "This is a rare Find",
          "Hoted by",
          "Free Cancelation for 48hr",
          "thada pani",
          "Self check-in"
        ],
        reviewText: [
          {
            id: 1,
            author: "Lara",
            country: "Riyadh, Saudi Arabia",
            content: "It was really a very nice place, unfortunately just a little away from the shot",
            rating: 5,
          },
          {
            id: 2,
            author: "Moath",
            country: "Aalen, Germany",
            content: "Very nice guests try to help you in every way, smiling does not leave them the room very clean. The bed is the top of comfort, the details are better than five stars, I highly recommend.",
            rating: 4,
          },
          {
            id: 3,
            author: "Sam Johnson",
            country: "Germany",
            content: "Great staff and good food.",
            rating: 4,
          },
          {
            id: 4,
            author: "Nico",
            content: "The best in Koh Samui! Amazing staff, lovely room, and delicious breakfast!! I miss it already!",
            rating: 3,
          },
        ],
        DetailDescription: 'Ko Samui, Surat Thani, Thailand Mostly our property are locate on the main road and surrounded by the local of Bang MaKham such as Local seafood restaurant and Family Mart (24 hr grocery shop). We are nearby the "Four Season Resort" and we are next to "The Mud". We are 15 mins away from Nathon Pier and there is a shuttle bus or the Public Transfer passing us. We are 45 mins away from the International Airport of Koh Samui.',
       
        imageSrc: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Placeholder",
        category: "Category",
        title: "Chirag Gupta",
        description: "Oceanfront Avenue, Seaside Sanctuary",
        price: "$22000",
      },
      {
        id: "one",
        name: "Ko Samui, Thailand",
        type: "Single Room",
        rooms: "Superier Double Room",
        dp: "https://a0.muscache.com/im/pictures/982ef679-2ce5-45f5-96c9-f66b34244be7.jpg?im_w=960",
        img: [
          "https://a0.muscache.com/im/pictures/982ef679-2ce5-45f5-96c9-f66b34244be7.jpg?im_w=960",
          "https://a0.muscache.com/im/pictures/miso/Hosting-28298543/original/2f63e7c9-1133-49ac-b75d-dff79b61920e.jpeg?im_w=480",
          "https://a0.muscache.com/im/pictures/a279ba4f-eb9a-4743-b9fe-3d042fe9fb84.jpg?im_w=480",
          "https://a0.muscache.com/im/pictures/81423324-52d0-49d9-9f2d-6ce2f817808d.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/3019ad9f-9745-4512-a86a-7368fdeda540.jpg?im_w=720"
        ],
        geocode: [9.5071545, 99.9957562],
        description: "A mini pool villa for a couple who look for a nice and quiet vacation. Located in the Heart of Bang MaKham, local of Koh Samui. The sunset of Bang MaKham will be your best experience of your vacation.",
        capacity: "2 guests 1 bedroom 1 bed 1 private bathroom",
        review: "4.84",
        reviewCount: 162,
         
        guest: '16+',
        owner: 'Twesuk',
        ownerImg: "https://a0.muscache.com/im/pictures/user/c9d70d6c-f4ec-4438-a065-f47839c203d3.jpg?im_w=240",
        feature: [
          "This is a rare Find",
          "Hoted by",
          "Free Cancelation for 48hr",
          "thada pani",
          "Self check-in"
        ],
        reviewText: [
          {
            id: 1,
            author: "Lara",
            country: "Riyadh, Saudi Arabia",
            content: "It was really a very nice place, unfortunately just a little away from the shot",
            rating: 5,
          },
          {
            id: 2,
            author: "Moath",
            country: "Aalen, Germany",
            content: "Very nice guests try to help you in every way, smiling does not leave them the room very clean. The bed is the top of comfort, the details are better than five stars, I highly recommend.",
            rating: 4,
          },
          {
            id: 3,
            author: "Sam Johnson",
            country: "Germany",
            content: "Great staff and good food.",
            rating: 4,
          },
          {
            id: 4,
            author: "Nico",
            content: "The best in Koh Samui! Amazing staff, lovely room, and delicious breakfast!! I miss it already!",
            rating: 3,
          },
        ],
        DetailDescription: 'Ko Samui, Surat Thani, Thailand Mostly our property are locate on the main road and surrounded by the local of Bang MaKham such as Local seafood restaurant and Family Mart (24 hr grocery shop). We are nearby the "Four Season Resort" and we are next to "The Mud". We are 15 mins away from Nathon Pier and there is a shuttle bus or the Public Transfer passing us. We are 45 mins away from the International Airport of Koh Samui.',
       
        imageSrc: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Placeholder",
        category: "Category",
        title: "Coastal Retreat Oasis",
        description: "Oceanfront Avenue, Seaside Sanctuary",
        price: "$22000",
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
