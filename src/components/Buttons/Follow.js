import React from 'react'

export const FollowBtn = ({ variant = 'large', text = 'follow', follow }) => {
  return (
    <div className={`follow ${variant}`} onClick={follow}>
      <span>{text}</span>
    </div>
  )
}
