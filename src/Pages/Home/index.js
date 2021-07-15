import React from 'react'

import { Container } from '@material-ui/core'

import Hero from '../../components/Body/Hero'
import Trending from '../../components/Body/Trending'
import { Contents } from '../../components/Body/Body'

const Home = () => {
  return (
    <Container>
      <Hero />
      <Trending />
      <hr />
      <Contents />
    </Container>
  )
}

export default Home
