import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import DashboardNav from "../../components/shared/dashboard-nav";
import { Sidebar } from "../../components/sidebar";

const Dashboard = () => {
  const [onboardingData, setOnboardingData] = useState("");
  
  return (
    <div className="font-poppins w-full">
      <div className="w-full flex ">
        <Sidebar onboardingData={onboardingData} setOnboardingData={setOnboardingData} />
        <div className="w-full h-screen overflow-y-auto px-38 py-31">
          <div>
          <Outlet context={[onboardingData, setOnboardingData]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// export function useMenu() {
//   return useOutletContext();
// }
