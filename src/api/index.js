import axios from 'axios'

const url = 'https://conduit.productionready.io/'

export const fetchPosts = () => axios.get(`${url}/api/articles?limit=10&offset=0`)

export const fetchTrending = () => axios.get(`${url}/api/articles?limit=6&offset=0`)

export const fetchOne = (id) => axios.get(`${url}/api/articles/${id}`)

// export const createPost = (newPost) => axios.post(url, newPost)
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)
