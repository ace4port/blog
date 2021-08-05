import { FETCH_ALL, FETCH_ONE, REMOVE_ONE, FETCH_TRENDING } from '../constants/actionTypes'

const defState = {
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
}
const defPost = {
  post: {
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
}

export const posts = (articles = defState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...articles, articles: action.payload }
    default:
      return articles
  }
}

export const trending = (articles = defState, action) => {
  switch (action.type) {
    case FETCH_TRENDING:
      return { ...articles, articles: action.payload }
    default:
      return articles
  }
}

export const post = (post = defPost, action) => {
  switch (action.type) {
    case FETCH_ONE:
      return { post: action.payload }
    case REMOVE_ONE:
      return {}
    // case CREATE:
    //   return [...posts, action.payload]
    // case UPDATE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload)
    default:
      return post
  }
}
