import { combineReducers } from 'redux'
import { posts, trending, post } from './posts'
import { userLogin, userRegister } from './auth'

export const reducers = combineReducers({ posts, trending, post, userLogin, userRegister })
