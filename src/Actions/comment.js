import {
  FETCH_COMMENTS,
  COMMENT_CREATE,
  COMMENT_LOADING,
  COMMENT_ERROR,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from '../constants/actionTypes'
import { tokenValidate } from './post'

import * as api from '../api/index.js'

export const getComments = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_LOADING })
    const { data } = await api.fetchComments(id)
    dispatch({ type: FETCH_COMMENTS, payload: data })
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error })
    console.log(error.message)
    // dispatch({ type: DONE_LOADING })
    // setTimeout(() => dispatch({ type: RESET_ERROR }), 3000)
  }
}

export const postComment = (comment) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_LOADING })
    const token = await tokenValidate()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = await api.postComment(comment, config)
    dispatch({ type: COMMENT_CREATE, payload: data })
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const editComment = (id, comment) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_LOADING })
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }

    const { data } = await api.updateComment(id, comment, config)

    dispatch({ type: UPDATE_COMMENT, payload: data })
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const deleteComment = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_LOADING })
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
    await api.deleteComment(id, config)

    dispatch({ type: DELETE_COMMENT, payload: id })
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error })
    console.log(error.message)
    // setTimeout(() => dispatch({ type: RESET_ERROR, payload: error }), 3000)
  }
}
