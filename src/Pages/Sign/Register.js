import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './styles.scss'
import { register } from '../../Actions/user'
import { Link, useHistory } from 'react-router-dom'

export const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [cPass, setConfirmPass] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const { loading, success, error, message, isAuthenticated } = useSelector((s) => s.userRegister)

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [history, isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { username: userName, email: email, password: pass, re_password: cPass }
    dispatch(register(payload))
  }

  return (
    <div className='container'>
      <form className='formR' onSubmit={handleSubmit}>
        {loading && <p>Loading ...</p>}
        {error && <div>{message}</div>}
        {success && <div>{message}</div>}
        <h2>Register</h2>
        <div className='form__item'>
          <label htmlFor='name'>Username</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name='name'
            placeholder='Full Name'
            type='text'
            autoComplete='off'
          />
        </div>

        <div className='form__item'>
          <label htmlFor='email'>E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            placeholder='E-mail'
            type='text'
            autoComplete='off'
          />
        </div>

        <div className='form__item'>
          <label htmlFor='password'>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            name='password'
            placeholder='Password'
            type='password'
            autoComplete='off'
          />
        </div>

        <div className='form__item'>
          <label htmlFor='confirmPw'>Confirm Password</label>
          <input
            value={cPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            name='cPassword'
            placeholder='Confirm Password'
            type='password'
            autoComplete='off'
          />
        </div>

        <button className='form__btn' type='submit'>
          Register
        </button>
        <h4>
          Already have an account?
          <Link to='/logIn'>Log In</Link>
        </h4>
        {/* Profile picture upload  */}
      </form>
    </div>
  )
}

// export default SignIn
