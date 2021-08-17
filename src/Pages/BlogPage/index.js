import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Head from './Head'
import { AuthorFollow } from '../../components/Author/AuthorFollow'
import { LikeComment } from '../../components/Footer'
import { MyLoader2 } from '../../ui/Loader'
import Error from '../../ui/error'

import './styles.scss'
import { getOnePost, resetPost } from '../../Actions/post'
import { getComments, postComment, editComment, deleteComment } from '../../Actions/comment'
import { LinearProgress } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'

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
            <Footer likes={post.likes} comment={post.comments} id={id} />
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPage

const Body = ({ body }) => <div className='blog__body'>{body}</div>

const Footer = ({ username, desc, likes, comment, id }) => {
  const [showComments, setShowComments] = React.useState(false)
  const [write, setWrite] = useState('')
  const dispatch = useDispatch()

  useEffect(() => showComments && dispatch(getComments(id)), [showComments, dispatch, id])
  const { comments, success, loading } = useSelector((s) => s.comments)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postComment({ content: write, post: id }))
    setWrite((s) => '')
  }

  return (
    <div>
      {/* <SignUp /> for newsletter- future implementation*/}
      <LikeComment likes={likes} comments={comment} setShowComments={setShowComments} />
      <AuthorFollow username={username} desc={desc} />
      <form className='write__comment' onSubmit={handleSubmit}>
        <input
          type='text'
          value={write}
          placeholder='Write a comment'
          onChange={(e) => setWrite(() => e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {loading && <LinearProgress />}
      <br />
      {success && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </div>
  )
}

const Comment = (comment) => {
  const dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const {
    content,
    created_at,
    replies,
    user_detail: { username, id },
  } = comment.comment
  const commentId = comment.comment.id
  const { user } = useSelector((s) => s.userLogin)

  const handleEdit = () => {
    dispatch(editComment(commentId))
    setEditable(true)
  }

  const date = new Date(created_at)
  return (
    <div className='comment-contain'>
      <h4>{username}</h4>
      <p contentEditable={editable} id='content'>
        {content}
      </p>
      <em>{replies ? `${replies} replies` : ''}</em>
      <p>{`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}</p>

      {id === user?.id && (
        <div className='head__top__left'>
          <button className='head__icon' onClick={handleEdit}>
            <Edit />
          </button>
          <button className='head__icon' onClick={() => dispatch(deleteComment(commentId))}>
            <Delete />
          </button>
        </div>
      )}
    </div>
  )
}
