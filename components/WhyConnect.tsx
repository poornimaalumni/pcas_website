"use client";
import React from "react";

const features = [
  {
    id: 1,
    title: "Network Bridging",
    description: "A short description about this great feature.",
    icon: "/net1.svg", // Replace with your actual icon path
  },
  {
    id: 2,
    title: "Experience Exchange",
    description: "A short description about this great feature.",
    icon: "/net3.svg", // Replace with your actual icon path
  },
  {
    id: 3,
    title: "Career Support",
    description: "A short description about this great feature.",
    icon: "/net4.svg", // Replace with your actual icon path
  },
  {
    id: 4,
    title: "Mentorship",
    description: "A short description about this great feature.",
    icon: "/net2.svg", // Replace with your actual icon path
  },
];

const WhyConnect = () => {
    return (
      <div className="md:px-8 w-full">
        {/* Header */}
        <div className="md:mb-12 xs:mb-10">
          <h1 className="md:text-5xl xs:text-2xl font-semibold text-left">
            <span className="text-orange-500">WHY TO</span> CONNECT ?
          </h1>
        </div>
  
        {/* Features List */}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center items-center max-w-6xl md:gap-8 xs:gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="w-full md:w-[40%] md:h-56 xs:h-36 p-4 bg-white flex flex-col justify-center items-center border rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="md:w-16 md:h-16 xs:w-9  object-contain"
                  />
                </div>
  
                {/* Title */}
                <h2 className="md:text-xl xs:text-base font-primary font-med-xl mb-2">{feature.title}</h2>
  
                {/* Description */}
                <p className="text-gray-600 xs:text-xs md:text-sm font-primary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyConnect;