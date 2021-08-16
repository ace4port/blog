import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Head from './Head'
import { AuthorFollow } from '../../components/Author/AuthorFollow'
import { LikeComment } from '../../components/Footer'
import { MyLoader2 } from '../../ui/Loader'
import Error from '../../ui/error'

import './styles.scss'
import { getOnePost, resetPost } from '../../Actions/post'

const BlogPage = () => {
  let { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => dispatch(getOnePost(id)), [dispatch, id])

  const { error } = useSelector((state) => state.error)
  const { loading } = useSelector((state) => state.loading)
  const { post } = useSelector((state) => state.postR)

  useEffect(() => dispatch(resetPost()), [dispatch])

  return (
    <div className='blog-contain'>
      {error && <Error show={error} message='Page does not exist' />}
      <div className='blog'>
        {loading && <MyLoader2 />}
        {post.id && (
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

const Body = ({ body }) => <div className='blog__body'>{body}</div>

const Footer = ({ username, desc }) => (
  <div>
    {/* <SignUp /> for newsletter- future implementation*/}
    <LikeComment />
    <AuthorFollow username={username} desc={desc} />
  </div>
)
