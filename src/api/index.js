import axios from 'axios'
const url = 'https://blog-api7991.herokuapp.com/blog-api'

// User logIn Register Logout
export const register = ({ username, email, password, re_password }) =>
  axios.post(`${url}/user_register/`, { username, email, password, re_password })
export const logIn = ({ username, password }) => axios.post(`${url}/user_login/`, { username, password })
export const logOut = () => axios.post(`${url}/user_logout`)

export const refresh = (tokenR) => axios.post(`${url}/user_refresh_token/`, { refresh: tokenR })

// Home page
export const fetchPosts = () => axios.get(`${url}/posts?limit=5&offset=0/`)
export const fetchTrending = () => axios.get(`${url}/posts?limit=2&offset=0/`)

// Single post
export const fetchOne = (id) => axios.get(`${url}/posts/${id}/`)
export const createPost = (newPost, config) => axios.post(`${url}/posts/`, newPost, config)
export const updatePost = (id, updatedPost, config) => axios.patch(`${url}/posts/${id}/`, updatedPost, config)
export const deletePost = (id, config) => axios.delete(`${url}/posts/${id}/`, config)

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const fetchComments = (id) => axios.get(`${url}/posts/${id}/comments/`)
export const postComment = (comment, config) => axios.post(`${url}/comments/`, comment, config)
export const updateComment = (id, comment, config) => axios.patch(`${url}/comments/${id}/`, comment, config)
export const deleteComment = (id, config) => axios.delete(`${url}/comments/${id}/`, config)
