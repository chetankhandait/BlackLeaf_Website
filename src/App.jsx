import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // Import your Home component
import SepratePage from "./Components/SepratePage"; // Import your SepratePage component
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
