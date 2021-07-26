import { combineReducers } from 'redux'
import { posts, trending, post } from './posts'

export const reducers = combineReducers({ posts, trending, post })
