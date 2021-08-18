import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tokenValidate } from '../../Actions/post'
import * as api from '../../api/index'

import ClapIcon from '../Icons/ClapIcon'
import CommentIcon from '../Icons/CommentIcon'
import SocialIcons from '../Icons/SocialIcons'

export const LikeComment = ({ likes, comments, setShowComments }) => {
  const { id } = useParams()

  const [like, setLike] = useState(likes)
  const likePost = async () => {
    const token = await tokenValidate()
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
    await api.likePost(id, config)
    setLike((like) => (like ? like++ : like--))
  }

  return (
    <div className='comment'>
      <div>
        <button className='icon' onClick={likePost}>
          <ClapIcon />
        </button>
        {like}
        <p className='text'></p>
        <div className='icon'>
          <button onClick={() => setShowComments((s) => !s)}>
            <CommentIcon />
          </button>
          {comments}
        </div>
        <p className='text'></p>
      </div>
      <div className='icon'>
        <SocialIcons />
      </div>
    </div>
  )
}

//future implementation
// const ChannelFollow = () => 'Channel icon, name, desc, follow'
