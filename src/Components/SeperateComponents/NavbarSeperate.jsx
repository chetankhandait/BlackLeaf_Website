import React from "react";
import { Link } from "react-scroll";
import "./NavbarSeperate.css";

const NavbarSeperate = () => {
  return (
    <div className=" overflow-x-auto sticky top-0 z-50">
      <nav className="sm:flex sm:justify sm:center-items-center bg-black border-gray-200 py-5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex gap-4 tracking-wide mt-4 font-medium flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className=" block py-2 pl-3 pr-4   rounded lg:bg-transparent  text-gray-100  dark:text-white text-lg cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="overview"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent  text-gray-100  dark:text-white text-lg cursor-pointer"
                >
                  Overview
                </Link>
              </li>
              {/* Other list items */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSeperate;
