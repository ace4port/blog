import { combineReducers } from 'redux'
import { posts, trending } from './posts'
import {postR, postCreate } from './post'
import { userLogin, userRegister } from './auth'

export const reducers = combineReducers({ posts, trending, userLogin, userRegister, postR, postCreate })
