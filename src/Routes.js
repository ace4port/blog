import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'

import Menu from './components/Menu/Menu'
// import { PageFoot, Recommended } from './components/Footer'
import { PageFoot } from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/User'
import BlogPage from './Pages/BlogPage'
import { Edit, Create } from './Pages/Edit'
import { SignIn, Register } from './Pages/Sign'
import Settings from './Pages/Settings'
import Profile from './Pages/Settings/Profile'
import Error404 from './Pages/Error'
import { useSelector, useDispatch } from 'react-redux'
import { logInToken } from './Actions/user'

// Routes
const Routes = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading.loading)

  // attempt to log in here using tokens
  useEffect(() => localStorage.getItem('user') && dispatch(logInToken()), [dispatch])
  // const { error, message } = useSelector((state) => state.error.error)
  return (
    <Router>
      <Menu />
      {loading && <Loading />}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs/:id' component={BlogPage} />
        <Route exact path='/logIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />

        <PrivateRoute exact path='/create' component={Create} />
        <PrivateRoute exact path='/article/:id' component={Edit} />
        <PrivateRoute exact path='/user/settings' component={Settings} />
        <PrivateRoute exact path='/user/profile' component={Profile} />
        <Route component={Error404} />
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

const Loading = () => <LinearProgress style={{ width: '100%' }} />
