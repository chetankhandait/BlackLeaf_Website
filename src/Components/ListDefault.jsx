import React from "react";
import { NavLink } from "react-router-dom";

export function ListDefault() {
  return (
    <div className="flex justify-center">
      <div className="max-w-full  bg-gray-200   shadow-md mt-4 flex justify-center items-center">
        <ul className="list-none p-0 flex">
          <li className="py-3 px-4 first:border-t cursor-pointer hover:border-b hover:bg-white ">
            <NavLink to="/description">Description</NavLink>
          </li>
          <li className="py-3 px-4 cursor-pointer hover:border-b hover:bg-white ">
            <NavLink to="/address">Address</NavLink>
          </li>
          <li className="py-3 px-4 cursor-pointer hover:border-b hover:bg-white">
            <NavLink to="/details">Details</NavLink>
          </li>
          <li className="py-3 px-4 cursor-pointer hover:border-b hover:bg-white ">
            <NavLink to="/feature">Feature</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
