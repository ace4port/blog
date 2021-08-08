import {
  LOG_IN_REQ,
  LOG_IN_SUCCESS,
  LOG_IN_F,
  LOG_OUT,
  REGISTER_REQ,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../constants/actionTypes'

import * as api from '../api/index.js'

export const logIn = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOG_IN_REQ })

    const { data } = await api.logIn(user)

    dispatch({ type: LOG_IN_SUCCESS, payload: data })
    localStorage.setItem('refresh', data.refresh)
    localStorage.setItem('access', data.access)
  } catch (error) {
    dispatch({ type: LOG_IN_F, payload: error.response.data })
    console.log(error)
  }
}

export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQ })

    const res = await api.register(user)

    dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    localStorage.setItem('refresh', res.data.refresh)
    localStorage.setItem('access', res.data.access)
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data })
    console.log(error)
  }
}

export const logOut = () => async (dispatch) => {
  try {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    // const s = await api.logOut()
    dispatch({ type: LOG_OUT })
  } catch (error) {
    console.log(error.message)
  }
}
