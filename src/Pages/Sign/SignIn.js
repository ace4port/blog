import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logIn } from '../../Actions/user'
import Error from '../../ui/error'
import './styles.scss'

export const SignIn = ({ history }) => {
  let { success, isAuthenticated } = useSelector((s) => s.userLogin)
  const { error, message } = useSelector((s) => s.error)

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [history, success, isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ username: username, password: pass }))
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        {error && <Error show={error} message={message} severity='error' />}
        {success && <Error show={success} message={message} severity='success' />}

        <h2>Sign In</h2>
        <div className='form__item'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            autoComplete='username'
            autoFocus
            required
          />
        </div>

        <div className='form__item'>
          <label htmlFor='password'>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            name='password'
            type='password'
            autoComplete='new-password'
            placeholder='password'
            required
          />
        </div>

        <button className='form__btn' type='submit'>
          Sign In
        </button>

        <Link to='/forgotpassword' className='login-screen__forgotpassword'>
          Forgot Password?
        </Link>

        <h4>
          New here?
          <Link to='/register'>Register now</Link>
        </h4>
      </form>
    </div>
  )
}

// export default SignIn
