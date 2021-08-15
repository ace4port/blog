import {
  LOG_IN_REQ,
  LOG_IN_SUCCESS,
  LOG_IN_F,
  LOG_OUT,
  REGISTER_REQ,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOG_IN_TOKEN,
} from '../constants/actionTypes'

const initState = {
  inAuthenticated: false,
  loading: false,
  error: false,
  success: false,
  message: '',
  user: {},
}

export const userLogin = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN_TOKEN:
      return { loading: false, error: false, isAuthenticated: true, user: action.payload }
      
    case LOG_IN_REQ:
      return { loading: true }

    case LOG_IN_SUCCESS:
      return {
        message: 'User logged in',
        loading: false,
        error: false,
        success: true,
        isAuthenticated: true,
        user: action?.payload?.user,
      }

    case LOG_IN_F:
      const message =
        action.payload?.email || action.payload?.username || action.payload?.password || action.payload?.re_password
      return {
        loading: false,
        error: true,
        message: message,
        isAuthenticated: false,
        user: {},
      }

    case LOG_OUT:
      return {
        isAuthenticated: false,
        user: {},
      }

    default:
      return state
  }
}

export const userRegister = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_REQ:
      return { loading: true }

    case REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        isAuthenticated: true,
        message: 'New user resistered',
        user: action.payload.user,
      }

    case REGISTER_FAIL:
      const message =
        action.payload.email || action.payload.username || action.payload.password || action.payload.re_password
      return {
        isAuthenticated: false,
        success: false,
        error: true,
        message: message,
        user: {},
      }

    default:
      return {
        state,
      }
  }
}
