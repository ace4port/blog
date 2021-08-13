import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Head from './Head'
import Body from './Body'
import Footer from './Footer'
import { MyLoader2 } from './Loader'
import './styles.scss'
import { getOnePost } from '../../Actions/post'

const BlogPage = () => {
  let { id } = useParams()
  const dispatch = useDispatch()
  const { loading, error, post } = useSelector((state) => state.postR)

  useEffect(() => {
    dispatch(getOnePost(id))
  }, [dispatch, id])

  return (
    <div className='blog-contain'>
      {error && <h4>Something went wrong</h4>}
      <div className='blog'>
        {loading ? (
          <MyLoader2 />
        ) : (
          <>
            <Head title={post.title} desc={post.description} id={id} />
            <Body body={post.description} />
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPage
