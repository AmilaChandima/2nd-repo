import React from "react";
import storyImage from "./assests/story-image.jpg"; // Replace with your image path.

function StorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-1/2 mr-4">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-left text-justify mb-6">
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
          <p className="text-gray-600 text-left text-justify leading-relaxed mb-6">
            Quam ultrices bibendum accumsan morbi risus iaculis tellus tellus
            molestie. Auctor eu auctor aliquam porttitor scelerisque massa
            volutpat elit, urna. Eget quis porta euismod diam justo, tempor
            vehicula. Egestas turpis vel non diam nunc amet, a risus diam.
            Ultrices ac blandit sem nec nulla nisi habitasse. Aliquet
            pellentesque potenti massa eget pellentesque. Feugiat turpis in a
            sed. Nisl tincidunt cras tempus ipsum, sollicitudin vitae facilisis
            quis volutpat.
          </p>
          <p className="text-gray-600 text-left text-justify leading-relaxed mb-8">
            Quam ultrices bibendum accumsan morbi risus iaculis tellus tellus
            molestie. Auctor eu auctor aliquam porttitor scelerisque massa
            volutpat elit, urna. Eget quis porta euismod diam justo, tempor
            vehicula.
          </p>

          {/* Key Details Section */}
          <div className="flex gap-8 mb-8 justify-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800 text-left text-justify">
                SINCE <span className="text-blue-600">2015</span>
              </h3>
              <p className="text-gray-600 text-left text-justify">
                Duis cursus neque et at ipsum. Cursus urna fringilla nisl enim
                duis cras odio.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 text-left text-justify">
                100K+ <span className="text-blue-600">CLIENTS</span>
              </h3>
              <p className="text-gray-600 text-left text-justify">
                Metus varius vitae habitant lorem. Porta scelerisque facilisi.
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
