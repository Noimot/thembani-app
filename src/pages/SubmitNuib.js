import React from "react";
import { Link } from "react-router-dom";

function SubmitNuib() {
  return (
    <div className="w-full">
      <div className="w-full h-[102px] px-6 flex shadow-md justify-between items-center bg-white">
        <img
          src="./logo.png"
          alt="logo"
          className="block h-24 w-auto"
        />
      </div>
      <div
        className="w-full h-screen md:pt-32 lg:pt-64"
        style={{
          backgroundImage: 'url("/banner2.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-fullpx-8 md:px-20 flex-col items-center justify-center py-8">
          <h3 className="text-center text-3xl text-white">
            Click the Button to generate your NUIB number to complete your
            profile registration.
          </h3>
          <Link to={'/app/dashboard/generate-nuib'} >
          <a
           
            className="bg-orange-500 text-white flex mx-auto mt-10 text-lg items-center justify-center rounded-full"
            style={{ width: 226, height: 73 }}
          >
            Generate
          </a>
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default SubmitNuib;
