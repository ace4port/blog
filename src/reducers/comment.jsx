import {
  FETCH_COMMENTS,
  // REMOVE_ONE,
  COMMENT_CREATE,
  COMMENT_LOADING,
  COMMENT_ERROR,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  // DELETE_SUCCESS,
  // UPDATE_SUCCESS,
} from '../constants/actionTypes'
// import { FETCH_SUCCESS, RESET } from '../constants/actionTypes'

//fetch Home page article summary
export const comments = (state = { comments: [], success: false, loading: false }, action) => {
  switch (action.type) {
    case COMMENT_LOADING:
      return { ...state, loading: true }

    case FETCH_COMMENTS:
      return { ...state, success: true, loading: false, comments: action.payload }

    case COMMENT_CREATE:
      return { ...state, success: true, loading: false, comments: [action.payload, ...state.comments] }

    case UPDATE_COMMENT:
      return {
        ...state,
        success: true,
        loading: false,
        comments: state.comments.map((item) => {
          if (item.id === action.payload.id) {
            item = action.payload
          }
          return item
        }),
      }

    case DELETE_COMMENT:
      return { ...state, success: true, loading: false, comments: state.comments.filter((item) => item.id !== action.payload) }

    case COMMENT_ERROR:
      return { ...state, loading: false }

    default:
      return state
  }
}

// // do crud operations on post
// export const postR = (articles = { post: {}, success: false, message: '' }, action) => {
//   switch (action.type) {
//     case FETCH_ONE_SUCCESS:
//       return { ...articles, post: action.payload }
//     case REMOVE_ONE:
//       return {}
//     case CREATE_SUCCESS:
//       return { ...articles, message: 'Success', success: true }
//     case UPDATE_SUCCESS:
//       return { ...articles, success: true, message: 'New post created' }
//     case DELETE_SUCCESS:
//       return { ...articles, message: 'Post deleted', success: true }
//     case RESET:
//       return {...articles, success: false}
//     default:
//       return articles
//   }
// }
