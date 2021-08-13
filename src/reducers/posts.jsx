import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_T_START,
  FETCH_T_SUCCESS,
  FETCH_T_FAIL,
  
} from '../constants/actionTypes'

const defState = { loading: false, error: false, articles: [] }

export const posts = (articles = defState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...articles, loading: true }
    case FETCH_SUCCESS:
      return { loading: false, error: false, articles: action.payload }
    case FETCH_FAIL:
      return { ...articles, error: true, loading: false }
    default:
      return articles
  }
}

export const trending = (articles = defState, action) => {
  switch (action.type) {
    case FETCH_T_START:
      return { ...articles, loading: true }
    case FETCH_T_SUCCESS:
      return { loading: false, error: false, articles: action.payload }
    case FETCH_T_FAIL:
      return { ...articles, error: true, loading: false }
    default:
      return articles
  }
}


