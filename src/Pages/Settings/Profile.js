import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Error from '../../ui/error'
import { updateProfile } from '../../Actions/user'
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
  const { user } = useSelector((s) => s.userLogin)

  const dispatch = useDispatch()
  const history = useHistory()

  const [address, setAddress] = useState('')
  const [image, setImage] = useState()
  const [gender, setGender] = useState()
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData()
    formData.append('avatar', image)
    formData.append('address', address)
    formData.append('date_of_birth', date)
    formData.append('gender', gender)
    dispatch(updateProfile(user.id, formData))
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
        <h2>Update profile</h2>
        <div className='form__item'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Address'
            autoComplete='address'
            required
          />
        </div>

        <div className='form__item'>
          <p>Date of birth</p>
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className='form__item'>
          <p>Gender</p>
          <label htmlFor='male'>Male</label>
          <input type='radio' id='male' name='gender' value={gender} onChange={() => setGender('male')} /> 
          <label htmlFor='female'>Female</label>
          <input type='radio' id='female' name='gender' value={gender} onChange={() => setGender('female')} /> 
        </div>
        <input type='file' name='image' onChange={(e) => setImage(e.target.files[0])} />
        <button className='form__btn' type='submit'>
          Update Profile
        </button>
      </form>
    </div>
  )
}

// export default SignIn
