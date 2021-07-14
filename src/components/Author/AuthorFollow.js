import React from 'react'
import Avatar from '../Avatar'
import { FollowBtn } from '../Buttons'

export const AuthorFollow = () => {
  return (
    <div className='author'>
      <div>
        <Avatar variant='lg' round />
      </div>

      <div className='author__detail'>
        <span>Written By:</span>
        <h4>{author}</h4>
        <span className='desc'>{desc}</span>
      </div>
      <FollowBtn />
    </div>
  )
}

const desc =
  'Astrophysics student, writer for over a decade. A passion for language and the unexplored universe. I aim to marry poetry and science. ella.aldrsn@gmail.com'
const author = 'John Doe'
