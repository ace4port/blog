import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Hero from '../../components/Hero'
import { logInToken } from '../../Actions/user'
import Trending from '../../components/Trending'
import Featured from '../../components/Featured'

const Home = () => {
  // attempt to log in here using tokens
  const disptach = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  useEffect(() => localStorage.getItem('user') && disptach(logInToken()), [disptach])

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
