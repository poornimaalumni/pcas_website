"use client";

import React from 'react';
import { useState } from 'react';
import { glimpses } from '../data/glimpses';
import { Glimpse } from '../type';

const GlimpsesSection = () => {

    const [selectedGlimpse, setSelectedGlimpse] = useState<Glimpse | null>(null);

  const openModal = (glimpse: Glimpse) => {
    setSelectedGlimpse(glimpse);
  };

  const closeModal = () => {
    setSelectedGlimpse(null);
  };

  return (
    <div className="glimpses-section w-full text-center px-4 xs:px-2">
        <h1 className="font-bold mb-8 md:mb-12 lg:mb-16 text-2xl md:text-5xl">
          <span className="text-blue-600">SOME</span> GLIMPSES
        </h1>
        <div className="flex flex-wrap w-full justify-center md:gap-10 xs:gap-5">
          {glimpses.map((glimpse) => (
            <div
              key={glimpse.id}
              onClick={() => openModal(glimpse)}
              className="glimpse-card relative w-1/3 max-w-[340px] xl:max-w-[410px] bg-white shadow-lg rounded-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex-shrink-0"
            >
              {/* Image */}
              <div className="relative w-full h-32 md:h-64 lg:h-96">
                <img
                  src={glimpse.img}
                  alt={glimpse.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-white text-black 2text-center py-2">
                <h2 className="md:text-base xs:text-sm font-bold">{glimpse.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedGlimpse && (
        <div className="fixed inset-0 z-50 flex items-center h-full justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-2/3 p-6 h-[80%] relative ">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-1 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
            >
              &times;
            </button>

            {/* Content */}
            <div className="flex flex-col gap-6 h-full overflow-y-auto ">
              <h2 className="text-2xl md:text-4xl font-bold text-center">
                {selectedGlimpse.title}
              </h2>
              <div className="w-full h-96 md:h-[550px]">
                <img
                  src={selectedGlimpse.photo}
                  alt={selectedGlimpse.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 description text-base text-justify px-4 md:text-lg">
                {selectedGlimpse.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GlimpsesSection;
