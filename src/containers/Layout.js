import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom'
import routes from '../routes'
import GenerateNuib from '../pages/GenerateNuib'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import { AppContext } from '../context/AppContext'

const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  const {profileCompleted,setProfileCompleted} = useContext(AppContext)
  const history = useHistory()
  let location = useLocation()
  const [currentPath, setCurrentPath] = React.useState();

  const _profileCompleted = () => {
    console.log(profileCompleted);
    return profileCompleted
  }
 
  console.log(_profileCompleted())
  useEffect(() => {
    setCurrentPath(location.pathname);
    closeSidebar()
  }, [location])

  return (
    <div
      className={`flex h-screen bg-white ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
            <Route
              exact={true}
              path={`/app/dashboard/generate-nuib`}
              render={(props) => <GenerateNuib {...props} />}
            />
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => { 
                      if (_profileCompleted() === true  ) {
                        return <route.component {...props} /> 
                      } else {
                       
                       return <Redirect to={{ pathname: '/app/dashboard/generate-nuib', state: { from: props.location } }} />
                      }
                    }}
                  />
                ) : null
              })}

              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout
