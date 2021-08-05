import { combineReducers } from 'redux'
import { posts, trending, post } from './posts'
import { user } from './auth'

export const reducers = combineReducers({ posts, trending, post, user })
