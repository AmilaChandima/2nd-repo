// src/components/MenuItem.js
import React, { useState } from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="menu-item relative border rounded shadow-md overflow-hidden ml-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />

      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 bg-black  text-white text-center p-8">
        <h3 className="text-lg font-bold">{item.name}</h3>
      </div>

      {/* Hover Details */}
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
          <p className="text-white">{item.description}</p>
          <p className="mt-2 text-white">Medium: ${item.prices.medium}</p>
          <p className="mt-2 text-white">Large: ${item.prices.large}</p>
          <div className="flex space-x-2 mt-4">
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded"
              onClick={() => onAddToCart(item, 'medium')}
            >
              Add Medium
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded"
              onClick={() => onAddToCart(item, 'large')}
            >
              Add Large
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
