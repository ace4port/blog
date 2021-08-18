import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinearProgress } from '@material-ui/core'

import { AuthorFollow } from '../../components/Author/AuthorFollow'
import { LikeComment } from '../../components/Footer'
import { getComments } from '../../Actions/comment'

import Comments from './Comments'

const Footer = ({ username, desc, likes, comment, id }) => {
  const dispatch = useDispatch()
  const [showComments, setShowComments] = useState(false)

  const { loading } = useSelector((s) => s.comments)

  useEffect(() => showComments && dispatch(getComments(id)), [showComments, dispatch, id])

  return (
    <div className='footer'>
      {/* <SignUp /> for newsletter- future implementation*/}

      <LikeComment likes={likes} comments={comment} setShowComments={setShowComments} />

      <AuthorFollow username={username} desc={desc} />

      {loading && <LinearProgress id={id} />}
      <br />
      <Comments />
    </div>
  )
}

export default Footer
