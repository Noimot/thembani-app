import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const Instruction = () => {
  return (
    <div className="font-poppins w-full h-full bg-instructionBg bg-cover bg-no-repeat bg-center flex pl-61 py-41">
      <div className="rounded-29 px-10 py-8 w-679 bg-green-2 flex flex-col gap-y-5">
        <h3 className="text-xl font-semibold text-white">
          Application Instructions
        </h3>
        <h3 className="text-lg text-white">
          To successfully complete your application ensure that you have the
          following:
        </h3>
        <ul className="list-decimal px-10 mt-3 flex flex-col gap-y-4">
          <li className="text-lg text-white">
            You will be required to generate a NUIB to apply for loan on this
            platform.
          </li>
          <li className="text-lg text-white">
            Complete the NUIB form with your details and take a selfie, a NUIB
            number will be generated, verified and saved on your profile, you
            will then move to the onboarding page.
          </li>
          <li className="text-lg text-white">
            You will be required to complete all{" "}
            <span className="font-semibold">Customer Onboarding</span> fields.
          </li>
          <li className="text-lg text-white">
            Your eligible amount will be provided &amp; you will be required to
            select your preferred loan amount and period.
          </li>
          <li className="text-lg text-white">
            You will be required to upload a CEDSIF authorisation letter. Click{" "}
            <a
              href="https://res.cloudinary.com/noimot/raw/upload/v1676891636/Acordo_Aceita%C3%A7%C3%A3o_de_Dedu%C3%A7%C3%A3o_na_Fonte_via_CEDSIF_V1_1_hrkpzv.docx"
              className="text-green-1"
              target="_blank"
            >
              here
            </a>{" "}
            to download the CEDSIF authorisation letter template.
          </li>
          <li className="text-lg text-white">
            To complete your loan application, you will be required to read and
            confirm the Terms &amp; Conditions by using your NUIT number.
          </li>
          <li className="text-lg text-white mb-3">
            Once your loan application is complete, you will recieve feedback
            within 24 hours.
          </li>
        </ul>
      </div>
      <div className="w-1/2 flex items-end justify-end pr-165 pb-4">
        <Link to="/generate-nuib">
          <button className="rounded-5 bg-orange-1 text-white text-xl w-200 h-62">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Instruction;
