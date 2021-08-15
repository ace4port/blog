import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Menu from './components/Menu/Menu'
// import { PageFoot, Recommended } from './components/Footer'
import { PageFoot } from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/User'
import BlogPage from './Pages/BlogPage'
import { Edit, Create } from './Pages/Edit'
import { SignIn, Register } from './Pages/Sign'
import Settings from './Pages/Settings'
import Error from './Pages/Error'

// Routes
const Routes = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs/:id' component={BlogPage} />
        <Route exact path='/logIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />

        <PrivateRoute exact path='/create' component={Create} />
        <PrivateRoute exact path='/article/:id' component={Edit} />
        <PrivateRoute exact path='/user/settings' component={Settings} />
        <Route component={Error} />
      </Switch>
      {/* <Recommended /> */}
      <PageFoot />
    </Router>
  )
}

export default Routes

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (localStorage.getItem('refresh') ? <Component {...props} /> : <Redirect to='/logIn' />)}
  />
)
