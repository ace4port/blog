import React from 'react'
import { Link } from 'react-router-dom'
import Author from '../Author/AuthorBasic'

const TrendingCard = ({ author, title, date, id }) => (
  <div className='card'>
    <Author name={author.username} img={author.image} />
    <Link to={`/blogs/${id}`}>
      <Title title={title} />
    </Link>
    <Details date={date} />
  </div>
)

export default TrendingCard

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
