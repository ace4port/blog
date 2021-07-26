import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import TrendingCard from './TrendingCard'
import TrendingIcon from '../Icons/TrendingIcon'
import { fetchTrending } from '../../Actions/posts'
import './styles.scss'

const Trending = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.trending.articles)

  useEffect(() => dispatch(fetchTrending()), [dispatch])
  // console.log(articles)

  return (
    <div className='trend'>
      <div className='trend__top'>
        <TrendingIcon className='icon' />
        <span>Trending on techKTM</span>
      </div>

      {articles === undefined ? (
        <h2>Something went wrong </h2>
      ) : !articles.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className='trend__card'>
          {articles.map((post, index) => (
            <TrendingCard key={index} author={post.author} title={post.title} date={post.createdAt} id={post.slug} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Trending
