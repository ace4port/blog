import React, { useEffect } from 'react'

import Hero from '../../components/Hero'
import Trending from '../../components/Trending'
import Featured from '../../components/Featured'
import { useSelector, useDispatch } from 'react-redux'
import { logInToken } from '../../Actions/user'

const Home = () => {
  // attempt to log in here via tokens
  const userLogin = useSelector((state) => state.userLogin)
  const disptach = useDispatch()
  useEffect(() => {
    localStorage.getItem('user') && disptach(logInToken())
  }, [disptach])

  return (
    <>
      <Hero />
      <h2>Hello {userLogin?.user?.username}</h2>
      <Trending />
      <Featured />
    </>
  )
}

export default Home
