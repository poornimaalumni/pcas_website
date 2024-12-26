"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav1 = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
      
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
    <nav className='hidden md:flex flex-col w-full h-auto xs:px-4 md:px-8'>
        <div className='flex flex-row w-full py-7 justify-between'>
            <Image src="/main.svg" alt="logo" priority width={300} height={100} />

            <div className="flex flex-row justify-center items-center gap-5">
                <Link href="/register">
                    <button type="button" className="nav-btn">
                        Register
                    </button>
                </Link>

                <div className="flex items-center justify-center">
                    <h1 className="text-3xl">|</h1>
                </div>

                <button
                type="button"
                onClick={openModal}
                className="nav-btn"
                >
                    Contact Us
                </button>
            </div>
        </div>

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

        <div className='h-auto border-t border-black p-7 flex flex-row items-center justify-center lg:gap-14 md:gap-6'>

            <Link href="/" className="nav-link">Home</Link>

            <Link href="/comittee" className="nav-link">Comittee</Link>
            
            <Link href="/alumni" className="nav-link">Alumni</Link>

            <Link href="" className="nav-link hover:text-gray-500">Job Portal</Link>

            {/* <div className="flex space-x-6">
                <div className="relative group overflow-visible">
                    <Link href="/" className="nav-link hover:text-gray-400 cursor-pointer">Services</Link>

                    <div className="absolute left-1/2 -translate-x-1/2 mt-4 h-auto hidden group-hover:block bg-white text-black w-48 rounded shadow-lg z-10">
                        <div className="p-2 space-y-2 flex flex-col items-center">
                            <Link href="/feature1" className="block nav-link px-4 py-2 hover:bg-gray-200">
                            Feature 1
                            </Link>
                            <Link href="/feature2" className="block nav-link px-4 py-2 hover:bg-gray-200">
                            Feature 2
                            </Link>
                            <Link href="/feature3" className="block nav-link px-4 py-2 hover:bg-gray-200">
                            Feature 3
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}

            <Link href="/newsletter" className="nav-link">Newsletter</Link>

            <Link href="/activities" className="nav-link">Recent Activities</Link>
        </div>
    </nav>
  );
}

export default Nav1;
