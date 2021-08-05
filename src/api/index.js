import axios from 'axios'

const url = 'https://conduit.productionready.io/'

export const fetchPosts = () => axios.get(`${url}/api/articles?limit=10&offset=0`)

export const fetchTrending = () => axios.get(`${url}/api/articles?limit=6&offset=0`)

export const fetchOne = (id) => axios.get(`${url}/api/articles/${id}`)

// export const createPost = (newPost) => axios.post(url, newPost)
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const register = (user) => {
  axios
    .post(`${url}/api/users`, {
      user: user,
    })
    .then((response) => {
      console.log('User Created', response.data)
    })
    .catch((error) => console.log(error.message, error.response.data.errors))
}

export const logIn = (user) => {
  return axios.post(`${url}/api/users/login`, {
    user: user,
  })
}

export const logOut = () => axios.get(`${url}/api/users`)
