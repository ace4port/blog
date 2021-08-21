import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TrendingIcon from '../../components/Icons/TrendingIcon'
import TrendingCard from '../../ui/cards/TrendingCard'
import Hero from '../../components/Hero'
import Card from '../../ui/cards/Card'
import Aside from '../../ui/Aside'
import Error from '../../ui/error'
import './styles.scss'

import { getPosts } from '../../Actions/posts'
import { LinearProgress } from '@material-ui/core'

const Home = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { error, message } = useSelector((s) => s.error)

  // get posts
  useEffect(() => dispatch(getPosts()), [dispatch])
  const { articles } = useSelector((state) => state.posts)

  return (
    <>
      <Hero name={userLogin?.user?.username} />
      {error && <Error show={error} message={message} />}
      {!articles ? (
        <LinearProgress style={{ width: '100%', height: '0.5rem' }} />
      ) : (
        <>
          <Trending />
          <Featured />
        </>
      )}
    </>
  )
}
export default Home

const Trending = () => {
  const { articles } = useSelector((state) => state.posts)
  return (
    <div className='trend'>
      <div className='trend__top'>
        <TrendingIcon className='icon' />
        <span>Trending on Tech-Blogs</span>
      </div>
      <div className='trend__card'>
        {articles.slice(0, 3).map((post, index) => (
          <TrendingCard key={index} author={post.user_detail} title={post.title} date={post.createdAt} id={post.id} />
        ))}
      </div>
    </div>
  )
}

const Featured = () => {
  const { articles } = useSelector((state) => state.posts)
  return (
    <div className='contents'>
      <div className='first'>
        {articles.slice(3, 5).map((post, i) => (
          <Card key={i} id={post.id} title={post.title} author={post.user_detail} slug={post.slug} />
        ))}
      </div>
      {/* Categories-- future implementation */} {/* Fetch categories */}
      <div className='second'>
        <Aside />
      </div>
    </div>
  )
}
