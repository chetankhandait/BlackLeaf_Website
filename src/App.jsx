import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // Import your Home component
import SepratePage from "./Components/SepratePage"; // Import your SepratePage component
import { useEffect, useState } from "react";
const App = () => {
  const[Loading,setLoading]=useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);
  return (
    <div className="loader">
      {
        Loading?(
          <div
          className="flex items-center bg-black text-white justify-center h-screen flex-col"
          id="preloaderdiv"
        >
          <img
            src="/images/Y1OP.gif"
            alt=""
            className="w-[156px]  "
          />
          <h2 className="text-[28px] font-mooli font-medium">Blackleaf Properties</h2>
        </div>
        ):(

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sepratepage/:title" element={<SepratePage />} />
            </Routes>
          </BrowserRouter>
        )
      }
    </div>
  );
};

export default App;
