"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
      
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="relative md:hidden w-full bg-white shadow-md z-50 px-4">
      {/* Top Section with Logo and Hamburger */}
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <Image src="/main.svg" alt="logo" width={120} height={40} />

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-4 gap-4"
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/comittee" onClick={() => setIsMenuOpen(false)}>
            Committee
          </Link>
          <Link href="/alumni" onClick={() => setIsMenuOpen(false)}>
            Alumni
          </Link>
          <Link href="" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">
            Job Portal
          </Link>
          <Link href="/newsletter" onClick={() => setIsMenuOpen(false)}>
            Newsletter
          </Link>
          <Link href="/activities" onClick={() => setIsMenuOpen(false)}>
            Recent Activities
          </Link>
          <Link href="/register">
              <button type="button" className="nav-btn">
                Register
              </button>
          </Link>
          <button
            type="button"
            onClick={openModal}
            className="nav-btn"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
                {/* Close Button */}
                <button
                onClick={closeModal}
                className="absolute top-1 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
                >
                &times;
                </button>

                {/* Google Form */}
                <iframe
                src="https://forms.gle/RzqvKotwcrGKtT2f6"
                width="100%"
                height="500"
                className="border-0"
                allow="autoplay"
                title="Google Form"
                >
                Loading…
                </iframe>
            </div>
            </div>
        )}
    </nav>
  );
};

export default Nav2;
