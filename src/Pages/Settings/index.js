import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Error from '../../ui/error'
import { updateUser } from '../../Actions/user'
import axios from 'axios'
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

  const dispatch = useDispatch()
  const history = useHistory()

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [image, setImage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser({ username: first_name, password: pass }))
  }

  if (false) {
    history.push('/')
    handleSubmit()
  }

  const handleImage = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const handleUpload = () => {
    let formData = new FormData()
    formData.append('image', image)
    formData.append('name', 'Profile pic')
    axios.post('/some/api', formData)
  }

  return (
    <div className='container'>
      <form className='form' autoComplete='off'>
        {error && <Error show={error} message={message} />}

        {/* {success && <p>{message}</p>} */}
        <h2>Update profile</h2>

        {/* Username - dont know if can be modified or not */}

        <div className='form__item'>
          <label htmlFor='last_name'>First name</label>
          <input
            type='text'
            name='first_name'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Last name'
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
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Address'
            required
          />
        </div>

        <div className='form__item'>
          <label htmlFor='address'>E-mail</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E mail'
            required
          />
        </div>

        <p>Date of birth</p>
        <input type='date' />

        <div className='form__item'>
          <p>Gender</p>
          <input type='radio' id='male' name='gender' value='male' />  <label htmlFor='male'>Male</label>
          <input type='radio' id='female' name='gender' value='female' />  <label htmlFor='female'>Female</label>
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

        <input type='file' name='image' onChange={handleImage} />

        <button className='form__btn' type='submit' onClick={handleUpload}>
          Update
        </button>
      </form>
    </div>
  )
}

// export default SignIn
