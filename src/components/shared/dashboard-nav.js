import React from "react";
import bellIcon from "../../assets/images/bell-icon.svg";


const DashboardNav = ({heading, subHeading}) => {
  return (
    <header className="w-full flex items-center gap-x-5 h-65">
      <div className="w-66 h-full bg-green py-5 text-2xl pl-6">
        <p className="text-dark-1 font-semibold">{heading} <span className="capitalize font-light"> {'>'} {subHeading}</span></p>
      </div>
      <div className="w-34 h-full bg-green py-3 px-4 flex items-center justify-between">
        <div className="w-10 h-10 rounded-full bg-green-1 flex items-center justify-center relative">
          <img src={bellIcon} alt="" />
          <span className="w-13 h-13 rounded-full absolute bg-red-5 -top-1 right-0"></span>
        </div>
        <div className="border-b-2 border-solid border-grey-1 rotate-90 w-8"></div>
        <div className="flex items-center text-right gap-x-2">
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-dark-1 whitespace-nowrap">Bongane Dube</h1>
            <span className="text-sm font-medium text-grey-5">Admin</span>
          </div>
          <div className="w-11 h-11 rounded-full bg-grey-1">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
