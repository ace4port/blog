import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logIn } from '../../Actions/user'
import './styles.scss'

export const SignIn = () => {
  let { loading, success, error, message, isAuthenticated } = useSelector((s) => s.userLogin)
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [history, isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ username: username, password: pass }))
  }

  return (
    <div className='container'>
      <form className='form' autoComplete='off'>
        {loading && <p>Loading ...</p>}
        {error && <p>{message}</p>}
        {success && <p>{message}</p>}
        <h2>Sign In</h2>
        <div className='form__item'>
          <label htmlFor='username'>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name='username'
            type='text'
            placeholder='username'
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
          />
        </div>

        <button className='form__btn' type='submit' onClick={handleSubmit}>
          Sign In
        </button>

        <h4>
          New here?
          <Link to='/register'>Register now</Link>
        </h4>
      </form>
    </div>
  )
}

// export default SignIn
