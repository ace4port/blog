import React from 'react'
import { Container } from '@material-ui/core'

import Hero from './Hero'
import Trending from './Trending'
import Blogs from './Blogs'
import Aside from './Aside'

import './styles.scss'

const Body = () => {
  return (
    <Container>
      <Hero />
      <Trending />
      <hr />
      <Contents />
    </Container>
  )
}

export default Body

const Contents = () => (
  <div className='contents'>
    <div className='first'>
      <Blogs />
    </div>
    <div className='second'>
      <Aside />
    </div>
  </div>
)
