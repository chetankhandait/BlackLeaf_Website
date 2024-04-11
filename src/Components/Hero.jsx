import React, { useState, useEffect } from "react";

function Hero() {
  const [backgroundImages, setBackgroundImages] = useState([
    "https://framerusercontent.com/images/Hygf64Ai0l4Nl2sRfWtZOKQ9BQc.jpg?scale-down-to=2048",
    "https://framerusercontent.com/images/IRtceiCnSbSzdYAkWUXEPlwKvg.jpg?scale-down-to=2048",
    "https://framerusercontent.com/images/Yk5NUfVTc3PA6kSeJiP2qU28o.jpg?scale-down-to=2048",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // Change background image every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, [backgroundImages]);

  const houseName = ["Chetan House", "Chirag House", "Aryan House"]; // Name of the houses
  const housePrices = ["$500,000", "$700,000", "$600,000"]; // Prices of the houses

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="flex flex-col min-h-screen  bg-cover bg-fixed bg-center bg-black bg-opacity-30 relative justify-end"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        {/* Name and Price of the house */}
        <div className="flex flex-col items-start justify-center h-full p-8 sm:mx-6 sm:mb-6">
          <div className="text-white text-4xl sm:text-6xl font-semibold mb-4">
            {houseName[currentImageIndex]}
          </div>
          <div className="text-white text-xl font-semibold mb-8 font-sans">
            Offered at {housePrices[currentImageIndex]}
          </div>
          <button className="border border-gray-300 bg-transparent text-white px-6 py-3 text-xl hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </section>

      {/* New Collection Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collection
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {backgroundImages.map((imageUrl, index) => (
              <li key={index}>
                <a href="#" className="group relative block">
                  <div
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      {houseName[index]}
                    </h3>
                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Hero;
