import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../Actions/posts'

import Card from './Card'
import Aside from './Aside'

import './styles.scss'

const Featured = () => {
  const dispatch = useDispatch()
  const { error, loading, articles } = useSelector((state) => state.posts)
  useEffect(() => dispatch(getPosts()), [dispatch])

  return (
    <div className='contents'>
      <div className='first'>
        {error && <h4>Something went wrong</h4>}

        {/* Blogs */}
        {loading ? (
          <div>Loading ...</div>
        ) : (
          articles.map((post, i) => (
            <Card key={i} id={i} title={post.title} author={post.user_detail} slug={post.slug} />
          ))
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
