import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen px-6">
      <h1 className="text-left md:text-5xl xs:text-2xl font-semibold mt-8 mb-16">
        <span className="text-blue-500">ALUMNI</span> REGISTRATION
      </h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdaAosIkrce_YM6_ciJeGN11K3XKJnyPJGda1yyZZkLk0s8Ew/viewform"
        width="100%"
        height="700px"
        className="w-[80%] rounded-lg shadow-md"
        allow="autoplay"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Register;
