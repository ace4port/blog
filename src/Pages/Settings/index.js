import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Error from '../../ui/error'
import { updateUser } from '../../Actions/user'
// import './styles.scss'

const Setting = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

export default Setting

export const Form = () => {
  // let { success, isAuthenticated } = useSelector((s) => s.userLogin)
  const { error, message } = useSelector((s) => s.error)
  const { user } = useSelector((s) => s.userData)

  const dispatch = useDispatch()
  const history = useHistory()

  const [first_name, setFirstName] = useState(user.first_name)
  const [last_name, setLastName] = useState(user.last_name)
  const [email, setEmail] = useState(user.email)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser(user.id, { email: email, first_name: first_name, last_name: last_name }))
  }

  if (false) {
    history.push('/')
    handleSubmit()
  }

  return (
    <div className='container'>
      <form className='form' autoComplete='off' onSubmit={handleSubmit}>
        {error && <Error show={error} message={message} />}

        {/* {success && <p>{message}</p>} */}
        <h2>Update details</h2>

        {/* Username - dont know if can be modified or not */}

        <div className='form__item'>
          <label htmlFor='first_name'>First name</label>
          <input
            type='text'
            name='first_name'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First name'
            required
          />
        </div>

        <div className='form__item'>
          <label htmlFor='last_name'>Last name</label>
          <input
            type='text'
            name='last_name'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last name'
            required
          />
        </div>

        <div className='form__item'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E mail'
            required
          />
        </div>
        <a href='/user/profile'>Update profile details?</a>

        <button className='form__btn' type='submit'>
          Update
        </button>
      </form>
    </div>
  )
}

// export default SignIn
