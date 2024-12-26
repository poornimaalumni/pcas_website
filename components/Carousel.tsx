"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const carouselData = [
  {
    id: 1,
    image: "/college.svg",
    text: "The Poornima College Alumni Society (PCAS), founded in 2005 with its inaugural meeting in October 2006, was established to nurture enduring connections among graduates. ",
  },
  {
    id: 2,
    image: "/college.svg",
    text: "From modest beginnings, PCAS has evolved into a vibrant network of over 17,000 active alumni. ",
  },
  {
    id: 3,
    image: "/college.svg",
    text: "With unwavering commitment, it bridges past and present, fostering relationships that drive growth, honour tradition, and inspire future success.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden ">
      {/* Slides */}
        <div className="flex transition-transform duration-1000 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

            {carouselData.map((slide) => (
            <div key={slide.id} className="min-w-full h-[500px] relative">
            {/* Image */}
                <Image
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    layout="fill"
                    objectFit="cover"
                    priority
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 sm:hidden flex w-full items-center justify-center bg-black bg-opacity-40">
                    <h2 className="text-white w-1/2 self-end mb-24 text-2xl xs:text-xl font-semibold text-center px-4">
                        {slide.text}
                    </h2>
                </div>
            </div>
            ))}
        </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
