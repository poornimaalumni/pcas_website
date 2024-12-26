"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full flex flex-col items-center justify-center border-t md:mt-24 xs:mt-16 border-gray-300 px-4 ">
        <div className="container w-full flex lg:flex-row md:flex-col xs:flex-col justify-between lg:gap-4 md:gap-12 xs:gap-7 mt-6 items-start px-8 ">
            {/* Logo and About Section */}
            <div className="lg:w-1/4 md:w-full xs:w-full flex flex-col gap-2 justify-center ">
                <div className="flex items-center mb-4">
                    <img
                    src="/main.svg"
                    alt="Poornima Logo"
                    className="w-80 mr-2"
                    />
                </div>
                <p className="text-gray-600 text-justify mb-4">
                    Poornima College Alumni Society mission is to enable alumni,
                    students, faculty, and staff to maintain their contact.
                </p>
                <div className="space-y-2">
                    <p className="flex items-center">
                    <img
                        src="/email-icon.svg"
                        alt="Email Icon"
                        className="w-5 h-5 mr-2"
                    />
                    <a
                        href="mailto:alumnirelations.pce@poornima.org"
                        className="text-black hover:underline"
                    >
                        alumnirelations.pce@poornima.org
                    </a>
                    </p>
                    <p className="flex items-center">
                    <img
                        src="/phone-icon.svg"
                        alt="Phone Icon"
                        className="w-5 h-5 mr-2"
                    />
                    <a href="tel:+917300066682" className="text-black hover:underline">
                        +91 7300066682
                    </a>
                    </p>
                </div>
            </div>

            {/* Links Section */}
            <div className="w-fit hidden lg:flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-4">Links</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>
                    <a href="#" className="hover:text-blue-600 hover:underline">
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-blue-600 hover:underline">
                        About Us
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-blue-600 hover:underline">
                        Committee
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-blue-600 hover:underline">
                        Job Portal
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-blue-600 hover:underline">
                        Recent Activities
                    </a>
                    </li>
                </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-fit hidden lg:flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center">
                    <img
                        src="/insta2.svg"
                        alt="Instagram"
                        className="w-5 h-5 mr-2"
                    />
                    <a href="https://www.instagram.com/poornima.alumni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-blue-600 hover:underline">
                        Instagram
                    </a>
                    </li>
                    <li className="flex items-center">
                    <img
                        src="/facebook1.svg"
                        alt="Facebook"
                        className="w-5 h-5 mr-2"
                    />
                    <a href="#" className="hover:text-blue-600 hover:underline">
                        Facebook
                    </a>
                    </li>
                    <li className="flex items-center">
                    <img
                        src="/linkedin2.svg"
                        alt="LinkedIn"
                        className="w-5 h-5 mr-2"
                    />
                    <a href="https://www.linkedin.com/in/pcealumni/" className="hover:text-blue-600 hover:underline">
                        LinkedIn
                    </a>
                    </li>
                    <li className="flex items-center">
                    <img
                        src="/youtube2.svg"
                        alt="YouTube"
                        className="w-5 h-5 mr-2"
                    />
                    <a href="https://www.youtube.com/@thethinkingthieves2136" className="hover:text-blue-600 hover:underline">
                        YouTube
                    </a>
                    </li>
                </ul>
            </div>

            {/* For xs and sm Link and Follow Us */}
            <div className="w-full lg:hidden flex flex-row justify-between gap-16">
                {/* Links Section */}
                <div className="w-fit flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-4">Links</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            Home
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            About Us
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            Committee
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            Job Portal
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            Recent Activities
                        </a>
                        </li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="w-fit flex flex-col justify-center items-center">
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-center">
                        <img
                            src="/instagram-icon.svg"
                            alt="Instagram"
                            className="w-5 h-5 mr-2"
                        />
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            Instagram
                        </a>
                        </li>
                        <li className="flex items-center">
                        <img
                            src="/facebook-icon.svg"
                            alt="Facebook"
                            className="w-5 h-5 mr-2"
                        />
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            Facebook
                        </a>
                        </li>
                        <li className="flex items-center">
                        <img
                            src="/linkedin-icon.svg"
                            alt="LinkedIn"
                            className="w-5 h-5 mr-2"
                        />
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            LinkedIn
                        </a>
                        </li>
                        <li className="flex items-center">
                        <img
                            src="/youtube-icon.svg"
                            alt="YouTube"
                            className="w-5 h-5 mr-2"
                        />
                        <a href="#" className="hover:text-blue-600 hover:underline">
                            YouTube
                        </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Locate Us Section */}
            <div className="md:w-/4  xs:w-full">
                <h3 className="text-lg font-bold mb-4">Locate Us</h3>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3070911059235!2d75.8141433!3d26.8558318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db61f0775c981%3A0x2ad6e8e4301b3f3c!2sPoornima%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1634772045112!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="rounded-md shadow-md"
                ></iframe>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t w-full border-gray-300 mt-8 mb-6 pt-4 text-center text-sm text-gray-500">
            &copy; Copyright <span className="font-bold">PCAS</span> All Rights
            Reserved
        </div>
    </footer>
  );
};

export default Footer;
