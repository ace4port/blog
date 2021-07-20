import { FETCH_ALL, FETCH_ONE, REMOVE_ONE } from '../constants/actionTypes'
// import { FETCH_ALL } from '../constants/actionTypes'

const defState = {
  state: {
    articles: [
      {
        id: 1,
        author: {
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
    ],
  },
}

export const posts = (state = defState, action) => {
  switch (action.type) {
    case FETCH_ALL:
    case FETCH_ONE:
      return { ...state, state: action.payload }
    // case LIKE:
    // case COMMENT:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    // case CREATE:
    //   return [...posts, action.payload]
    // case UPDATE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload)
    default:
      return state
  }
}

export const post = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ONE:
      return { ...state }
    case REMOVE_ONE:
      return {}
    default:
      return state
  }
}
