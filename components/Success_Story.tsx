"use client";
import { useState } from "react";
import SuccessStoryCard from "./SuccessStoryCard";
import { successStories } from "../data/successStories";

const SuccessStoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:gap-16 xs:gap-10 w-full xs:px-8">
      {/* Header */}
      <h1 className="md:text-5xl xs:text-2xl font-semibold text-left">
        <span className="text-orange-500">SUCCESS</span> STORY
      </h1>

      <div className="flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="text-3xl font-bold mr-4 py-2"
          aria-label="Previous"
        >
          &lt;
        </button>

        {/* Carousel */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* For xs and sm: Show one card per slide */}
            <div className="flex lg:hidden w-full">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <SuccessStoryCard story={story} />
                </div>
              ))}
            </div>

            {/* For md and above: Show slices */}
            <div className="hidden lg:flex">
              {/* Slide 1 */}
              <div className="flex flex-row justify-between gap-6 w-full flex-shrink-0">
                {successStories.slice(0, 3).map((story, index) => (
                  <SuccessStoryCard key={index} story={story} />
                ))}
              </div>

              {/* Slide 2 */}
              <div className="flex flex-row justify-between w-full gap-6 flex-shrink-0">
                {successStories.slice(3, 6).map((story, index) => (
                  <SuccessStoryCard key={index} story={story} />
                ))}
              </div>

              {/* Slide 3 */}
              <div className="flex flex-row justify-between w-full gap-6 flex-shrink-0">
                {successStories.slice(6, 9).map((story, index) => (
                  <SuccessStoryCard key={index} story={story} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="text-3xl font-bold ml-4 py-2"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SuccessStoryCarousel;
