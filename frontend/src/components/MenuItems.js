// src/components/MenuItem.js
import React, { useState } from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = (size) => {
    setSelectedSize(size);
    onAddToCart(item, size);
  };

  return (
    <div
      className="menu-item relative border rounded shadow-md overflow-hidden ml-10 w-64 h-80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />

      {/* Name, Price, and Size Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-3 font-passion">
        {/* Name */}
        <h3 className="text-lg font-bold text-left">{item.name.toUpperCase()}</h3>

        {/* Price and Size */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font font-bold">
            PRICE - <span className="text-orange-500 font-passion font-bold">RS. {item.prices.medium}.00</span>
          </p>
          <p className="text-sm font-bold">SIZE - M</p>
        </div>
      </div>

      {/* Hover Details */}
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-between p-4 text-center font-passion font-bold">
          {/* Item Name */}
          <h3 className="text-xl font-bold text-white">{item.name.toUpperCase()}</h3>

          {/* Description */}
          <p className="text-sm text-gray-300 mb-4">{item.description}</p>

          {/* Price Options */}
          <div className="flex justify-center gap-2  mb-14 w-full font-passion whitespace-nowrap text-xs ">
            <button
              className={`flex-1 px-4 py-2 rounded ${selectedSize === 'medium'
                  ? 'bg-orange-500 text-white '
                  : 'bg-black text-white  hover:bg-gray-800 '
                }`}
              onClick={() => handleAddToCart('medium')}
            >
              MEDIUM PIZZA
              <br />
              <span
                className={`${selectedSize === 'medium' ? 'text-white' : 'text-orange-500'
                  }`}
              >
                RS. {item.prices.medium}.00
              </span>
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded  ${selectedSize === 'large'
                  ? 'bg-orange-500 text-white '
                  : 'bg-black text-white  hover:bg-gray-800 '
                }`}
              onClick={() => handleAddToCart('large')}
            >
              LARGE PIZZA
              <br />
              <span
                className={`${selectedSize === 'large' ? 'text-white' : 'text-orange-500'
                  }`}
              >
                RS. {item.prices.large}.00
              </span>
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full absolute bottom-0 bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-none shadow-lg text-sm font-bold"
            onClick={() => handleAddToCart(selectedSize || 'medium')}
          >
            ADD TO CART   →
          </button>

        </div>
      )}
    </div>
  );
};

export default MenuItem;