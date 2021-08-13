import { Delete, Edit } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthorDetailed } from '../../../components/Author'

const Head = ({ title, desc, featImg, id }) => {
  let img =
    'https://images.unsplash.com/photo-1619683172106-ff242162eb4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp'
  let cap = 'black and red computer keyboard'
  return (
    <>
      <div className='head__top'>
        <div className='head__top__right'>
          <Title title={title} />
          <SubTitle title='One line description of the blog' />
        </div>
        <div className='head__top__left'>
          <Link to={`/article/${id}`} className='head__icon'>
            <Edit />
          </Link>
          <Link to='/' className='head__icon'>
            <Delete />
          </Link>
        </div>
      </div>
      <AuthorDetailed />
      <FeatImage feat={img} alt={cap} />
    </>
  )
}

export default Head

const Title = ({ title }) => <h1 className='blog__title'>{title}</h1>
//description of blog
const SubTitle = ({ title }) => <h3 className='blog__desc'>{title}</h3>

const FeatImage = ({ feat, alt }) => (
  <div className='blog__feat'>
    <img className='blog__feat__img' src={feat} alt={alt} />
  </div>
)
