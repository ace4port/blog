import axios from 'axios'
const url = 'https://blog-api7991.herokuapp.com/blog-api'

// User logIn Register Logout
export const register = ({ username, email, password, re_password }) =>
  axios.post(`${url}/user_register/`, { username, email, password, re_password })
export const logIn = ({ username, password }) => axios.post(`${url}/user_login/`, { username, password })
export const logOut = () => axios.post(`${url}/user_logout`)

export const refresh = (tokenR) => axios.post(`${url}/user_refresh_token/`, { refresh: tokenR })

export const user = (id) => axios.get(`${url}/users/${id}/`)
export const updateUser = (id, details, config) => axios.put(`${url}/users/${id}/`, details, config)
export const updateProfile = (id, formData, config) => axios.put(`${url}/users/${id}/profile/`, formData, config)

// Home page
export const fetchPosts = (page) => axios.get(`${url}/posts?limit=5/${page ? `%2F&page=${page}` : ''}`)

// Single post crud
export const fetchOne = (id) => axios.get(`${url}/posts/${id}/`)
export const createPost = (newPost, config) => axios.post(`${url}/posts/`, newPost, config)
export const updatePost = (id, updatedPost, config) => axios.patch(`${url}/posts/${id}/`, updatedPost, config)
export const deletePost = (id, config) => axios.delete(`${url}/posts/${id}/`, config)

// comment crud
export const fetchComments = (id) => axios.get(`${url}/posts/${id}/comments/`)
export const postComment = (comment, config) => axios.post(`${url}/comments/`, comment, config)
export const updateComment = (id, comment, config) => axios.patch(`${url}/comments/${id}/`, comment, config)
export const deleteComment = (id, config) => axios.delete(`${url}/comments/${id}/`, config)
// comment reply actions : Note- They are not implemented in redux
export const fetchReplies = (id) => axios.get(`${url}/comments/${id}/replies/`)
export const postReply = (reply, config) => axios.post(`${url}/replies/`, reply, config)
export const updateReply = (id, reply, config) => axios.patch(`${url}/replies/${id}/`, reply, config)
export const deleteReply = (id, config) => axios.delete(`${url}/replies/${id}/`, config)

// Like and unlike post
export const likePost = (id, config) => axios.put(`${url}/posts/${id}/likes/`, {}, config)

// Follow unfollow user
export const follow = (id, config) => axios.put(`${url}/users/${id}/followers/`, {}, config)

// Fetch categories
export const getCategories = () => axios.get(`${url}/categories/`)
