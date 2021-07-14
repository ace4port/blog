import React from 'react'
import { AuthorDetailed } from '../../../components/Author'

const Head = () => {
  let img =
    'https://images.unsplash.com/photo-1619683172106-ff242162eb4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'
  let cap = 'black and red computer keyboard'
  return (
    <>
      <Title title={'Hello world'} />
      <SubTitle title={'Cats go meaaw'} />
      <AuthorDetailed />
      <FeatImage feat={img} alt={cap} />
    </>
  )
}

export default Head

const Title = ({ title }) => <h1 className='blog__title'>{title}</h1>

//description of blog
const SubTitle = ({ title }) => <h3 className='blog__desc'>{title}</h3>

const FeatImage = ({ feat, alt }) => <img className='blog__feat' src={feat} alt={alt} />
