import React from 'react'
import { Container } from '@material-ui/core'

import Hero from './Hero'
import Trending from './Trending'
import Blogs from './Blogs'
import Aside from './Aside'

const Body = () => {
  return (
    <Container>
      <Hero />
      <Trending />
      <hr />
      <Blogs />
      {/* 2020  July 20 */}
      <Aside />
    </Container>
  )
}

export default Body
