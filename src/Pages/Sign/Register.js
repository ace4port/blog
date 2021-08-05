import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './styles.scss'
import { register } from '../../Actions/user'

const SignIn = ({ setSignIn }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { username: name, email: email, password: pass }
    dispatch(register(payload))
    /**
     * if (!result.error) {
      console.log(result.message);
      navigate('/');
    } else {
      console.log(result.error);
    }
  };
     */
  }

  return (
    <form className='formR' onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className='form__item'>
        <label htmlFor='name'>Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          placeholder='email'
          type='text'
          autoComplete='off'
        />
      </div>

      <div className='form__item'>
        <label htmlFor='email'>Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name='password'
          placeholder='password'
          type='password'
          autoComplete='off'
        />
      </div>

      <button className='form__btn' type='submit'>
        Register
      </button>
      <h4>
        Already have an account?
        <b onClick={() => setSignIn(true)}> Log In</b>
      </h4>
      {/* Profile picture upload  */}
    </form>
  )
}

export default SignIn
