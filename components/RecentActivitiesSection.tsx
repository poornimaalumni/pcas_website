"use client";

import React from 'react';
import { useState } from 'react';

const RecentActivitiesSection = () => {

    const activities = [
        { img: '/rec1.svg', alt: 'Activity 1' },
        { img: '/rec2.svg', alt: 'Activity 2' },
        { img: '/rec3.svg', alt: 'Activity 3' },
        { img: '/rec4.svg', alt: 'Activity 4' },
        { img: '/rec5.svg', alt: 'Activity 5' },
        { img: '/rec6.svg', alt: 'Activity 6' },
        { img: '/rec7.svg', alt: 'Activity 7' },
        { img: '/rec8.svg', alt: 'Activity 8' },
      ];

    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activities.length - 2 : prevIndex - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= activities.length ? 0 : prevIndex + 2
    );
  };

  return (
    <div>
      <div className="recent-activities-section w-full text-center py-12 lg:mb-10 md:mb-6">
        <h1 className="md:text-5xl xs:text-2xl font-bold mb-8">
          <span className="text-blue-600">RECENT</span> ACTIVITIES
        </h1>
        <p className=" xs:text-base md:text-2xl font-medium xs:mb-5 md:mb-0 lg:mb-14 ">
          Our most memorable and vivacious moments
        </p>

        <div className="flex justify-center items-center md:gap-4 xs:gap-2">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="md:text-3xl xs:text-lg font-bold px-4 py-2"
          >
            &lt;
          </button>

          {/* Carousel Div */}
          <div className="carousel flex items-center justify-center overflow-hidden w-[90%] xs:h-fit md:h-[400px]">
            <div className="flex transition-transform duration-500 md:gap-4 xs:gap-2">
              {activities.slice(currentIndex, currentIndex + 2).map((activity, index) => (
                <div
                  key={index}
                  className="w-[48%] h-full flex-shrink-0 bg-gray-200 rounded-md"
                >
                  <img
                    src={activity.img}
                    alt={activity.alt}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="md:text-3xl xs:text-lg font-bold px-4 py-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentActivitiesSection;
