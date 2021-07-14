import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { lazy, suspense } from 'react'

// const Home = lazy(() => import('pages/Home/Home'))
// const About = lazy(() => import('pages/About/About'))
import Menu from './components/Menu/Menu'
import { Recommended } from './components/Footer'
import { PageFoot } from './components/Footer'

import Home from './components/Body/Body'
import About from './components/About'
import BlogPage from './Pages/BlogPage'
import Error from './Pages/Error'
import SignIn from './Pages/Sign'
import Settings from './Pages/Settings'
// import Foot from './Pages/BlogPage/Footer'

//Include Menu to all pages
const RouteWithHeader = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <Menu />
        <Component {...props} {...rest} />
        <Recommended />
        <PageFoot />
      </>
    )}
  />
)

//
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
        <RouteWithHeader exact path={'/'} component={Home} />
        <RouteWithHeader exact path={'/about'} component={About} />
        <RouteWithHeader exact path={'/blogs/:id'} component={BlogPage} />
        <RouteWithHeader exact path={'/blog'} component={BlogPage} />
        <RouteWithHeader exact path={'/settings'} component={Settings} />
        <RouteWithHeader exact path={'/logIn'} component={SignIn} />
        <RouteWithHeader exact path={'/error'} component={Error} />
      </Switch>
    </Router>
  )
}

export default Routes
