// import React from 'react';

// const NewsletterPage = () => {
//   return (
//     <div className="w-full">
//       {/* Newsletter Header Section */}
//       <div className="newsletter-header px-8 py-12 text-center flex flex-col items-center">
//         <h1 className="md:text-5xl xs:text-2xl font-semibold md:mb-10 xs:mb-7">
//           <span className="text-blue-600">NEWS</span>LETTER
//         </h1>
//         <h2 className="md:text-3xl xs:text-xl font-semibold md:mb-7 xs:mb-5">Our most memorable and vivacious moments</h2>
//         <h3 className="md:text-5xl xs:text-2xl font-bold text-blue-600 md:mb-9 xs:mb-5">ALLIANZ</h3>
//         <div className="bg-gray-40 p-6 rounded-lg shadow-md max-w-4xl">
//           <p className="md:text-xl xs:text-lg text-center">
//             ALLIANZ is your go-to monthly newsletter that brings you the latest insights, updates,
//             and news on our community, events, and innovations. With a focus on connecting our
//             members and providing valuable information, ALLIANZ keeps you informed and engaged.
//           </p>
//         </div>
//       </div>

//       {/* Newsletter Cards Section */}
//       <div className="newsletter-cards flex flex-col px-8 md:pt-16 xs:pt-8">
//         <h1 className="md:text-5xl xs:text-2xl font-semibold md:mb-16 xs:mb-8">
//           <span className="text-blue-600">OUR</span> NEWSLETTERS
//         </h1>
//         <div className="flex w-full justify-center items-center md:gap-7 xs:gap-2">
//             {/* Card 1 */}
//             <div className="group relative shadow-lg rounded-lg overflow-hidden w-72">
//               <img
//                 src="/2021.svg"
//                 alt="Allianz Volume X"
//                 className="w-full h-full object-cover"
//               />
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                 <p className="text-white text-xl font-bold">Newsletter 2021</p>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="group relative shadow-lg rounded-lg overflow-hidden w-72">
//               <img
//                 src="/2022.svg"
//                 alt="Allianz Volume X"
//                 className="w-full h-full object-cover"
//               />
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                 <p className="text-white text-xl font-bold">Newsletter 2022</p>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="group relative shadow-lg rounded-lg overflow-hidden w-72">
//               <img
//                 src="/2023.svg"
//                 alt="Allianz Volume X"
//                 className="w-full h-full object-cover"
//               />
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                 <p className="text-white text-xl font-bold">Newsletter 2023</p>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="group relative shadow-lg rounded-lg overflow-hidden w-72">
//               <img
//                 src="/2024.svg"
//                 alt="Allianz Volume X"
//                 className="w-full h-full object-cover"
//               />
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                 <p className="text-white text-lg font-bold">Newsletter 2024</p>
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsletterPage;


"use client";

import { useState } from "react";

const NewsletterPage = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);

  type Newsletter = {
    id: number;
    title: string;
    image: string;
    pdf: string;
  };

  // Newsletter data array with Google Drive links for PDFs
  const newsletters: Newsletter[] = [
    {
      id: 1,
      title: "Newsletter 2021",
      image: "/2021.svg",
      pdf: "https://drive.google.com/file/d/19bxXqNvaoZx--FEP4dn88jnrHbZJczSA/preview", // Replace <FILE_ID> with your Drive file ID
    },
    {
      id: 2,
      title: "Newsletter 2022",
      image: "/2022.svg",
      pdf: "https://drive.google.com/file/d/1R_1pPHjTmgcoa0pApoqpivY-ouQZkZKp/preview",
    },
    {
      id: 3,
      title: "Newsletter 2023",
      image: "/2023.svg",
      pdf: "https://drive.google.com/file/d/1WmwIiXjsYUkAs8yKkWdRXyU8XgmjXRLD/preview",
    },
    {
      id: 4,
      title: "Newsletter 2024",
      image: "/2024.svg",
      pdf: "https://drive.google.com/file/d/14h79x0zo1Q79g3miJcH6nwfOy2QP-2BX/preview",
    },
  ];

  // Open modal
  const openNewsletter = (newsletter: Newsletter) => {
    setSelectedNewsletter(newsletter);
  };

  // Close modal
  const closeNewsletter = () => {
    setSelectedNewsletter(null);
  };

  return (
    <div className="w-full">
      {/* Newsletter Header Section */}
      <div className="newsletter-header px-8 py-12 text-center flex flex-col items-center">
        <h1 className="md:text-5xl xs:text-2xl font-semibold md:mb-10 xs:mb-7">
          <span className="text-blue-600">NEWS</span>LETTER
        </h1>
        <h2 className="md:text-3xl xs:text-xl font-semibold md:mb-7 xs:mb-5">
          Our most memorable and vivacious moments
        </h2>
        <h3 className="md:text-5xl xs:text-2xl font-bold text-blue-600 md:mb-9 xs:mb-5">
          ALLIANZ
        </h3>
        <div className="bg-gray-40 p-6 rounded-lg shadow-md max-w-4xl">
          <p className="md:text-xl xs:text-lg text-center">
            ALLIANZ is your go-to monthly newsletter that brings you the latest
            insights, updates, and news on our community, events, and innovations.
            With a focus on connecting our members and providing valuable
            information, ALLIANZ keeps you informed and engaged.
          </p>
        </div>
      </div>

      {/* Newsletter Cards Section */}
      <div className="newsletter-cards flex flex-col px-8 md:pt-16 xs:pt-8">
        <h1 className="md:text-5xl xs:text-2xl font-semibold md:mb-16 xs:mb-8">
          <span className="text-blue-600">OUR</span> NEWSLETTERS
        </h1>
        <div className="flex w-full justify-center items-center md:gap-7 xs:gap-2">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className="group relative shadow-lg rounded-lg overflow-hidden w-72 cursor-pointer"
              onClick={() => openNewsletter(newsletter)}
            >
              <img
                src={newsletter.image}
                alt={newsletter.title}
                className="w-full h-full object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-xl font-bold">{newsletter.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for PDF Viewer */}
      {selectedNewsletter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white w-[90%] max-w-4xl p-6 rounded-lg shadow-lg">
            <button
              onClick={closeNewsletter}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {selectedNewsletter.title}
            </h2>
            <div className="w-full h-[500px]">
              <iframe
                src={selectedNewsletter.pdf}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterPage;
