 
import React from "react";

const Form = () => {
  return (
    <div className="max-w-md overflow-y-auto mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden h-full w-full">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Book an Appointment
      </div>
      <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="Select a date"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="time"
            placeholder="Select a time"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-gray-700 font-bold mb-2"
          >
            Service
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            name="service"
          >
            <option value="">Select a service</option>
            <option value="haircut">Haircut</option>
            <option value="coloring">Coloring</option>
            <option value="styling">Styling</option>
            <option value="facial">Facial</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Enter any additional information"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
