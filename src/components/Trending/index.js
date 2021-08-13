import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TrendingCard from './TrendingCard'
import TrendingIcon from '../Icons/TrendingIcon'
import { fetchTrending } from '../../Actions/posts'
import './styles.scss'

const Trending = () => {
  const dispatch = useDispatch()
  const { loading, articles, error } = useSelector((state) => state.trending)
  useEffect(() => dispatch(fetchTrending()), [dispatch])

  return (
    <div className='trend'>
      <div className='trend__top'>
        <TrendingIcon className='icon' />
        <span>Trending on Tech-Blogs</span>
      </div>

      {error && <p>Something went wrong</p>}
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <div className='trend__card'>
          {articles.map((post, index) => (
            <TrendingCard key={index} author={post.user_detail} title={post.title} date={post.createdAt} id={post.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Trending
