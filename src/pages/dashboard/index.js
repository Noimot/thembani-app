import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import DashboardNav from "../../components/shared/dashboard-nav";
import { Sidebar } from "../../components/sidebar";

const Dashboard = () => {
  const [heading, setHeading] = useState();
  const [profile, setProfile] = useState();
  const navText = () => {
    const pathname = window.location.pathname;
    let text = ""; 
    if (pathname === "/dashboard") {
      text = "Client eligibility";
    }
    else if (pathname === "/customer-onboarding") {
      text="Customer onboarding"
    }
    return text;
  };
  const navSubText = () => {
    const pathname = window.location.pathname;
    let text = ""; 
    if (pathname === "/dashboard") {
      text = "Client eligibility";
    }
    else if (pathname === "/dashboard/customer-onboarding") {
      text="Customer onboarding"
    }
    return text;
  };
  return (
    <div className="font-poppins w-full">
      <div className="w-full flex ">
        <Sidebar />
        <div className="w-full h-screen overflow-y-auto px-38">
          <div className="overflow-y-auto mt-31">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

export function useMenu() {
  return useOutletContext();
}
