import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/data";
const SepratePage = () => {
  const { title } = useParams();
  console.log(title);
  const Hotel = Data.find((find) => find.title === title);
  console.log(Hotel);
  // const { ...x } = Hotel;

  return (
    <div>
      <h2>
        Seprate page
        {Hotel.name}
      </h2>
    </div>
  );
};

export default SepratePage;
