import axios from 'axios'

const url = 'https://conduit.productionready.io/api/articles?limit=6&offset=0'

export const fetchPosts = () => axios.get(url)
export const fetchOne = (id) => axios.get(`${url}/${id}`)

// export const createPost = (newPost) => axios.post(url, newPost)
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)
