import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Truck from "../assests/truck.png";

const HeroAndForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[75vh] flex items-center pt-[64px]"
        style={{ backgroundImage: `url(${Truck})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-start h-full">
          <h1 className="text-4xl text-white font-passion text-left md:text-6xl font-extrabold leading-snug mt-2 mb-4 tracking-tighter ml-24">
            FOOD <span className="text-orange-500">TRUCK</span>
          </h1>
          <p className="mt-4  text-left text-white md:text-base leading-relaxed ml-24">
            HOME / SERVICES / FOOD TRUCK
          </p>
        </div>
      </section>


      {/* Form Section */}
      <div className="bg-gray-100 flex justify-center items-center min-h-screen px-8">
        <form
          className="grid gap-10 bg-white shadow-lg p-20 w-full max-w-6xl"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)", // Three columns for the first row
            gap: "50px", // Increased space between fields
          }}
        >
          {/* Date Field */}
          <div className="flex flex-col col-span-1">
            <label className="font-bold text-2xl uppercase mb-3">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy MMMM dd"
              placeholderText="Select a date"
              className="p-5 border border-gray-300 bg-gray-200 text-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Name Field */}
          <div className="flex flex-col col-span-1">
            <label className="font-bold text-2xl uppercase mb-3">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="p-5 border border-gray-300 bg-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Contact Number Field */}
          <div className="flex flex-col col-span-1">
            <label className="font-bold text-2xl uppercase mb-3">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              className="p-5 border border-gray-300 bg-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Location Field */}
          <div className="flex flex-col col-span-2">
            <label className="font-bold text-2xl uppercase mb-3">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter location"
              className="p-5 border border-gray-300 bg-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-end col-span-1">
            <button
              type="submit"
              className="w-full py-5 bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HeroAndForm;
