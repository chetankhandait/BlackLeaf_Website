import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import LocationSection from "./Components/LocationSection";
import SepratePage from "./Components/SepratePage";

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sepratepage/:title" element={<SepratePage/>}/>
      </Routes>
      </BrowserRouter>   
  );
};

export default App;
