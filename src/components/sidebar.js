import React, { useState } from "react";
import { Logo } from "./icons/logo";
import { Link, useLocation } from "react-router-dom";
import CustomLink from "./shared/custom-link";
import arrowIcon from "../assets/images/arrow.svg";
import houseIcon from "../assets/images/house-icon.svg";
import loanIcon from "../assets/images/loan-icon.svg";
import loanDetails from "../assets/images/loan-details-icon.svg";
import setting from "../assets/images/setting.svg";
import logout from "../assets/images/logout-icon.svg";
import insuranceIcon from "../assets/images/insurance.svg";
import LoanPopup from "./loan-popup";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const {otpData} = useSelector((state) => state.auth);
  const [visible, setVisibility] = useState(false);
  const { pathname } = useLocation();
  const handleNavigateToTop = () => {
    window.scrollTo(0, 0);
  };
  const toggleVisibility = () => {
    setVisibility((state) => !state);
  };
  const handleLogout = () => {
    localStorage.removeItem("Thembani-TKN-auth");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("userEmail");
    window.location.replace("/login");
  };
  const path =
    pathname === "/loan-application/client-eligibility" ||
    pathname === "/loan-application/payment-reschedule" ||
    pathname === "/loan-application/kyc-upload" ||
    pathname === "/loan-application/loan-acceptance";

    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    return (
    <aside className="h-screen w-272 shadow-4xl bg-green-2 pt-6 px-8 overflow-y-auto scroll-0">
      <div className="flex flex-col items-center justify-center">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex flex-col items-center justify-center gap-y-3 pt-5">
          {/* <li className={`${userProfile.profile === null ? "disable": null}`}> */}
          <li>

            <CustomLink onClick={handleNavigateToTop} to="/">
              <span className="flex items-center gap-x-3">
                <span>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7.10329L9 0.75L18 7.10329V19.9105H10.4211V15.1737H7.57895V19.9105H0V7.10329ZM12.3158 18.0158H16.1053V8.08618L9 3.07105L1.89474 8.08618V18.0158H5.68421V13.2789H12.3158V18.0158ZM6.15789 9.01579C6.15789 7.44967 7.43388 6.17368 9 6.17368C10.5661 6.17368 11.8421 7.44671 11.8421 9.01579C11.8421 10.5819 10.5661 11.8579 9 11.8579C7.43388 11.8579 6.15789 10.5819 6.15789 9.01579ZM7.57895 9.01579C7.57895 9.80033 8.21546 10.4368 9 10.4368C9.78454 10.4368 10.4211 9.80033 10.4211 9.01579C10.4211 8.23125 9.78454 7.59474 9 7.59474C8.21546 7.59474 7.57895 8.23125 7.57895 9.01579Z"
                      fill="#009B72"
                    />
                  </svg>
                </span>
                <span>Dashboard</span>
              </span>
              <span>
                <img src={arrowIcon} alt="" />
              </span>
            </CustomLink>
          </li>
          <li className="flex flex-col ">
          <CustomLink onClick={handleNavigateToTop} to="/loan-application/customer-onboarding">
              <span className="flex items-center gap-x-3">
                <span>
                  <img src={loanDetails} alt="" />
                </span>
                <span className="capitalize">loan application</span>
              </span>
              <span>
                <img src={arrowIcon} alt="" />
              </span>
            </CustomLink>
            {/* <div
              onClick={toggleVisibility}
              className={pathname === "path" ? "linkActive links" : "link links"}
            >
              <span className="flex items-center gap-x-3">
                <span>
                  <img src={loanIcon} alt="" />
                </span>
                <span className="capitalize">loan application</span>
              </span>
              <span>
                <img src={arrowIcon} alt="" />
              </span>
            </div>
            {visible && (
              <div className="transition ease-in-out delay-150">
                <LoanPopup setVisibility={setVisibility} />
              </div>
            )} */}
          </li>
          <li className="">
            <CustomLink onClick={handleNavigateToTop} to="/loan-details">
              <span className="flex items-center gap-x-3">
                <span>
                  <img src={loanDetails} alt="" />
                </span>
                <span className="capitalize">loan details</span>
              </span>
              <span>
                <img src={arrowIcon} alt="" />
              </span>
            </CustomLink>
          </li>
          <li className="">
            <CustomLink onClick={handleNavigateToTop} to="/insurance">
              <span className="flex items-center gap-x-3">
                <span>
                  <img src={insuranceIcon} alt="" />
                </span>
                <span className="capitalize">insurance</span>
              </span>
              <span>
                <img src={arrowIcon} alt="" />
              </span>
            </CustomLink>
          </li>
          <li className="w-full border-b-[3px] border-solid border-grey-1" />
          <li className="">
            <CustomLink onClick={handleNavigateToTop} to="/settings">
              <span className="flex items-center gap-x-3">
                <span>
                  <img src={setting} alt="" />
                </span>
                <span className="capitalize">settings</span>
              </span>
              <span>
                <img src={arrowIcon} alt="" />
              </span>
            </CustomLink>
          </li>
        </ul>
      </div>
      <div
        className="flex items-center text-base text-dark-1 gap-x-3 pt-6"
        onClick={handleLogout}
      >
        <span>
          <img src={logout} alt="" />
        </span>
        <p>logout</p>
      </div>
    </aside>
  );
};
