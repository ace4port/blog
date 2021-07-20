import React from 'react'
import Avatar from '../../Avatar'

const TrendingCard = ({ author, title, date }) => (
  <>
    <Author name={author.username} img={author.image} />
    <Title title={title} />
    <Details date={date} />
  </>
)

export default TrendingCard

const Author = ({ name = 'John Doe', img }) => (
  <>
    <div className='avatar'>
      <Avatar img={img} />
    </div>
    <h4>{name}</h4>
  </>
)

const Title = ({ title = 'Hello worrld' }) => <h2>{title}</h2>

const Details = (date) => {
  const dates = new Date()
  return (
    <>
      <span>{dates.toDateString()}</span>
    </>
  )
}

/* <p>Future implementation- 3 min read</p> */
