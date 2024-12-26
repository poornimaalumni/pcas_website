"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { starAlumni } from "../data/starAlumni";

const StarAlumni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItemsPerRow = 3; // Number of alumni per row for small screens
  const intervalTime = 3000; // Auto-scroll time in milliseconds

  // Automatically move the carousel every intervalTime
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleItemsPerRow >= starAlumni.length ? 0 : prevIndex + visibleItemsPerRow
      );
    }, intervalTime);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="md:px-8 w-full overflow-hidden relative">
      <h1 className="text-left md:text-5xl xs:text-2xl font-semibold mb-16">
        <span className="text-orange-500">STAR</span> ALUMNI
      </h1>

      {/* For md and larger screens */}
      <div className="hidden md:flex flex-wrap justify-center gap-8">
        {starAlumni.map((alumnus) => (
          <div
            key={alumnus.id}
            className="relative w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-200 hover:scale-105 transition-transform duration-300 shadow-lg group"
          >
            {/* Alumni Image */}
            <Image
              src={alumnus.image}
              alt={alumnus.name}
              width={150}
              height={150}
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-center md:text-lg font-semibold">{alumnus.name}</p>
              <a
                href={alumnus.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-1 text-xs md:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.648-1.5-1.455 0-.827.548-1.455 1.539-1.455.966 0 1.5.628 1.5 1.455 0 .807-.548 1.455-1.539 1.455zm13.5 12.268h-3v-5.337c0-1.28-.46-2.153-1.608-2.153-.876 0-1.396.589-1.627 1.156-.084.202-.104.485-.104.768v5.566h-3s.04-9.034 0-10h3v1.418c.398-.615 1.111-1.489 2.707-1.489 1.976 0 3.432 1.292 3.432 4.066v5.998z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* For xs and sm screens */}
      <div className="block md:hidden relative h-32 overflow-hidden">
        <div className="flex gap-6 animate-scroll">
          {starAlumni.concat(starAlumni).map((alumnus, index) => (
            <div
              key={`mobile-${index}`}
              className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg flex-shrink-0 group"
            >
              {/* Alumni Image */}
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={96}
                height={96}
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-semibold">{alumnus.name}</p>
                <a
                  href={alumnus.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-1 text-xs"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarAlumni;
