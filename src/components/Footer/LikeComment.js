import React from 'react'

import ClapIcon from '../Icons/ClapIcon'
import CommentIcon from '../Icons/CommentIcon'
import SocialIcons from '../Icons/SocialIcons'

export const LikeComment = ({ likes, comments, setShowComments }) => {
  return (
    <div className='comment'>
      <div>
        <div className='icon'>
          <ClapIcon />
          {likes ? likes : ''}
        </div>
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
