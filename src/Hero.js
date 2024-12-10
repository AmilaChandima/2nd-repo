import React from "react";
import heroImage from "./assests/hero-image.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center pt-[64px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-lg uppercase tracking-widest text-orange-400 text-left">
          Welcome to Belmio Pizza
        </h3>
        <h1 className="text-4xl text-left md:text-6xl font-bold leading-tight mt-4">
          Discover More About <br />
          <span className="text-orange-500">Our Delicious Foods</span>
        </h1>
        <p className="mt-4 text-sm text-left md:text-base leading-relaxed">
          Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh
          pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id.
        </p>

        <div className="mt-8">
          <a
            href="#menu"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
          >
            Menu <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Slider Indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">

        {/* Left Arrow */}
        <button className="p-2 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition">
        <span className="text-lg text-orange-500">←</span> {/* Arrow color set to orange */}
        </button>

        {/* Current Slide Indicator */}
        <div className="text-center text-white">
          <span className="text-lg font-semibold">01</span>
          <span className="text-sm font-light"> / </span>
          <span className="text-lg font-semibold">05</span>
        </div>

        {/* Right Arrow */}
        <button className="p-2 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition">
        <span className="text-lg text-orange-500">→</span> {/* Arrow color set to orange */}
        </button>

      </div>
    </section>
  );
};

export default Hero;
