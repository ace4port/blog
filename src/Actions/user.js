import {
  LOG_IN_SUCCESS,
  REGISTER_SUCCESS,
  LOG_OUT,
  LOG_IN_TOKEN,
  SET_LOADING,
  DONE_LOADING,
  SET_ERROR,
  RESET_ERROR,
  FOLLOW_USER,
} from '../constants/actionTypes'

import * as api from '../api/index.js'
import { tokenValidate } from './post'

export const logInToken = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    dispatch({ type: LOG_IN_TOKEN, payload: user })
  } catch (error) {
    console.log(error)
  }
}

const setLocalStorage = (refresh, access, user) => {
  localStorage.setItem('refresh', refresh)
  localStorage.setItem('access', access)
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('exp', Date.now())
}

export const logIn = (user) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING })
    const { data } = await api.logIn(user)

    dispatch({ type: LOG_IN_SUCCESS, payload: data })
    setLocalStorage(data.refresh, data.access, data.user)
    dispatch({ type: DONE_LOADING })
  } catch (error) {
    dispatch({ type: DONE_LOADING })
    dispatch({ type: SET_ERROR, payload: error?.response?.data })
    console.log(error)
    setTimeout(() => dispatch({ type: RESET_ERROR }), 3000)
  }
}

export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING })
    const { data } = await api.register(user)

    dispatch({ type: REGISTER_SUCCESS, payload: data })
    setLocalStorage(data?.refresh, data?.access, data?.user)
    dispatch({ type: DONE_LOADING })
  } catch (error) {
    dispatch({ type: DONE_LOADING })
    dispatch({ type: SET_ERROR, payload: error?.response?.data })
    console.log(error)
    setTimeout(() => dispatch({ type: RESET_ERROR }), 3000)
  }
}

export const logOut = () => async (dispatch) => {
  try {
    localStorage.clear()
    // const s = await api.logOut()
    dispatch({ type: LOG_OUT })
  } catch (error) {
    console.log(error.message)
  }
}

export const updateUser = (id, user) => async (dispatch) => {
  // Logic to update account details
  // Change name, last name, password, etc
}

export const followUser = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING })

    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
    await api.follow(user_id, config)

    dispatch({ type: FOLLOW_USER })
    dispatch({ type: DONE_LOADING })
  } catch (error) {
    dispatch({ type: DONE_LOADING })
    dispatch({ type: SET_ERROR, payload: error?.response?.data })
    console.log(error)
    setTimeout(() => dispatch({ type: RESET_ERROR }), 3000)
  }
}
