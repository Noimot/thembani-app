import React from "react";
import bellIcon from "../../assets/images/bell-icon.svg";


const DashboardNav = ({heading, subHeading}) => {
  return (
    <header className="w-full flex items-center gap-x-5 h-65">
      <div className="w-3/4 h-full bg-green py-5 text-2xl pl-6">
        <p className="text-dark-1 font-semibold">{heading} <span className="capitalize font-light"> {'>'} {subHeading}</span></p>
      </div>
      <div className="w-1/4 h-full bg-green py-3 px-4 flex items-center">
        <div className="w-10 h-10 rounded-full bg-green-1 flex items-center justify-center relative">
          <img src={bellIcon} alt="" />
          <span className="w-13 h-13 rounded-full absolute bg-red-5 -top-1 right-0"></span>
        </div>
        <div className="border-b-2 border-solid border-grey-1 rotate-90 w-8"></div>
        <div>
          <div></div>
          <div className="">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
