import React from 'react'

import ClapIcon from '../Icons/ClapIcon'
import CommentIcon from '../Icons/CommentIcon'
import SocialIcons from '../Icons/SocialIcons'

export const LikeComment = () => {
  return (
    <div className='comment'>
      <div>
        <div className='icon'>
          <ClapIcon />
        </div>
        <p className='text'></p>
        <div className='icon'>
          <CommentIcon />
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
