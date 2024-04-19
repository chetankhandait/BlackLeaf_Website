import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/data";
import { FeaturedImageGallery } from "./FeaturedImageGallery";
import { ListDefault } from "./ListDefault";
import SeprateNavbar from "./SeprateNavbar";
// import Content from "./Content";
const SepratePage = () => {
  const { title } = useParams();
  console.log(title);
  const Hotel = Data.find((find) => find.title === title);
  console.log(Hotel);
  return (
    <div className="bg-black">
        <SeprateNavbar {...Hotel} />
      <FeaturedImageGallery />
      <ListDefault {...Hotel} />
    </div>
  );
};

export default SepratePage;
