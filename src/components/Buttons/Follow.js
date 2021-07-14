import React from 'react'

export const FollowBtn = ({ variant = 'large' }) => {
  return (
    <div className={`follow ${variant}`}>
      <span>follow</span>
    </div>
  )
}
