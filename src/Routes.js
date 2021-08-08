import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './components/Menu/Menu'
// import { PageFoot, Recommended } from './components/Footer'
import { PageFoot } from './components/Footer'
import Home from './Pages/Home'
// import About from './components/About'
import BlogPage from './Pages/BlogPage'
import Error from './Pages/Error'
import { SignIn, Register } from './Pages/Sign'
// import Settings from './Pages/Settings'

// routes
const Routes = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs/:id' component={BlogPage} />
        <Route exact path='/logIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
        <Route component={Error} />
        {/* <Route exact path={'/about'} component={About} /> */}
        {/* <Route exact path={'/settings'} component={Settings} /> */}
      </Switch>
      {/* <Recommended /> */}
      <PageFoot />
    </Router>
  )
}

export default Routes
