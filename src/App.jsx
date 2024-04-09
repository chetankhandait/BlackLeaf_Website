import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import LocationSection from "./Components/LocationSection";

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sepratepage" element={<LocationSection/>}/>
      </Routes>
      </BrowserRouter>   
  );
};

export default App;
