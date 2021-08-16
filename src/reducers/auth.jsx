import {
  LOG_IN_TOKEN,
  LOG_IN_SUCCESS,
  LOG_OUT,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from '../constants/actionTypes'

const initState = {
  error: false,
  loading: false,
  success: false,
  inAuthenticated: false,
  message: '',
  user: {},
}

export const userLogin = (logIn = initState, action) => {
  switch (action.type) {
    case LOG_IN_TOKEN:
      return {
        error: false,
        loading: false,
        success: true,
        isAuthenticated: true,
        message: 'Log in success via token',
        user: action.payload,
      }

    case LOG_IN_SUCCESS:
      return {
        error: false,
        success: true,
        loading: false,
        isAuthenticated: true,
        message: 'User logged in',
        user: action.payload.user,
      }

    case LOG_OUT:
      return {
        error: false,
        loading: false,
        success: true,
        message: 'User logged out',
        isAuthenticated: false,
        user: {},
      }

    case REGISTER_SUCCESS:
      return {
        error: false,
        loading: false,
        success: true,
        isAuthenticated: true,
        message: 'New user resistered',
        user: action.payload.user,
      }

    case LOGIN_ERROR:
      const message = action.payload.email || action.payload.username
      return {
        error: true,
        loading: false,
        success: false,
        isAuthenticated: false,
        message: `Log In failed ${message}`,
        user: {},
      }

    case REGISTER_ERROR:
      const messag =
        action.payload.email || action.payload.username || action.payload.password || action.payload.re_password
      return {
        error: true,
        loading: false,
        success: false,
        isAuthenticated: false,
        message: `Register failed ${messag}`,
        user: {},
      }

    default:
      return logIn
  }
}
