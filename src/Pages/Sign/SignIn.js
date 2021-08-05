import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../../Actions/user'
import './styles.scss'
import { Redirect } from 'react-router-dom'

const SignIn = ({ setSignIn }) => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  if (localStorage.jwt) {
    // console.log(localStorage.jwt)
    // const jwt = 'ascascared12rqfe4f43avfewr3eddfw3ef'
    // console.log('User set')
    // setAuthorizationToken(localStorage.jwtToken)
    // localStorage.setItem('jwt', jwt)
    // store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }

  //useEffect to find if user has token in local storage
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ email, password: pass }))
    /**    
    if (result.accesstoken) {
      setUser({
        accesstoken: result.accesstoken,
      });
      navigate('/');
    } else {
      console.log(result.error);
    }
     */
  }

  if (user.isAuthenticated) return <Redirect to='/' />

  return (
    <form className='form' autoComplete='off'>
      <h2>Sign In</h2>
      <div className='form__item'>
        <label htmlFor='email'>E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type='text' placeholder='email' />
      </div>

      <div className='form__item'>
        <label htmlFor='email'>Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name='password'
          type='password'
          autoComplete='new-password'
          placeholder='password'
        />
      </div>

      <button className='form__btn' type='submit' onClick={handleSubmit}>
        Sign In
      </button>

      <h4>
        New here? <b onClick={() => setSignIn(false)}>Register now</b>
      </h4>
    </form>
  )
}

export default SignIn
