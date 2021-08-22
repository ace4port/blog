import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, resetPost } from '../../Actions/post'
import Editor from '../../ui/text'
import './styles.scss'

export const Create = ({ history }) => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState('')

  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.postR)
  const { loading } = useSelector((state) => state.loading)
  const { error, message } = useSelector((state) => state.error)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    dispatch(createPost({ title, description: data, category: 1 }))
  }
  useEffect(() => {
    return () => dispatch(resetPost())
  }, [dispatch])

  if (success) {
    history.push('/')
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

        <Editor data={data} setData={setData} />

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
