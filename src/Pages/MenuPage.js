import React, { useState } from 'react';
import MenuItem from '../components/MenuItems';

import heroImage from "../assests/hero-image.png";
import n from "../assests/pp.png";
import ppp from "../assests/ppp.png";
import VEG from "../assests/vegg.png";
import RP from "../assests/rockpp.png";


// Simulated menu data with images
const menuData = [
  {
    id: 1,
    category: 'Pizza',
    name: 'Pizza Margherita',
    description: 'Classic pizza with tomato and mozzarella',
    prices: { medium: 12, large: 16 },
    image: n,
  },
  {
    id: 2,
    category: 'Pizza',
    name: 'Pepperoni Pizza',
    description: 'Pizza with pepperoni and mozzarella',
    prices: { medium: 14, large: 18 },
    image: ppp,
  },
  {
    id: 3,
    category: 'Sides',
    name: 'Onion Rings',
    description: 'Crispy Onion Rings',
    prices: { medium: 5, large: 7 },
    image: VEG,
  },
  {
    id: 4,
    category: 'Sides',
    name: 'Garlic Bread',
    description: 'Crispy garlic bread',
    prices: { medium: 5, large: 7 },
    image: RP,
  },
  // Add more items as needed
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]); // Initialize `cart` as an empty array

  const handleAddToCart = (item, size) => {
    const newItem = { ...item, selectedSize: size, price: item.prices[size] };
    setCart(prevCart => [...prevCart, newItem]); // Update cart safely
    console.log('Item added to cart:', newItem);
  };

  const filteredMenu =
    selectedCategory === 'All'
      ? menuData
      : menuData.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section
  className="hero-section relative bg-cover bg-center h-[600px] flex items-center justify-center px-6 md:px-14"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Overlay */}
  <div className="overlay absolute inset-0 bg-black bg-opacity-5"></div>
  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-start h-full">
    <h1 className="text-4xl text-white font-passion text-left md:text-6xl font-extrabold leading-snug mt-2 mb-4 tracking-tighter ml-10">
      OUR <span className="text-orange-500">MENU</span>
    </h1>

    <p className="text-white mt-4 text-lg ml-10">
      Explore our wide range of delicious dishes, from pizzas to desserts.
    </p>
    <p className="mt-4  text-left text-white md:text-base leading-relaxed ml-10">
            HOME / MENU
          </p>
    {/* Decorative Bottom Line */}
 {/*   <div className="w-20 h-1 bg-orange-500 mt-4 ml-10"></div>*/}
  </div>
</section>

      {/* Category Navigation */}
 <div className="menu-header flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-16 mt-24">
  <div className="left-header">
    <h2 className="text-4xl font-bold text-gray-900">
      <span className="text-gray-300 font-extrabold ml-10"></span> OUR{' '}
      <span className="text-orange-500">MENU</span>
    </h2>
  </div>
  <div className="categories flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
    {['All', 'Pizza', 'Calzone', 'Pasta', 'Mains', 'Sides', 'Soup', 'Salad', 'Risotto', 'Desserts', 'Beverages'].map(
      category => (
        <button
          key={category}
          className={`px-4 py-2 rounded ${
            selectedCategory === category
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      )
    )}
  </div>
</div>


      {/* Menu Items */}
      <div className="menu-items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-14 mb-20 justify-between px-4 md:px-16 mt-24">
        {filteredMenu.map(item => (
          <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
