import React, { useState } from 'react'
import SignUp from './SignIn'
import Register from './Register'
import './styles.scss'

const SignIn = () => {
  const [isSignedIn, setSignIn] = useState(true)

  return (
    <div className='container'>
      {isSignedIn ? <SignUp setSignIn={setSignIn} /> : <Register setSignIn={setSignIn} />}
    </div>
  )
}

export default SignIn
