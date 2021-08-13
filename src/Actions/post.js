import { FETCH_ONE_START, FETCH_ONE_SUCCESS, FETCH_ONE_ERROR, REMOVE_ONE } from '../constants/actionTypes'
import { CREATE_REQ, CREATE_SUCCESS, CREATE_ERROR } from '../constants/actionTypes'

import * as api from '../api/index.js'

export const getOnePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ONE_START })

    const { data } = await api.fetchOne(id)
    dispatch({ type: FETCH_ONE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_ONE_ERROR })
    console.log(error.message)
  }
}
export const removeOne = () => (dispatch) => {
  dispatch({ type: REMOVE_ONE })
}

export const createPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_REQ })
    const {
      userLogin: { user },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }
    const { data } = await api.createPost(post, config)

    dispatch({ type: CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CREATE_ERROR, payload: error })
    console.log(error.message)
  }
}

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post)

//     dispatch({ type: UPDATE, payload: data })
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id)

//     dispatch({ type: LIKE, payload: data })
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id)

//     dispatch({ type: DELETE, payload: id })
//   } catch (error) {
//     console.log(error.message)
//   }
// }
