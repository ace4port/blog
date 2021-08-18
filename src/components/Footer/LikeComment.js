import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { likePost } from '../../Actions/post'

import ClapIcon from '../Icons/ClapIcon'
import CommentIcon from '../Icons/CommentIcon'
import SocialIcons from '../Icons/SocialIcons'

export const LikeComment = ({ likes, comments, setShowComments }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user_id = useSelector((s) => s.userLogin?.user?.id)

  return (
    <div className='comment'>
      <div className='icons__contain'>
        <button className='icons__btn' onClick={() => dispatch(likePost(id, user_id))}>
          <ClapIcon />
          {likes.length}
        </button>
        <button className='icons__btn' onClick={() => setShowComments((s) => !s)}>
          <CommentIcon />
          {comments}
        </button>
      </div>
      <div className='icon'>
        <SocialIcons />
      </div>
    </div>
  )
}

//future implementation
// const ChannelFollow = () => 'Channel icon, name, desc, follow'
