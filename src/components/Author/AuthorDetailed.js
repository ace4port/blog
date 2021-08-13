import { BookmarkBorderOutlined, Facebook, LinkedIn, Twitter, VerifiedUser } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from '../Avatar'
import { FollowBtn } from '../Buttons'

import './styles.scss'

export const AuthorDetailed = () => {
  const post = useSelector((state) => state.postR.post)

  let date = new Date(post.updated_at)
  date = date.toDateString()

  return (
    <div className='author'>
      <div className='author__details'>
        <div className='author__details__img'>
          <Avatar variant='lg' border='arc' round />
        </div>
        <div className='author__details__desc'>
          <div>
            <h4>{post?.user_detail?.username || 'John Doe'}</h4>
            <FollowBtn variant='small' />
          </div>
          <div className='author__details__date'>
            <span>{date}</span>
            <VerifiedUser fontSize='small' />
          </div>
        </div>
      </div>

      <div className='author__social'>
        <Facebook />
        <Twitter />
        <LinkedIn />
        <BookmarkBorderOutlined />
      </div>
    </div>
  )
}
