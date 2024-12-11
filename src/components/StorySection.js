import React from "react";
import storyImage from "../assests/story-image.jpg";

function StorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-1/2 mr-4">
          {/* Heading */}
          <h2 className="text-4xl font-passion md:text-4xl font-extrabold text-gray-800 mb-8">
            DISCOVER OUR <span className="text-orange-500">STORY</span>
          </h2>

          {/* Image */}
          <img
            src={storyImage}
            alt="Belmio Pizza Shop"
            className="rounded shadow-lg w-full"
          />
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col justify-start ml-5">
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
          Belmio Pizza, founded in 2016, is a vibrant and beloved pizza restaurant nestled in the heart of Thalawathugoda. Known for its authentic flavors and fresh ingredients, Belmio Pizza has become a go-to destination for pizza lovers seeking a blend of tradition and innovation. With a commitment to quality and customer satisfaction, the restaurant continues to serve delicious, handcrafted pizzas that bring people together, creating memorable dining experiences for families and friends.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
          Belmio Pizza is now expanding its reach by embracing technology to enhance customer convenience and engagement. With plans to launch its first e-commerce platform, the restaurant aims to make online ordering and promotions more accessible to its growing customer base.
          </p>

          {/* Details Section */}
          <div className="flex gap-8 mb-8 justify-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                SINCE <span className="text-blue-600">2015</span>
              </h3>
              <p className="text-gray-600">
              Serving quality, tradition, and unforgettable flavors with every slice
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                10K+ <span className="text-blue-600">CLIENTS</span>
              </h3>
              <p className="text-gray-600">
              Trusted by over 10,000 happy clients who love our delicious pizzas
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-4 self-start">
            <a
              href="#learn-more"
              className="px-5 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
