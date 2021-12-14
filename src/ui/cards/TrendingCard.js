import React from 'react'
import Title from '../../components/misc/Title'
import Author from '../../components/Author/AuthorBasic'

const TrendingCard = ({ author, title, date, id }) => (
    <div className="card">
        <Author name={author.username} />
        <Title title={title} link={id} />
        <Details date={date} />
    </div>
)

export default TrendingCard

const Details = (date) => {
    const dates = new Date()
    return (
        <div className="blogCard__details">
            <span>{dates.toDateString()}</span>
            <span>{Math.ceil(Math.random() * 10)} min read</span>
        </div>
    )
}
