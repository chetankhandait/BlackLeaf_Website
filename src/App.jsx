import React from "react";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Stat from "./Components/Stat";
import CardDisplay from "./Components/CardDisplay";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sepratepage/:title" element={<SepratePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
