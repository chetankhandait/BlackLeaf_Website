import React from "react";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Stat from "./Components/Stat";
import CardDisplay from "./Components/CardDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // Import your Home component
import SepratePage from "./Components/SepratePage"; // Import your SepratePage component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sepratepage" element={<SepratePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
