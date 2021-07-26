import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from '../Avatar'
import { FollowBtn } from '../Buttons'
import './styles.scss'

export const AuthorFollow = () => {
  const author = useSelector((state) => state.post.post.author)
  const { username, bio } = author
  const desc = bio || 'This author is shy and forgot to introduce self but rest assured- they are awesome'

  return (
    <div className='author'>
      <div className='first'>
        <Avatar variant='lg' round />

        <div className='author__follow'>
          <span>Written By:</span>
          <h4>{username}</h4>
          <span className='desc'>{desc}</span>
        </div>
      </div>
      <FollowBtn />
    </div>
  )
}
