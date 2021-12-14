import Home from '../Pages/Home'
import About from '../Pages/User'
import BlogPage from '../Pages/BlogPage'
// TO do: future add nested routes instead of this
import { SignIn, Register } from '../Pages/Sign'

// to do: Layout component
export const routes = [
    {
        path: '/',
        name: 'Home',
        icon: 'home',
        component: Home,
        layout: '/',
    },
    {
        path: '/about',
        name: 'About',
        icon: 'info',
        component: About,
        layout: '/',
    },
    {
        path: '/blog/:id',
        name: 'Blog',
        icon: 'info',
        component: BlogPage,
        layout: '/',
    },
    {
        path: '/logIn',
        name: 'Log In',
        icon: 'info',
        component: SignIn,
        layout: '/',
    },
    {
        path: '/register',
        name: 'Register',
        icon: 'info',
        component: Register,
        layout: '/',
    },
]
