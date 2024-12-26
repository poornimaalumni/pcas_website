// "use client";

// const ContactUs = () => {
//   return (
//     <div className="w-full bg-blue-100 py-12 px-8 flex justify-center">
//       {/* Container */}
//       <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
//         {/* Left Side: Text Section */}
//         <div className="flex flex-col justify-center w-5/12">
//           <h1 className="text-5xl font-semibold mb-10">Contact Us</h1>
//           <p className="text-gray-700 font-primary text-lg text-justify font-medium leading-relaxed">
//             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//           </p>
//         </div>

//         {/* Right Side: Form Section */}
//         <div className="flex-1 p-6">
//           <form className="flex flex-col gap-4">
//             <div className="flex gap-4">
//               {/* First Name */}
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="flex-1 p-3 border border-gray-300 font-primary rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               {/* Last Name */}
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="flex-1 p-3 border border-gray-300 font-primary rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>
//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Email*"
//               className="w-full p-3 border border-gray-300 font-primary rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             {/* Message */}
//             <textarea
//               placeholder="Message"
//               rows={4}
//               className="w-full p-3 border border-gray-300 font-primary rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-1/3 bg-orange-400 font-primary text-white py-2 px-4 rounded-md self-center hover:bg-orange-500 transition"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

"use client";
import { useState } from "react";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="contact-us" className="w-full bg-blue-100 px-8 flex justify-center">
      {/* Main Container */}
      <div className="flex flex-col gap-6 w-11/12 md:py-12 xs:py-8 relative">
        {/* Contact Us Section */}
        <div>
          <h1 className="md:text-5xl xs:text-2xl font-semibold mb-6">Contact Us</h1>
          <p className="text-gray-700 text-justify font-primary md:text-lg xs:text-sm leading-relaxed">
          We&apos;re here to assist you with any inquiries, provide support and listen to your feedback. Our team is committed to delivering exceptional service and 
          ensuring your experience with us exceeds expectations.
          </p>
        </div>

        {/* Button to Open Modal */}
        <button
          onClick={openModal}
          className="bg-orange-400 md:text-lg xs:text-sm font-primary w-fit text-white py-3 px-6 rounded-md hover:bg-orange-500 transition"
        >
          Stay Connected with Us
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal} // Close modal when clicking on the background
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6 lg:w-[850px] md:w-[730px] xs:w-[300px] relative"
              onClick={(e) => e.stopPropagation()} // Prevent background click from closing the modal
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-1 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                &times;
              </button>
              {/* Google Form */}
              <iframe
                src="https://forms.gle/RzqvKotwcrGKtT2f6" // Replace with your Google Form link
                title="Google Form"
                className="lg:w-[800px] md:w-[700px] xs:w-[270px] h-[500px] border rounded-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

