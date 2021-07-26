import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../Actions/posts'

import Card from './Card'
import Aside from './Aside'

import './styles.scss'

const Featured = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.posts.articles)

  useEffect(() => dispatch(getPosts()), [dispatch])

  return (
    <div className='contents'>
      <div className='first'>
        {/* Blogs */}
        {articles === undefined ? (
          <h2>Soemthing went wrong</h2>
        ) : !articles.length ? (
          <div>Loading ...</div>
        ) : (
          articles.map((post, i) => <Card key={i} id={i} title={post.title} author={post.author} slug={post.slug} />)
        )}
      </div>

      {/* Categories-- future implementation */}
      {/* Fetch categories */}
      <div className='second'>
        <Aside />
      </div>
    </div>
  )
}

export default Featured
