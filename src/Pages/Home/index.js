import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Hero from '../../components/Hero'
import Trending from '../../components/Trending'
import Featured from '../../components/Featured'
import { getPosts } from '../../Actions/posts'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <Hero />
      <Trending />
      <Featured />
    </>
  )
}

export default Home
