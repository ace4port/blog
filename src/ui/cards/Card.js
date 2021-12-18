import React from 'react'
import Author from '../../components/Author/AuthorBasic'
import Title from '../../components/misc/Title'
import { Subtitle, Details, FeatImg } from '../../components/misc'
import './styles.scss'

const Card = ({ id, author, title, details, categories, thumbnail }) => {
    const img = thumbnail ?? 'https://via.placeholder.com/300.png/09f/fff'
    return (
        <div className="card">
            <div>
                <Author name={author.username} />
                <Title title={`Blog${id}: ${title}`} link={id} />
                <Subtitle title="Blog introduction subtitle Persian british shorthair cougar" />
                <Details categories={'future implementation'} />
            </div>
            <FeatImg img={img} />
        </div>
    )
}

export default Card
