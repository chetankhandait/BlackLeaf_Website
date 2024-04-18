import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/data";
import { FeaturedImageGallery } from "./FeaturedImageGallery";
import { ListDefault } from "./ListDefault";
// import Content from "./Content";
const SepratePage = () => {
  return (
    <div>
      <FeaturedImageGallery />
      <ListDefault />
    </div>
  );
};

export default SepratePage;
