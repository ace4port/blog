import React from 'react'
import Avatar from '../../Avatar'

const TrendingCard = () => (
  <>
    <Author />
    <Title title='Summer of 69' />
    <Details />
  </>
)

export default TrendingCard

const Author = () => (
  <>
    <div className='avatar'>
      <Avatar />
    </div>
    <h4>Author Name</h4>
  </>
)

const Title = ({ title }) => <h2>{title}</h2>

const Details = () => {
  const date = new Date()
  return (
    <>
      <span>{date.toDateString()}</span>
    </>
  )
}

/* <p>Future implementation- 3 min read</p> */
