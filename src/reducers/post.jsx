import { FETCH_ONE_SUCCESS, REMOVE_ONE, CREATE_SUCCESS, DELETE_SUCCESS, UPDATE_SUCCESS } from '../constants/actionTypes'
import { FETCH_SUCCESS, RESET } from '../constants/actionTypes'

//fetch Home page article summary
export const posts = (articles = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { articles: action.payload }
    default:
      return articles
  }
}

// do crud operations on post
export const postR = (articles = { post: {}, success: false, message: '' }, action) => {
  switch (action.type) {
    case FETCH_ONE_SUCCESS:
      return { ...articles, post: action.payload }
    case REMOVE_ONE:
      return {}
    case CREATE_SUCCESS:
      return { ...articles, message: 'Success', success: true }
    case UPDATE_SUCCESS:
      return { ...articles, success: true, message: 'New post created' }
    case DELETE_SUCCESS:
      return { ...articles, message: 'Post deleted', success: true }
    case RESET:
      return {...articles, success: false}
    default:
      return articles
  }
}
