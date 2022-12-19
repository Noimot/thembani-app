import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import Layout from './containers/Layout'
// const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ConfirmAccount = lazy(() => import('./pages/ConfirmAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Instructions = lazy(() => import('./pages/Instructions') )
const SubmitNuib = lazy(() => import('./pages/SubmitNuib') )


function App() {

  const isSignedin = () => {
    const token = localStorage.getItem('Thembani-TKN-auth');
    // const expTime = localStorage.getItem(tokenExpiryDuration);
    // if (token && expTime) {
    // 	return !(now > +expTime);
    // } else {
    // 	localStorage.removeItem(tokenExpiryDuration);
    // 	localStorage.removeItem(tokenName);
    // 	return false;
    // }
    // console.log(token);
    if (token) {
      return true;
      // eslint-disable-next-line
    } else {
      // localStorage.removeItem(tokenExpiryDuration);
      localStorage.removeItem('TKN-auth');
      return true;
    }
  }

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
          <Route path="/app"  component={(props) => { 
              if (isSignedin() === true  ) {
                return <Layout />
              } else {
                
                return <Redirect to={{ pathname: '/'}} />
              }
            } } />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  )
}

export default App
