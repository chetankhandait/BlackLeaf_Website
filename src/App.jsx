import React from "react";
import Home from "./Components/Home";
import SepratePage from "./Components/SepratePage";

import {BrowserRouter,Route,Routes} from 'react-router-dom'

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
