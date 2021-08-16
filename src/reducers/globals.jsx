import { SET_LOADING, DONE_LOADING, SET_ERROR, RESET_ERROR } from '../constants/actionTypes'

export const loading = (loading = false, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { loading: true }
    case DONE_LOADING:
      return { loading: false }
    default:
      return loading
  }
}

export const error = (err = { error: false, message: '' }, action) => {
  const message =
    action.payload?.email || action.payload?.username || action.payload?.password || action.payload?.re_password
  switch (action.type) {
    case SET_ERROR:
      return { error: true, message: message }
    case RESET_ERROR:
      return { error: false, message: '' }
    default:
      return err
  }
}
