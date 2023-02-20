import React from "react";
import Header from "../components/header";
// import Instruction from "../components/instructions";
import { Link } from "react-router-dom";

const GenerateNuib = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="font-poppins w-full h-[calc(100vh-100px)] bg-submitNuibBg bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center px-16 gap-y-8">
       <h2 className="text-center text-3xl text-white">Click the Button to generate your NUIB number to complete your
            profile registration.</h2>
          <Link to="/customer-onboarding">
            <button className="capitalize rounded-full bg-orange-1 text-white text-xl w-200 h-62">
              generate
            </button>
          </Link>
      </div>
    </div>
  );
};

export default GenerateNuib;
