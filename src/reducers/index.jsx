import { combineReducers } from 'redux'
import { loading, error } from './globals'
import { userLogin } from './auth'
import { posts, postR } from './post'

export const reducers = combineReducers({
  loading,
  error,
  userLogin,
  posts,
  postR,
})
