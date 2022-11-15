import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 =">
      <a
        className="ml-6 text-lg font-bold text-gray-800 "
        href="#"
      >
        <img src="/logo.png" alt="logo" className="block h-24 w-auto mx-auto" />
      </a>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 my-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex bg-green-100 py-4 rounded-lg items-center w-full text-sm font-semibold transition-colors duration-150"
                activeClassName=" bg-green-500 text-white "
              >
                <Icon
                  className="w-5 h-5 ml-3"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
        <li className="relative px-6 my-3 border-t">
          <NavLink
            exact
            to={"/app/settings"}
            className="inline-flex bg-green-100 mt-3 py-4 rounded-lg items-center w-full text-sm font-semibold transition-colors duration-150"
            activeClassName=" bg-green-500 text-white "
          >
            <Icon
              className="w-5 h-5 ml-3"
              aria-hidden="true"
              icon={"Settings"}
            />
            <span className="ml-4">Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className="px-6 my-6">
        <a
          class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 "
          href="/"
        >
          <svg
            class="w-4 h-4 mr-3"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          <span>Log out</span>
        </a>
      </div>
    </div>
  );
}

export default SidebarContent;
