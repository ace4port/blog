import axios from 'axios'

const url = 'https://blog-api7991.herokuapp.com/blog-api'

export const fetchPosts = () => axios.get(`${url}/api/articles?limit=10&offset=0`)
export const fetchTrending = () => axios.get(`${url}/api/articles?limit=6&offset=0`)
export const fetchOne = (id) => axios.get(`${url}/api/articles/${id}`)
// export const createPost = (newPost) => axios.post(url, newPost)
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const register = (user) => {
  const { username, email, password, re_password } = user
  return axios.post(`${url}/user_register/`, {
    username,
    email,
    password,
    re_password,
  })
  // .catch((error) => console.log(error.response.data))
}

export const logIn = ({ username, password }) => {
  return axios.post(`${url}/user_login/`, {
    username,
    password,
  })
}

export const logOut = () => axios.get(`${url}/api/users`)
