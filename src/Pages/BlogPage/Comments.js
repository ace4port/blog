import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Delete, Edit } from '@material-ui/icons'
import { LinearProgress } from '@material-ui/core'

import { postComment, editComment, deleteComment } from '../../Actions/comment'
import Avatar from '../../components/Avatar'
import * as api from '../../api/index'
import { tokenValidate } from '../../Actions/post'

const Comments = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [write, setWrite] = useState('')
  const { comments, success } = useSelector((s) => s.comments)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postComment({ content: write, post: id }))
    setWrite('')
  }
  return (
    <>
      <form className='write__comment' onSubmit={handleSubmit}>
        <input
          type='text'
          value={write}
          className='comment__form'
          placeholder='Write a comment'
          onChange={(e) => setWrite(() => e.target.value)}
        />
        <button type='submit' className='comment__submit'>
          Submit
        </button>
      </form>
      {success && comments.map((comment) => <Comment key={comment.id} comment={comment} page_id={id} />)}
    </>
  )
}
export default Comments

const Comment = (comment, page_id) => {
  const dispatch = useDispatch()

  const [editable, setEditable] = useState(false)
  const { content, created_at, replies } = comment.comment
  const {
    user_detail: { username, id },
  } = comment.comment
  const date = new Date(created_at)
  const commentId = comment.comment.id
  const [input, setInput] = useState(content)
  const { user } = useSelector((s) => s.userLogin)
  const handleSubmit = () => {
    setEditable(false)
    dispatch(editComment(commentId, { content: input, post: page_id }))
  }

  return (
    <>
      <div className='comment-contain'>
        <div className='author__thumb'>
          <Avatar round variant='lg' />
        </div>

        <div className='comment__main'>
          <div className='header'>
            <p className='author__name'>{username}</p>
            <p className='comment__date'>{`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}</p>
          </div>
          {!editable ? (
            <p id='content' className='content'>
              {content}
            </p>
          ) : (
            <EditForm submit={handleSubmit} content={input} setInput={setInput} />
          )}
        </div>
        {id === user?.id && (
          <div className='comment__edit'>
            <button className='head__icon' onClick={() => setEditable((s) => !s)}>
              <Edit />
            </button>
            <button className='head__icon' onClick={() => dispatch(deleteComment(commentId))}>
              <Delete />
            </button>
          </div>
        )}
      </div>
      <Replies id={commentId} repliess={replies} />
    </>
  )
}

/**
 *
 * @param {content, setInput, submit} param0
 * @returns one input form for edit
 */
const EditForm = ({ content, submit, setInput }) => {
  return (
    <form onSubmit={submit}>
      <input type='text' value={content} className='comment__input' onChange={(e) => setInput(e.target.value)} />
      <button type='submit' className='comment__submit'>
        Done
      </button>
    </form>
  )
}

const Replies = ({ id, repliess }) => {
  const [reply, setReply] = useState('')
  const [writeReply, setWriteReply] = useState(false)
  const [replyList, setReplyList] = useState([])
  const [showReplies, setShowReplies] = useState(false)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchReplies() {
      try {
        const { data } = await api.fetchReplies(id)
        setReplyList(data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchReplies()
  }, [id])

  const submitReply = async (e) => {
    e.preventDefault()
    // make api call
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
    const { data } = await api.postReply({ content: reply, comment: id }, config)
    // update existing reply list
    setReplyList((s) => [data, ...s])
    setReply('')
  }

  return (
    <div className='reply__contain'>
      {loading && <LinearProgress />}
      <button className='reply__btn' onClick={() => setWriteReply(!writeReply)}>
        Write a reply
      </button>

      <em>
        {repliess && (
          <button className='reply__btn' onClick={() => setShowReplies((s) => !s)}>
            {`${!showReplies ? 'View' : 'Hide'} ${repliess} replies`}
          </button>
        )}
      </em>
      {writeReply && <EditForm content={reply} submit={submitReply} setInput={setReply} />}

      {showReplies &&
        replyList.map((article, index) => (
          <Reply key={index} reply={article} setReplyList={setReplyList} setLoading={setLoading} />
        ))}
    </div>
  )
}

const Reply = ({ reply, setReplyList, setLoading }) => {
  const [editable, setEditable] = useState(false)
  const { user } = useSelector((s) => s.userLogin)

  const {
    content,
    created_at,
    user_detail: { username, id },
  } = reply
  const reply_id = reply.id
  const comment_id = reply.comment
  const [input, setInput] = useState(content)
  const date = new Date(created_at)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEditable(false)
    //make update api call
    setLoading(true)
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
    const { data } = await api.updateReply(reply_id, { content: input, comment: comment_id }, config)
    // update existing reply list   // make ui/state change
    setReplyList((s) =>
      s.map((item) => {
        if (item.id === data.id) {
          item = data
        }
        return item
      })
    )
    setLoading(false)
    setInput('')
  }
  const deleteReply = async () => {
    setLoading(true)
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
    await api.deleteReply(reply_id, config)
    setReplyList((s) => s.filter((item) => item.id !== reply_id))
    setLoading(false)
  }

  return (
    <div className='reply__one'>
      <div className='author__thumb'>
        <Avatar round variant='lg' />
      </div>

      <div className='comment__main'>
        <div className='header'>
          <p className='author__name'>{username}</p>
          <p className='comment__date'>{`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}</p>
        </div>
        {!editable ? (
          <p id='content' className='content'>
            {content}
          </p>
        ) : (
          <EditForm submit={handleSubmit} content={input} setInput={setInput} />
        )}
      </div>

      {id === user?.id && (
        <div className='comment__edit'>
          <button className='head__icon' onClick={() => setEditable(!editable)}>
            <Edit />
          </button>
          <button className='head__icon' onClick={deleteReply}>
            <Delete />
          </button>
        </div>
      )}
    </div>
  )
}
