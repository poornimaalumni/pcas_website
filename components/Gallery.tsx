"use client";
import React from "react";
import Image from "next/image";

const galleryItems = [
  { id: 1, img: "/gal1.svg", className: "md:h-64 xs:h-56 w-full" }, // Top div in the left column
  { id: 2, img: "/gal2.svg", className: "md:h-48 xs:h-28 w-1/2" }, // First div in the second row of left column
  { id: 3, img: "/gal-3.svg", className: "md:h-48 xs:h-28 w-1/2" }, // Second div in the second row of left column
  { id: 4, img: "/gal-4.svg", className: "h-full w-full" }, // Full-height div in the right column
];

const Gallery = () => {
  return (
    <div className="w-full md:px-8"> {/* Full-width parent container */}
      {/* Heading */}
      <h1 className="md:text-5xl xs:text-2xl font-semibold text-left md:mb-16 xs:mb-10">
        <span className="text-orange-500">2023 AT A</span> GLANCE
      </h1>

      {/* Center-aligned Gallery Container */}
      <div className="flex justify-center">
        <div className="flex md:gap-4 xs:gap-2 xs:h-64 md:h-full w-full max-w-6xl">
          {/* Left Column */}
          <div className="flex flex-col md:gap-4 xs:gap-2 flex-1">
            {/* Row 1 */}
            <div className={`bg-gray-300 rounded-lg shadow-md ${galleryItems[0].className}`}>
              <img src="/gal1.svg" alt="img1" className="w-full h-full object-cover"></img>
            </div>

            {/* Row 2 */}
            <div className="flex md:gap-4 xs:gap-2">
              <div className={`bg-gray-300 rounded-lg shadow-md ${galleryItems[1].className}`}>
              <img src="/gal2.svg" alt="img2" className="w-full h-full object-cover"></img>
              </div>
              <div className={`bg-gray-300 rounded-lg shadow-md ${galleryItems[2].className}`}>
              <img src="/gal3.svg" alt="img3" className="w-full h-full object-cover"></img>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col flex-1">
            <div className={`bg-gray-300 rounded-lg shadow-md ${galleryItems[3].className}`}>
            <img src="/gal4.svg" alt="img4" className="w-full h-full object-cover"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
