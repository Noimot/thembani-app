import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ConfirmAccount = lazy(() => import('./pages/ConfirmAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Instructions = lazy(() => import('./pages/Instructions') )
const SubmitNuib = lazy(() => import('./pages/SubmitNuib') )


function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/confirm-account" component={ConfirmAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/submit-nuib" component={SubmitNuib} />


          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  )
}

export default App
