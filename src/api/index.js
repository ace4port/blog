import axios from 'axios'
const url = 'https://blog-api7991.herokuapp.com/blog-api'

// User logIn Register Logout
export const register = ({ username, email, password, re_password }) =>
  axios.post(`${url}/user_register/`, { username, email, password, re_password })
export const logIn = ({ username, password }) => axios.post(`${url}/user_login/`, { username, password })
export const logOut = () => axios.post(`${url}/user_logout`)

// Home page
export const fetchPosts = () => axios.get(`${url}/posts?limit=10&offset=0/`)
export const fetchTrending = () => axios.get(`${url}/posts?limit=6&offset=0/`)

// Single post
export const fetchOne = (id) => axios.get(`${url}/posts/${id}`)
export const createPost = (newPost, config) => axios.post(`${url}/posts`, newPost, config)

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)
