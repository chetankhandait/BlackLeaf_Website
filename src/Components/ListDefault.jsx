import React, { useState } from "react";
import Data from "../Data/data.js";
export function ListDefault() {
  console.log(Data);
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { ...x } = Data;

  console.log(x);
  const renderTabContent = ( ) => {
    console.log(Data);
    switch (activeTab) {
      case "description":
        return (
          <div>
            <h2>{Data[0].description}</h2>
            <p>Placeholder for description content...</p>
          </div>
        );
      case "address":
        return (
          <div>
            <h2>Address</h2>
            <p>Placeholder for address content...</p>
          </div>
        );
      case "details":
        return (
          <div>
            <h2>Details</h2>
            <p>Placeholder for details content...</p>
          </div>
        );
      case "feature":
        return (
          <div>
            <h2>Feature</h2>
            <p>Placeholder for feature content...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex  justify-center flex-col">
      <div className="max-w-full bg-gray-200 shadow-md mt-4 flex justify-center items-center">
        <ul className="list-none p-0 flex">
          <li
            className={`py-3 px-4 first:border-t cursor-pointer ${
              activeTab === "description"
                ? "border-b bg-white"
                : "hover:border-b hover:bg-white"
            }`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </li>
          <li
            className={`py-3 px-4 cursor-pointer ${
              activeTab === "address"
                ? "border-b bg-white"
                : "hover:border-b hover:bg-white"
            }`}
            onClick={() => handleTabClick("address")}
          >
            Address
          </li>
          <li
            className={`py-3 px-4 cursor-pointer ${
              activeTab === "details"
                ? "border-b bg-white"
                : "hover:border-b hover:bg-white"
            }`}
            onClick={() => handleTabClick("details")}
          >
            Details
          </li>
          <li
            className={`py-3 px-4 cursor-pointer ${
              activeTab === "feature"
                ? "border-b bg-white"
                : "hover:border-b hover:bg-white"
            }`}
            onClick={() => handleTabClick("feature")}
          >
            Feature
          </li>
        </ul>
      </div>
      <div className="mt-4 flex flex-col ">{renderTabContent()}</div>
    </div>
  );
}
