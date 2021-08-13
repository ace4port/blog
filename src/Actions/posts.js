import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_T_START,
  FETCH_T_SUCCESS,
  FETCH_T_FAIL,
} from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START })

    const { data } = await api.fetchPosts()
    dispatch({ type: FETCH_SUCCESS, payload: data.results })
  } catch (error) {
    dispatch({ type: FETCH_FAIL, payload: error.message })
    console.log(error.message)
  }
}

export const fetchTrending = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_T_START })

    const { data } = await api.fetchTrending()
    dispatch({ type: FETCH_T_SUCCESS, payload: data.results })
  } catch (error) {
    dispatch({ type: FETCH_T_FAIL, payload: error.message })
    console.log(error.message)
  }
}
