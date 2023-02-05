import React from "react";
import cancelIcon from "../../assets/images/cancel-icon.svg";
import DashboardNav from "../../components/shared/dashboard-nav";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-y-8 bg-white">
      <DashboardNav
        heading="NUIB Generation"
        subHeading="Customer onboarding"
      />
      <div className="w-full flex flex-col bg-white gap-y-6">
        <div className="h-220 w-full bg-green rounded-11 flex items-center pl-16 gap-x-189">
          <div className="w-149 h-149 rounded-full bg-red-50">
            <img src="" alt="" />
          </div>
          <div>
            <h1 className="leading-10 text-xl font-semibold text-dark-1">
              Hello, Welcome
            </h1>
            <h2 className="leading-10 font-semibold text-4xl text-green-1">
              Bongane Dube
            </h2>
            <div className="text-dark-1 font-base pt-3">
              <p>
                <span className="w-109 inline-block">Employee No</span>{" "}
                <span>: 8372772772727</span>
              </p>
              <p>
                <span className="w-109 inline-block">NUIT No</span>{" "}
                <span>: 83727727</span>
              </p>
              <p>
                <span className="w-109 inline-block">Account No</span>{" "}
                <span>: 8888888</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-77 flex justify-between items-center px-5 bg-blue-1 rounded-5 border-2 border-solid border-blue-1">
          <p className="text-xl text-white">
            Your application is pending review, feedback will be communicated
            within 24 hours. Thank you.
          </p>
          <span>
            <img src={cancelIcon} alt="" />
          </span>
        </div>
        <div className="w-full h-77 flex justify-between items-center px-5 bg-red-2 rounded-5">
          <p className="text-xl text-white">
            Your application was declined due to some errors. View your
            notification poge to fix the error.
          </p>
          <span>
            <img src={cancelIcon} alt="" />
          </span>
        </div>
        <div className="w-full h-77 flex justify-between items-center px-5 bg-green-5 rounded-5">
          <p className="text-xl text-white">
            Hooray! Your loan application has been approved and will be
            effective in the next 24 hours.
          </p>
          <span>
            <img src={cancelIcon} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
