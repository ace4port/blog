import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'

import Hero from '../../components/Body/Hero'
import Trending from '../../components/Body/Trending'
import { Contents } from '../../components/Body/Body'

import { getPosts } from '../../Actions/posts'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

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
