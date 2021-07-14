import React from 'react'
import { AuthorFollow } from '../../../components/Author/AuthorFollow'
import { LikeComment } from '../../../components/Footer'

const Footer = () => {
  return (
    <div>
      {/* <SignUp /> for newsletter- future implementation*/}
      <LikeComment />
      <AuthorFollow />
    </div>
  )
}

export default Footer
