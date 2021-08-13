import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../Actions/post'
import './styles.scss'

export const Create = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  // const [title, setTitle] =  useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost({ title, desc }))
  }

  return (
    <div className='contain'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Create post</h2>
        <div>
          <label className='form__label' htmlFor='title'>
            Title{' '}
          </label>
          <input
            type='text'
            name='title'
            className='form__field'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength='200'
          />
        </div>
        <div>
          <label className='form__label'>Description</label>
          <textarea
            className='form__field form__field__desc'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <label>Upload thumbnail: </label>
        <input type='file' />
        <h4>Categories...</h4>
        <h4>Tutorial...</h4>
        <button type='submit' className='form__btn'>
          Create
        </button>
      </form>
    </div>
  )
}
