import React from "react";
import { committeeMembers } from "../../../data/comitteeMembers";

const CommitteePage = () => {
  return (
    <div className="px-8 py-16 flex flex-col justify-center gap-9">
      {/* Heading */}
      <h1 className="md:text-5xl xl:2xl font-bold text-center mb-12 xs:mb-3">
        <span className="text-blue-500">OFFICE</span> COMMITTEE
      </h1>

      {/* Members */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-16 xs:gap-10">
        {committeeMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-row items-center xs:gap-4 gap-8 p-6 border-y-2 xs:border-y border-gray-400 xs:w-full md-max-lg:w-96 lg:w-1/3"
          >
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 xs:w-21 xs:h-21 object-cover border"
            />
            {/* Member Details */}
            <div className="text-center md:text-left">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-1 text-xs md:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.648-1.5-1.455 0-.827.548-1.455 1.539-1.455.966 0 1.5.628 1.5 1.455 0 .807-.548 1.455-1.539 1.455zm13.5 12.268h-3v-5.337c0-1.28-.46-2.153-1.608-2.153-.876 0-1.396.589-1.627 1.156-.084.202-.104.485-.104.768v5.566h-3s.04-9.034 0-10h3v1.418c.398-.615 1.111-1.489 2.707-1.489 1.976 0 3.432 1.292 3.432 4.066v5.998z" />
                </svg>
              </a>
              <h2 className="text-xl xs:text-lg font-bold">{member.name}</h2>
              <p className="text-blue-500 xs:text-sm md:text-lg font-medium">{member.position}</p>
              <p className="text-gray-600 xs:hidden text-justify text-sm mt-2">{member.desg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteePage;
