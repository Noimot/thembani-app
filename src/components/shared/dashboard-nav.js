import React from "react";

const DashboardNav = ({heading, subHeading}) => {
  return (
    <header className="w-full flex items-center gap-x-5 h-65">
      <div className="w-3/4 bg-green py-5 text-2xl pl-6">
        <p className="text-dark-1 font-semibold">{heading} <span className="capitalize font-light"> {'>'} {subHeading}</span></p>
      </div>
      <div className="w-1/4 bg-green py-5">
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default DashboardNav;
