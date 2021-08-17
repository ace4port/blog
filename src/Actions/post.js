import {
  FETCH_ONE_SUCCESS,
  REMOVE_ONE,
  UPDATE_SUCCESS,
  RESET,
  SET_LOADING,
  DONE_LOADING,
  SET_ERROR,
  RESET_ERROR,
} from '../constants/actionTypes'
import { CREATE_REQ, CREATE_SUCCESS, CREATE_ERROR } from '../constants/actionTypes'
import { DELETE_SUCCESS } from '../constants/actionTypes'

import * as api from '../api/index.js'

export const getOnePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING })

    const { data } = await api.fetchOne(id)
    dispatch({ type: FETCH_ONE_SUCCESS, payload: data })
    dispatch({ type: DONE_LOADING })
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error })
    console.log(error.message)
    dispatch({ type: DONE_LOADING })

    setTimeout(() => dispatch({ type: RESET_ERROR }), 3000)
  }
}
export const removeOne = () => (dispatch) => {
  dispatch({ type: REMOVE_ONE })
}

export const resetCreate = () => async (dispatch) => dispatch({ type: RESET })

export const tokenValidate = async () => {
  const exp = parseInt(localStorage.getItem('exp'))
  if (Date.now() >= exp + 600000) {
    const tokenR = localStorage.getItem('refresh')
    const access = await api.refresh(tokenR)
    localStorage.setItem('access', access)
    const tokenA = access?.data?.access
    return tokenA
  }
  return localStorage.getItem('access')
}

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_REQ })
    const token = await tokenValidate()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = await api.createPost(post, config)

    dispatch({ type: CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CREATE_ERROR, payload: error })
    console.log(error.message)
  }
}

export const resetPost = () => async (dispatch) => dispatch({ type: RESET })

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }

    const { data } = await api.updatePost(id, post, config)

    dispatch({ type: UPDATE_SUCCESS, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
    await api.deletePost(id, config)

    dispatch({ type: DELETE_SUCCESS, payload: id })
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error })
    console.log(error.message)
    setTimeout(() => dispatch({ type: RESET_ERROR, payload: error }), 3000)
  }
}

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id)

//     dispatch({ type: LIKE, payload: data })
//   } catch (error) {
//     console.log(error.message)
//   }
// }