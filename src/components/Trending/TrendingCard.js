import React from 'react'
import Title from '../misc/Title'
import Author from '../Author/AuthorBasic'

const TrendingCard = ({ author, title, date, id }) => (
  <div className='card'>
    <Author name={author.username} />
    <Title title={title} link={id} />
    <Details date={date} />
  </div>
)

export default TrendingCard

const Details = (date) => {
  const dates = new Date()
  return (
    <>
      <span>{dates.toDateString()}</span>
    </>
  )
}

/* <p>Future implementation- 3 min read</p> */
