import React from "react";
import heroImage from "../assests/hero-image.png";
import storyImage from "../assests/story-image.jpg"; // Replace with your image path.
import CheffImage from "../assests/hero-image.png"; // Replace with your image path.
import delivery from "../assests/1.jpg";
import food from "../assests/2.jpg";
import reservation from "../assests/3.jpg";
import truck from "../assests/4.jpg";

const Ser = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center pt-[64px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
{/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-start h-full">

        <h1 className="text-4xl text-white font-passion text-left md:text-6xl font-extrabold leading-snug mt-2 mb-4 tracking-tighter ml-24">
          OUR 
          <span className="text-orange-500"> SERVICES</span>
        </h1>
        <p className="mt-4  text-left text-white md:text-base leading-relaxed ml-24">
          HOME/SERVICES
        </p>


      </div>

        {/* Slider Indicator */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">
          {/* Left Arrow */}
          <button className="p-2 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition">
            <span className="text-lg text-orange-500">←</span>
          </button>

          {/* Current Slide Indicator */}
          <div className="text-center text-white">
            <span className="text-lg font-semibold">01</span>
            <span className="text-sm font-light"> / </span>
            <span className="text-lg font-semibold">05</span>
          </div>

          {/* Right Arrow */}
          <button className="p-2 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition">
            <span className="text-lg text-orange-500">→</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-my-gray text-center p-8 md:p-16 xl:px-36">
        <div className="flex justify-between mb-8">
          <h2 className="text-4xl font-bold">
            OUR <span className="text-orange-500">SERVICES</span>
          </h2>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 hover:text-white hover:scale-105 transition-all duration-300">
            LEARN MORE
          </button>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Fast Delivery */}
          <button className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300">
            <img
              src={delivery}
              alt="Fast Delivery"
              className="w-full h-full object-cover rounded-t-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
              FAST DELIVERY
            </div>
          </button>

          {/* Healthy Foods */}
          <button className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300">
            <img
              src={food}
              alt="Healthy Foods"
              className="w-full h-full object-cover rounded-t-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
              HEALTHY FOODS
            </div>
          </button>

          {/* Reservation */}
          <button className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300">
            <img
              src={reservation}
             
              alt="Reservation"
              className="w-full h-full object-cover rounded-t-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
              RESERVATION
            </div>
          </button>

          {/* Food Truck */}
          <button className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300">
            <img
              src={truck}
              alt="Food Truck"
              className="w-full h-full object-cover rounded-t-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
              FOOD TRUCK
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Ser;
