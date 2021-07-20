import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TrendingCard from './TrendingCard'
import TrendingIcon from '../../Icons/TrendingIcon'
import './styles.scss'
import { getPosts } from '../../../Actions/posts'

const Trending = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.posts.state)
  // console.log(articles)

  useEffect(() => dispatch(getPosts()), [dispatch])

  return (
    <div className='trend'>
      <div className='trend__top'>
        <TrendingIcon />
        <span>Trending on techKTM</span>
      </div>
      {articles === undefined ? (
        <h2>Something went wrong </h2>
      ) : !articles.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div>
          {articles.map((post, index) => (
            <TrendingCard key={index} author={post.author} title={post.title} date={post.createdAt} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Trending
