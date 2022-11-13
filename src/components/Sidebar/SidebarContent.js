import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
      <img
          src="/logo.png"
          alt="logo"
          class="block h-24 w-auto mx-auto"
        />
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
               
                <Icon className="w-5 h-5 ml-3" aria-hidden="true" icon={route.icon} />
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
               
                <Icon className="w-5 h-5 ml-3" aria-hidden="true" icon={"Settings"} />
                <span className="ml-4">Settings</span>
              </NavLink>
            </li>
      </ul>
      <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
    </div>
  )
}

export default SidebarContent
