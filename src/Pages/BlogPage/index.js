import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Head from './Head'
import Body from './Body'
import Footer from './Footer'
import './styles.scss'
import { getOnePost } from '../../Actions/posts'

const BlogPage = () => {
  let { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()
  const post = useSelector((state) => state.post.post)
  console.log(post)

  useEffect(() => {
    dispatch(getOnePost(id))
  }, [dispatch, id])

  return (
    <>
      <div className='blog'>
        <Head title={post.title} desc={post.description} />
        <Body body={post.body} />
        <Footer author={post.author} />
      </div>
    </>
  )
}

export default BlogPage
