import React from "react";
import { successStories } from "../../../data/successStories";

const Alumni = () => {
  return (
    <div className="flex flex-col mt-8 w-full items-center px-16">
      {/* Page Heading */}
      <h1 className="md:text-5xl xs:text-2xl mb-16 font-semibold text-center">
        <span className="text-blue-500">SUCCESS</span> STORY
      </h1>

      {/* Alumni Stories Section */}
      <div className="flex flex-col w-full gap-8">
        {successStories.map((alumnus) => (
          <div
            key={alumnus.id}
            className="flex flex-col md:flex-row w-full bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Alumni Photo with Hover Effect */}
            <div className="relative w-full md:w-1/3 h-64 group">
              <img
                src={alumnus.image}
                alt={alumnus.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Batch */}
                <p className="text-white text-lg font-bold mb-2">Batch of {alumnus.year}</p>

                {/* LinkedIn Link */}
                <a
                  href={alumnus.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white text-sm bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.648-1.5-1.455 0-.827.548-1.455 1.539-1.455.966 0 1.5.628 1.5 1.455 0 .807-.548 1.455-1.539 1.455zm13.5 12.268h-3v-5.337c0-1.28-.46-2.153-1.608-2.153-.876 0-1.396.589-1.627 1.156-.084.202-.104.485-.104.768v5.566h-3s.04-9.034 0-10h3v1.418c.398-.615 1.111-1.489 2.707-1.489 1.976 0 3.432 1.292 3.432 4.066v5.998z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Alumni Details */}
            <div className="flex flex-col w-full md:w-2/3 p-6">
              {/* Name */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{alumnus.name}</h2>

              {/* Description */}
              <p className="text-gray-700 text-base mb-6">{alumnus.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
