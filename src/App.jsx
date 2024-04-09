import React from "react";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Stat from "./Components/Stat";
import CardDisplay from "./Components/CardDisplay";
import ContactForm from "./Components/ContactForm";
import LocationSection from "./Components/LocationSection";
import ProductDescription from "./Components/ProductDescription";

const App = () => {
  return (
    <div className="bg-black">
      {/* <h3 className="bg-blue-400 p-3">hi this chetan</h3> */}
      <Navbar />
      <Hero />
      <ProductList />
      <ProductDescription />
      <Stat />
      <CardDisplay />
      <LocationSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
