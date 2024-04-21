import { useState } from "react";

function AboutSeperate() {
  const [showMore, setShowMore] = useState(false);
  const text =
    "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.";

  return (
    <div
      className="font-serif w-full sm:   mb-2 rounded-md text-[#dcedfa]  pt-8 px-9"
      id="about"
    >
       
      <div className="bg-gray-900 text-white px-4 py-8 text-center rounded-md leading-7 tracking-wide">
        <div className="flex justify-start pb-8 text-xl font-bold">
          <p>Zirkarpur city,Rawanda</p>
        </div>
        <p>
          {showMore ? text : text.slice(0, 200) + "..."}
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AboutSeperate;
