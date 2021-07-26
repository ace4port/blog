import React from 'react'
import Author from '../../Author/AuthorBasic'
import Title from '../../misc/Title'
import { Subtitle, Details, FeatImg } from '../../misc'
import './styles.scss'

const Card = ({ id, author, title, details, categories, slug }) => {
  const img = 'https://via.placeholder.com/300.png/09f/fff'

  return (
    <div className='card'>
      <div>
        <Author name={author.username} img={author.image} />
        <Title title={`Blog ${id} ${title}`} link={slug} />
        <Subtitle title='Blog introduction subtitle Persian british shorthair cougar' />
        <Details categories={'future implementation'} />
      </div>
      <div>
        <FeatImg img={img} />
      </div>
    </div>
  )
}

export default Card
