import React from "react";
import { FaSchool } from "react-icons/fa";

const Locality = () => {
  return (
    <div id="locality" className="bg-[#111827] rounded-md  ">
      <h2 className="p-2 text-xl ">locality</h2>
      <div className="p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109806.98210577291!2d76.71292355!3d30.67710055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feeb7a459dbeb%3A0xca229271e467480a!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1713550467939!5m2!1sen!2sin"
          width="750px"
          height=" "
          style={{ border: "0" }} // Note the use of double curly braces for the object
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
         <FaSchool />
      </div>
    </div>
  );
};

export default Locality;
