"use client";

import React, { useState } from "react";

const SideIconBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="fixed top-1/2 left-0 transform -translate-y-1/2 flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle Button */}
      {!isOpen && (
        <div
          className="transition-all duration-300 ease-in-out xs:p-2 bg-blue-100 md:rounded-r-lg xs:rounded-r-sm shadow-md hover:bg-blue-600 md:w-8 xs:w-4 md:h-10 xs:h-4 xs:text-sm flex justify-center items-center cursor-pointer focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out bg-blue-100 rounded-r-lg shadow-lg ${
          isOpen ? "md:w-16 xs:w-8 px-2 py-4" : "w-0"
        } overflow-hidden flex flex-col items-center space-y-3`}
      >
        {isOpen && (
          <>
            <a
              href="https://www.instagram.com/poornima.alumni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="md:w-8 xs:w-4 md:h-8 xs:h-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
              aria-label="Instagram"
            >
              <img src="/insta1.svg" alt="Instagram" className="w-6 xs:w-3 h-6 xs:h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/pcealumni/"
              className="md:w-8 xs:w-4 md:h-8 xs:h-4 rounded-full flex items-center justify-center hover:scale-1w-10 transition-transform focus:outline-none"
              aria-label="LinkedIn"
            >
              <img src="/linkedin1.svg" alt="LinkedIn" className="w-6 xs:w-3 h-6 xs:h-3" />
            </a>
            <a
              href="#"
              className="md:w-8 xs:w-4 md:h-8 xs:h-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
              aria-label="Facebook"
            >
              <img src="/facebook2.svg" alt="Facebook" className="w-6 xs:w-3 h-6 xs:h-3" />
            </a>
            <a
              href="https://www.youtube.com/@thethinkingthieves2136"
              className="md:w-8 xs:w-4 md:h-8 xs:h-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
              aria-label="YouTube"
            >
              <img src="/youtube1.svg" alt="YouTube" className="w-6 xs:w-3 h-6 xs:h-3" />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default SideIconBar;
