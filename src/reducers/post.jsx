import {
  FETCH_ONE_START,
  FETCH_ONE_SUCCESS,
  FETCH_ONE_ERROR,
  REMOVE_ONE,
  CREATE_REQ,
  CREATE_SUCCESS,
  CREATE_ERROR,
} from '../constants/actionTypes'

const defPost = {
  loading: false,
  error: false,
  post: {
    user_detail: {
      username: 'Ace',
      bio: 'Hello mY name is what',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: true,
    },
    body: 'who claims their behavior in each country was fine but still got expelled times 109',
    createdAt: '2021-07-20T08:38:25.197Z',
    description: 'This my description yada yada yadaaa',
    favorited: false,
    favoritesCount: 0,
    slug: 'iou',
    tagList: ['h', 'i', 'j'],
    title: 'spread peace',
    updatedAt: '2021-07-20T08:38:25.197Z',
  },
}

export const postR = (articles = defPost, action) => {
  switch (action.type) {
    case FETCH_ONE_START:
      return { ...articles, loading: true }
    case FETCH_ONE_SUCCESS:
      return { loading: false, error: false, post: action.payload }
    case FETCH_ONE_ERROR:
      return { ...articles, loading: false, error: true }
    case REMOVE_ONE:
      return {}
    // case UPDATE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload)
    default:
      return articles
  }
}

export const postCreate = (state = {loading: false, error: false, success: false, message: '' }, action) => {
  switch (action.type) {
    case CREATE_REQ:
      return { ...state, loading: true, error: false, success: false }
    case CREATE_SUCCESS:
      return { loading: false, error: false, success: true, message: 'Success' }
    case CREATE_ERROR:
      return { loading: false, error: true, success: false, message: action.payload }
    default:
      return state
  }
}
