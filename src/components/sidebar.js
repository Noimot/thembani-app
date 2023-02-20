import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../app/features/thunk/authThunk";
import "../styles/style.css";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const { userDetailsData } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUserDetails(userProfile.id));
  }, []);
  const handleNavigateToTop = () => {
    window.scrollTo(0, 0);
  };
  console.log(userDetailsData, "user details");

  const handleLogout = () => {
    localStorage.removeItem("Thembani-TKN-auth");
    localStorage.removeItem("userProfile");
    window.location.replace("/login");
  };
  // const path =
  //   pathname === "/loan-application/client-eligibility" ||
  //   pathname === "/loan-application/payment-reschedule" ||
  //   pathname === "/loan-application/kyc-upload" ||
  //   pathname === "/loan-application/loan-acceptance";

  const evaluateActivelink = (to, pathname) => {
    return to === "/" ? pathname === to : pathname.startsWith(to);
  };
  const { pathname } = useLocation();

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
                      fill={`${
                        evaluateActivelink("/", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                    />
                  </svg>
                </span>
                <span>Dashboard</span>
              </span>
              <span>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.5 5.5L1 10"
                    stroke={`${
                      evaluateActivelink("/", pathname) ? "#ffffff" : "#009B72"
                    }`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </CustomLink>
          </li>
          <li className="flex flex-col disable">
            <CustomLink
              onClick={handleNavigateToTop}
              to="/loan-application/customer-onboarding"
            >
              <span className="flex items-center gap-x-3">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12.75C2.58586 12.75 2.25 12.4141 2.25 12V3C2.25 2.58586 2.58586 2.25 3 2.25H16.5C16.9141 2.25 17.25 2.58586 17.25 3C17.25 3.41414 16.9141 3.75 16.5 3.75H3.75V12C3.75 12.4141 3.41414 12.75 3 12.75ZM21 22.5H3C2.58586 22.5 2.25 22.1641 2.25 21.75V19.5103C2.25 19.0962 2.58586 18.7603 3 18.7603C3.41414 18.7603 3.75 19.0962 3.75 19.5103V21H20.25V7.5C20.25 7.08586 20.5859 6.75 21 6.75C21.4141 6.75 21.75 7.08586 21.75 7.5V21.75C21.75 22.1641 21.4141 22.5 21 22.5Z"
                      fill={`${
                        evaluateActivelink("/loan-application", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                    />
                    <path
                      d="M5.05962 15.0487C4.90517 15.0487 4.74954 15.0014 4.61572 14.9027C4.28197 14.6573 4.21048 14.1879 4.45611 13.8541L7.7165 9.42254C7.96189 9.08879 8.43134 9.01754 8.76509 9.26293C9.09884 9.50832 9.17033 9.97778 8.9247 10.3115L5.66431 14.7433C5.51736 14.943 5.29001 15.0487 5.05962 15.0487ZM14.1562 13.2656C13.9795 13.2656 13.802 13.2035 13.6595 13.0772L10.4017 10.1943C10.0914 9.91988 10.0626 9.44574 10.337 9.13567C10.6115 8.82535 11.0856 8.79653 11.3957 9.07098L14.6535 11.9538C14.9638 12.2282 14.9927 12.7024 14.7182 13.0125C14.5699 13.18 14.3634 13.2656 14.1562 13.2656ZM16.4955 12.9482C16.3987 12.9482 16.3 12.9293 16.2051 12.8894C15.8233 12.7289 15.6438 12.2892 15.8043 11.9074L18.4103 5.70934C18.5709 5.32754 19.0106 5.14801 19.3924 5.30856C19.7742 5.4691 19.9537 5.90879 19.7931 6.29059L17.1871 12.4889C17.0667 12.7757 16.7882 12.9482 16.4955 12.9482Z"
                      fill={`${
                        evaluateActivelink("/loan-application", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                    />
                    <path
                      d="M4.07812 13.1484C2.6543 13.1484 1.5 14.3027 1.5 15.7266C1.5 17.1504 2.6543 18.3047 4.07812 18.3047C5.50195 18.3047 6.65625 17.1504 6.65625 15.7266C6.65625 14.3027 5.50195 13.1484 4.07812 13.1484ZM4.07812 16.6641C3.56039 16.6641 3.14062 16.2443 3.14062 15.7266C3.14062 15.2088 3.56039 14.7891 4.07812 14.7891C4.59586 14.7891 5.01562 15.2088 5.01562 15.7266C5.01562 16.2443 4.59586 16.6641 4.07812 16.6641ZM9.42188 6C7.99805 6 6.84375 7.1543 6.84375 8.57812C6.84375 10.002 7.99805 11.1562 9.42188 11.1562C10.8457 11.1562 12 10.002 12 8.57812C12 7.1543 10.8457 6 9.42188 6ZM9.42188 9.51562C8.90414 9.51562 8.48438 9.09586 8.48438 8.57812C8.48438 8.06039 8.90414 7.64062 9.42188 7.64062C9.93961 7.64062 10.3594 8.06039 10.3594 8.57812C10.3594 9.09586 9.93961 9.51562 9.42188 9.51562ZM15.4453 11.3438C14.0215 11.3438 12.8672 12.498 12.8672 13.9219C12.8672 15.3457 14.0215 16.5 15.4453 16.5C16.8691 16.5 18.0234 15.3457 18.0234 13.9219C18.0234 12.498 16.8691 11.3438 15.4453 11.3438ZM15.4453 14.8594C14.9276 14.8594 14.5078 14.4396 14.5078 13.9219C14.5078 13.4041 14.9276 12.9844 15.4453 12.9844C15.963 12.9844 16.3828 13.4041 16.3828 13.9219C16.3828 14.4396 15.963 14.8594 15.4453 14.8594ZM19.9219 1.5C18.498 1.5 17.3438 2.6543 17.3438 4.07812C17.3438 5.50195 18.498 6.65625 19.9219 6.65625C21.3457 6.65625 22.5 5.50195 22.5 4.07812C22.5 2.6543 21.3457 1.5 19.9219 1.5ZM19.9219 5.01562C19.4041 5.01562 18.9844 4.59586 18.9844 4.07812C18.9844 3.56039 19.4041 3.14062 19.9219 3.14062C20.4396 3.14062 20.8594 3.56039 20.8594 4.07812C20.8594 4.59586 20.4396 5.01562 19.9219 5.01562Z"
                      fill={`${
                        evaluateActivelink("/loan-application", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                    />
                  </svg>
                </span>
                <span className="capitalize">loan application</span>
              </span>
              <span>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.5 5.5L1 10"
                    stroke={`${
                      evaluateActivelink("/loan-application", pathname) ? "#ffffff" : "#009B72"
                    }`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </CustomLink>
          </li>
          <li className="disable">
            <CustomLink onClick={handleNavigateToTop} to="/loan-details">
              <span className="flex items-center gap-x-3">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12.75C2.58586 12.75 2.25 12.4141 2.25 12V3C2.25 2.58586 2.58586 2.25 3 2.25H16.5C16.9141 2.25 17.25 2.58586 17.25 3C17.25 3.41414 16.9141 3.75 16.5 3.75H3.75V12C3.75 12.4141 3.41414 12.75 3 12.75ZM21 22.5H3C2.58586 22.5 2.25 22.1641 2.25 21.75V19.5103C2.25 19.0962 2.58586 18.7603 3 18.7603C3.41414 18.7603 3.75 19.0962 3.75 19.5103V21H20.25V7.5C20.25 7.08586 20.5859 6.75 21 6.75C21.4141 6.75 21.75 7.08586 21.75 7.5V21.75C21.75 22.1641 21.4141 22.5 21 22.5Z"
                      fill={`${
                        evaluateActivelink("/loan-details", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                    />
                    <path
                      d="M5.05962 15.0487C4.90517 15.0487 4.74954 15.0014 4.61572 14.9027C4.28197 14.6573 4.21048 14.1879 4.45611 13.8541L7.7165 9.42254C7.96189 9.08879 8.43134 9.01754 8.76509 9.26293C9.09884 9.50832 9.17033 9.97778 8.9247 10.3115L5.66431 14.7433C5.51736 14.943 5.29001 15.0487 5.05962 15.0487ZM14.1562 13.2656C13.9795 13.2656 13.802 13.2035 13.6595 13.0772L10.4017 10.1943C10.0914 9.91988 10.0626 9.44574 10.337 9.13567C10.6115 8.82535 11.0856 8.79653 11.3957 9.07098L14.6535 11.9538C14.9638 12.2282 14.9927 12.7024 14.7182 13.0125C14.5699 13.18 14.3634 13.2656 14.1562 13.2656ZM16.4955 12.9482C16.3987 12.9482 16.3 12.9293 16.2051 12.8894C15.8233 12.7289 15.6438 12.2892 15.8043 11.9074L18.4103 5.70934C18.5709 5.32754 19.0106 5.14801 19.3924 5.30856C19.7742 5.4691 19.9537 5.90879 19.7931 6.29059L17.1871 12.4889C17.0667 12.7757 16.7882 12.9482 16.4955 12.9482Z"
                      fill={`${
                        evaluateActivelink("/", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                    />
                    <path
                      d="M4.07812 13.1484C2.6543 13.1484 1.5 14.3027 1.5 15.7266C1.5 17.1504 2.6543 18.3047 4.07812 18.3047C5.50195 18.3047 6.65625 17.1504 6.65625 15.7266C6.65625 14.3027 5.50195 13.1484 4.07812 13.1484ZM4.07812 16.6641C3.56039 16.6641 3.14062 16.2443 3.14062 15.7266C3.14062 15.2088 3.56039 14.7891 4.07812 14.7891C4.59586 14.7891 5.01562 15.2088 5.01562 15.7266C5.01562 16.2443 4.59586 16.6641 4.07812 16.6641ZM9.42188 6C7.99805 6 6.84375 7.1543 6.84375 8.57812C6.84375 10.002 7.99805 11.1562 9.42188 11.1562C10.8457 11.1562 12 10.002 12 8.57812C12 7.1543 10.8457 6 9.42188 6ZM9.42188 9.51562C8.90414 9.51562 8.48438 9.09586 8.48438 8.57812C8.48438 8.06039 8.90414 7.64062 9.42188 7.64062C9.93961 7.64062 10.3594 8.06039 10.3594 8.57812C10.3594 9.09586 9.93961 9.51562 9.42188 9.51562ZM15.4453 11.3438C14.0215 11.3438 12.8672 12.498 12.8672 13.9219C12.8672 15.3457 14.0215 16.5 15.4453 16.5C16.8691 16.5 18.0234 15.3457 18.0234 13.9219C18.0234 12.498 16.8691 11.3438 15.4453 11.3438ZM15.4453 14.8594C14.9276 14.8594 14.5078 14.4396 14.5078 13.9219C14.5078 13.4041 14.9276 12.9844 15.4453 12.9844C15.963 12.9844 16.3828 13.4041 16.3828 13.9219C16.3828 14.4396 15.963 14.8594 15.4453 14.8594ZM19.9219 1.5C18.498 1.5 17.3438 2.6543 17.3438 4.07812C17.3438 5.50195 18.498 6.65625 19.9219 6.65625C21.3457 6.65625 22.5 5.50195 22.5 4.07812C22.5 2.6543 21.3457 1.5 19.9219 1.5ZM19.9219 5.01562C19.4041 5.01562 18.9844 4.59586 18.9844 4.07812C18.9844 3.56039 19.4041 3.14062 19.9219 3.14062C20.4396 3.14062 20.8594 3.56039 20.8594 4.07812C20.8594 4.59586 20.4396 5.01562 19.9219 5.01562Z"
                      fill={`${
                        evaluateActivelink("/loan-details", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                    />
                  </svg>
                </span>
                <span className="capitalize">loan details</span>
              </span>
              <span>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.5 5.5L1 10"
                    stroke={`${
                      evaluateActivelink("/loan-details", pathname) ? "#ffffff" : "#009B72"
                    }`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </CustomLink>
          </li>
          <li className="disable">
            <CustomLink onClick={handleNavigateToTop} to="/insurance">
              <span className="flex items-center gap-x-3">
                <span>
                  <svg
                    width="19"
                    height="26"
                    viewBox="0 0 19 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3203_705)">
                      <path
                        d="M2.27282 10.7005C2.27282 10.6052 2.27282 10.5067 2.27282 10.4081C2.27885 9.3696 2.24734 8.32972 2.29762 7.29185C2.39177 5.61963 3.10036 4.04113 4.28734 2.85948C5.47431 1.67784 7.05597 0.976343 8.7286 0.889714C10.4012 0.803086 12.0469 1.33743 13.3496 2.39013C14.6523 3.44284 15.5202 4.93968 15.7866 6.59323C15.8465 7.01519 15.8761 7.44091 15.8751 7.8671C15.8885 8.72126 15.8791 9.5761 15.8791 10.4309V10.6824C16.1768 10.7494 16.4523 10.7876 16.7071 10.8801C17.6129 11.2087 18.1432 12.0253 18.1479 13.0786C18.1533 14.2096 18.1479 15.3414 18.1479 16.4724C18.1479 18.5589 18.1479 20.6451 18.1479 22.7311C18.1479 23.7006 17.7644 24.4643 16.8653 24.8826C16.5543 25.0245 16.2169 25.0994 15.8751 25.1025C11.3419 25.1168 6.80935 25.1191 2.27751 25.1092C0.954697 25.1092 0.0140464 24.1371 0.00466001 22.7821C-0.00472639 21.4579 0.00466001 20.1345 0.00466001 18.8103C0.00466001 16.9002 0.000637272 14.9887 0.00466001 13.0792C0.0080123 11.9502 0.622821 11.1007 1.63521 10.8158C1.82562 10.7648 2.02676 10.7454 2.27282 10.7005ZM9.07528 12.2425H2.4525C1.75522 12.2425 1.51386 12.4798 1.51386 13.1758C1.51386 16.343 1.51386 19.51 1.51386 22.6768C1.51386 23.3533 1.76394 23.6021 2.43842 23.6021H15.7128C16.3833 23.6021 16.6374 23.3533 16.6374 22.6768C16.6374 19.5033 16.6374 16.3278 16.6374 13.1503C16.6374 12.4872 16.388 12.2425 15.7242 12.2425H9.07528ZM14.3551 10.7199C14.3551 9.61029 14.3853 8.52951 14.3491 7.45008C14.2411 4.18026 11.145 1.80148 7.95494 2.51752C5.46419 3.07668 3.81554 5.13231 3.79073 7.72765C3.78134 8.64081 3.79073 9.55464 3.79073 10.4678C3.79073 10.5489 3.80012 10.6294 3.80548 10.7199H14.3551Z"
                        fill={`${
                          evaluateActivelink("/insurance", pathname)
                            ? "#ffffff"
                            : "#009B72"
                        }`}
                      />
                      <path
                        d="M8.32155 19.8456C8.32155 19.611 8.30881 19.3763 8.32558 19.1423C8.33831 18.9626 8.26791 18.8862 8.10835 18.8145C7.23675 18.4256 6.76743 17.6036 6.81705 16.6019C6.84302 16.1646 6.99848 15.7449 7.26364 15.3962C7.52879 15.0475 7.89167 14.7855 8.30613 14.6435C9.47608 14.2413 10.7345 14.7951 11.1757 15.9027C11.6403 17.0699 11.1361 18.327 9.98965 18.8379C9.85556 18.8969 9.82606 18.9687 9.8274 19.1001C9.8341 19.5774 9.83343 20.0555 9.8274 20.5328C9.82271 21.0256 9.54111 21.3226 9.08252 21.328C8.62393 21.3334 8.32692 21.0296 8.32088 20.5234C8.31887 20.2982 8.32155 20.0716 8.32155 19.8456ZM9.05436 17.5346C9.51228 17.5426 9.81935 17.2536 9.82807 16.8051C9.83679 16.3566 9.54313 16.0401 9.0966 16.0267C8.65008 16.0133 8.33228 16.3163 8.32289 16.7642C8.31351 17.2181 8.60583 17.5265 9.05436 17.5346Z"
                        fill={`${
                          evaluateActivelink("/insurance", pathname)
                            ? "#ffffff"
                            : "#009B72"
                        }`}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3203_705">
                        <rect
                          width="18.1506"
                          height="24.235"
                          fill="white"
                          transform="translate(0 0.882446)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="capitalize">insurance</span>
              </span>
              <span>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.5 5.5L1 10"
                    stroke={`${
                      evaluateActivelink("/insurance", pathname) ? "#ffffff" : "#009B72"
                    }`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </CustomLink>
          </li>
          <li className="w-full border-b-[3px] border-solid border-grey-1" />
          <li className="">
            <CustomLink onClick={handleNavigateToTop} to="/settings">
              <span className="flex items-center gap-x-3">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke={`${
                        evaluateActivelink("/settings", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z"
                      stroke={`${
                        evaluateActivelink("/settings", pathname)
                          ? "#ffffff"
                          : "#009B72"
                      }`}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="capitalize">settings</span>
              </span>
              <span>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.5 5.5L1 10"
                    stroke={`${
                      evaluateActivelink("/settings", pathname) ? "#ffffff" : "#009B72"
                    }`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
