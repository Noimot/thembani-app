import React from "react";
import cancelIcon from "../../assets/images/cancel-icon.svg";
import DashboardNav from "../../components/shared/dashboard-nav";
import DashboardProfile from "../../components/shared/DashboardProfile";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-y-8 bg-white">
      <DashboardNav
        heading="NUIB Generation"
        subHeading="Customer onboarding"
      />
      <div className="w-full flex flex-col bg-white gap-y-6">
        <DashboardProfile/>
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
