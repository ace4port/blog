import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from '../Avatar'
import { FollowBtn } from '../Buttons'
import './styles.scss'

export const AuthorFollow = ({ text, follow }) => {
  const post = useSelector((state) => state.postR.post)
  const desc = 'This author is shy and didnt introduce self'

  return (
    <div className='author'>
      <div className='first'>
        <Avatar variant='lg' round />

        <div className='author__follow'>
          <span>Written By:</span>
          <h4>{post?.user_detail?.username}</h4>
          <span className='desc'>{desc}</span>
        </div>
      </div>
      <FollowBtn text={text} follow={follow} />
    </div>
  )
}
