import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Head from './Head'
import Body from './Body'
import Footer from './Footer'
import Loader, { MyLoader2 } from './Loader'
import './styles.scss'
import { getOnePost } from '../../Actions/posts'

const BlogPage = () => {
  const [state, setState] = useState(true)

  let { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()
  const post = useSelector((state) => state.post.post)
  console.log(post)

  useEffect(() => {
    dispatch(getOnePost(id))
  }, [dispatch, id])

  useEffect(() => {
    const change = () => {
      setState(!state)
    }
    setTimeout(change, 10000)
  }, [state, setState])

  if (false) return <Loader />

  return (
    <div className='blog-contain'>
      <div className='blog'>
        {!state ? (
          <MyLoader2 />
        ) : (
          <>
            <Head title={post.title} desc={post.description} />
            <Body body={post.body} />
            <Footer author={post.author} />
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPage
