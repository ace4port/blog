import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createPost, resetPost } from '../../Actions/post'
import './styles.scss'

export const Create = ({ history }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.postR)
  const { loading } = useSelector((state) => state.loading)
  const { error, message } = useSelector((state) => state.error)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost({ title, description: desc, category: 1 }))
  }
  useEffect(() => {
    return () => dispatch(resetPost())
  }, [dispatch])

  if (success) {
    return <Redirect to='/' />
  }
  return (
    <div className='blog-contain'>
      {loading && <p>Loading ...</p>}
      {error && <p>{message}</p>}
      {/* {success && message} */}
      <form className='blog form' onSubmit={handleSubmit}>
        <h2>Create post</h2>
        <div>
          <label className='form__label' htmlFor='title'>
            Title
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
