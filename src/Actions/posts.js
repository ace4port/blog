// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'
import { FETCH_ALL, FETCH_ONE, REMOVE_ONE } from '../constants/actionTypes'

import * as api from '../api/index.js'

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()

    dispatch({ type: FETCH_ALL, payload: data.articles })
  } catch (error) {
    console.log(error.message)
  }
}

export const getOnePost = (id) => async (dispatch) => {
  try {
    const res = await api.fetchOne(id)
    dispatch({
      type: FETCH_ONE,
      payload: res,
    })
  } catch (error) {}
}

// export const selectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product,
//   }
// }

export const removeOne = () => {
  return {
    type: REMOVE_ONE,
  }
}

// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post)

//     dispatch({ type: CREATE, payload: data })
//   } catch (error) {
//     console.log(error.message)
//   }
// }

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
