import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'

import { logInToken } from '../Actions/user'
import { routes } from './publicRoutes'
import { privateRoutes } from './privateRoutes'
// Components
import Error404 from '../Pages/Error'
import Nav from '../components/Menu/Menu'
import { PageFoot as Footer } from '../components/Footer'
// Future implementation ---
// import { Recommended } from './components/Footer'

const Routes = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.loading.loading)

    // to do: redirect to log in screen if refresh token invalid
    useEffect(() => localStorage.getItem('user') && dispatch(logInToken()), [dispatch])
    // const { error, message } = useSelector((state) => state.error.error)
    return (
        <Router>
            <Nav />
            {loading && <LinearProgress style={{ width: '100%' }} />}
            <Switch>
                {routes.map((prop, key) => (
                    <Route exact key={key} path={prop.path} component={prop.component} />
                ))}

                {privateRoutes.map((prop, key) => (
                    <PrivateRoute
                        exact
                        key={key}
                        path={prop.path}
                        component={prop.component}
                        // To do: check if user is logged in via store isLoggedIn
                        isLoggedIn={localStorage.getItem('refresh')}
                    />
                ))}

                <Route component={Error404} />
            </Switch>
            {/* <Recommended /> */}
            <Footer />
        </Router>
    )
}

export default Routes

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/logIn" />)} />
)
