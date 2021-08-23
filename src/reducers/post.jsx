import {
  FETCH_ONE_SUCCESS,
  REMOVE_ONE,
  CREATE_SUCCESS,
  DELETE_SUCCESS,
  UPDATE_SUCCESS,
  LIKE_POST,
  SET_CATEGORIES
} from '../constants/actionTypes'
import { FETCH_SUCCESS, RESET } from '../constants/actionTypes'

//fetch Home page article summary
export const posts = (articles = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...articles, articles: action.payload, count: action.count }
    case SET_CATEGORIES:
      return { ...articles, categories: action.payload }
    default:
      return articles
  }
}

// do crud operations on post
export const postR = (articles = { post: {}, success: false, message: '', successDelete: false }, action) => {
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
      return { ...articles, message: 'Post deleted', successDelete: true }

    case LIKE_POST:
      const disLiked = articles.post.likes.find((v) => v === action.payload)

      // if disliked ie value exists in array- remove item else add
      if (disLiked) {
        const newLikes = articles.post.likes.filter((v) => v !== action.payload)
        const newPost = { ...articles.post, likes: newLikes }
        return { ...articles, success: true, message: 'Post Unliked', post: newPost }
      }
      const newLikes = articles.post.likes.concat(action.payload)
      const newPost = { ...articles.post, likes: newLikes }
      return { ...articles, success: true, message: 'Post Liked', post: newPost }

    case RESET:
      return { ...articles, success: false }

    default:
      return articles
  }
}
