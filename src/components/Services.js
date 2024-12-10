import React from 'react';
import delivery from '../assests/4.jpg';
import food from '../assests/3.jpg';
import reservation from '../assests/2.jpg';
import truck from '../assests/1.jpg';

const Services = () => {
  return (
<div className="bg-my-gray text-center p-8 md:p-16 xl:px-36">
      
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-semibold">
          OUR <span className="text-orange-500">SERVICES</span>
        </h2>
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 hover:text-white hover:scale-105 transition-all duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Fast Delivery */}
        <button 
          className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300"
        >
          <img src={delivery} alt="Fast Delivery" className="w-full h-full object-cover rounded-t-md" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
            FAST DELIVERY
          </div>
        </button>
        
        {/*  Healthy Foods */}
        <button 
          className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300"
        >
          <img src={food} alt="Healthy Foods" className="w-full h-full object-cover rounded-t-md" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
            HEALTHY FOODS
          </div>
        </button>
        
        {/*  Reservation */}
        <button 
          className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300"
        >
          <img src={reservation} alt="Reservation" className="w-full h-full object-cover rounded-t-md" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
            RESERVATION
          </div>
        </button>
        
        {/* Food Truck */}
        <button 
          className="relative w-full h-[360px] border border-gray-300 rounded-md cursor-pointer hover:bg-orange-500 hover:scale-105 transition-all duration-300"
        >
          <img src={truck} alt="Food Truck" className="w-full h-full object-cover rounded-t-md" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 rounded-b-md">
            FOOD TRUCK
          </div>
        </button>
      </div>
    </div>
  );
};

export default Services;
