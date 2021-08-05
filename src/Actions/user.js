import { LOG_IN, LOG_OUT } from '../constants/actionTypes'

import * as api from '../api/index.js'

export const logIn = (user) => async (dispatch) => {
  try {
    const log = await api.logIn(user)
    dispatch({ type: LOG_IN, payload: log.data })
  } catch (error) {
    console.log(error.message)
  }
}

export const register = (user) => async (dispatch) => {
  try {
    console.log(user)
    const logIn = await api.register(user)
    dispatch({ type: LOG_IN, payload: logIn })
  } catch (error) {
    console.log(error.message)
  }
}

export const logOut = () => async (dispatch) => {
  try {
    const s = await api.logOut()
    dispatch({ type: LOG_OUT, payload: s })
  } catch (error) {
    console.log(error.message)
  }
}
