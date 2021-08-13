import React from 'react'
import { AuthorFollow } from '../../../components/Author/AuthorFollow'
import { LikeComment } from '../../../components/Footer'

const Footer = ({ username, desc }) => {
  return (
    <div>
      {/* <SignUp /> for newsletter- future implementation*/}
      <LikeComment />
      <AuthorFollow username={username} desc={desc} />
    </div>
  )
}

export default Footer
