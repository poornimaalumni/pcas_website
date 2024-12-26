import React from "react";
import { SuccessStory } from "../type";

interface SuccessStoryCardProps {
  story: SuccessStory; // The story prop expects a SuccessStory type
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ story }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md h-full flex flex-col justify-between">
      {/* Image */}
      <div className="relative lg:h-72 md:h-[480px] xs:h-56">
        <img
          src={story.image}
          alt={story.name}
          className="rounded-lg hover:scale-105 transition-transform duration-300 object-cover h-full w-full"
        />
      </div>

      {/* Card Content */}
      <div className="mt-4 text-center flex flex-col">
        <h3 className="md:text-lg xs:text-base font-primary font-semibold">{story.name}</h3>
        <p className="text-gray-600 font-primary md:text-sm xs:text-xs">{story.desg}</p>
        <p className="text-gray-800 font-primary font-medium xs:text-sm mt-2">{story.year}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
