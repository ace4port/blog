import { FETCH_SUCCESS, SET_LOADING, DONE_LOADING, SET_ERROR, RESET_ERROR } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING })

    const { data } = await api.fetchPosts()

    dispatch({ type: FETCH_SUCCESS, payload: data.results })

    dispatch({ type: DONE_LOADING })
  } catch (error) {
    dispatch({ type: DONE_LOADING })
    dispatch({ type: SET_ERROR, payload: error?.message })

    console.log(error.message)

    setTimeout(() => dispatch({ type: RESET_ERROR }), 3000)
  }
}
