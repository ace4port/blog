import { combineReducers } from 'redux'
import { loading, error } from './globals'
import { userLogin } from './auth'
import { posts, postR } from './post'
import { comments } from './comment'

export const reducers = combineReducers({
  loading,
  error,
  userLogin,
  posts,
  postR,
  comments,
})
