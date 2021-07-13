import React from 'react'

const Head = () => {
  return (
    <>
      <Title />
      <SubTitle />
      <AuthorLong />
      <FeatImage />
    </>
  )
}

export default Head

const Title = ({ title }) => <h1 className='blog__title'>{title}</h1>

const SubTitle = ({ title }) => <h3 className='blog__title'>{title}</h3>

const AuthorLong = () => 'Hello world'

const FeatImage = () => 'Hello image'
