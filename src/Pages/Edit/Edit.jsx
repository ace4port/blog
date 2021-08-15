import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOnePost, updatePost } from '../../Actions/post'

export const Edit = () => {
  let { id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => dispatch(getOnePost(id)), [dispatch, id])

  const post = useSelector(state => state.postR.post)

  const [title, setTitle] = useState(post.title)
  const [desc, setDesc] = useState(post.description)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updatePost(id, {title, description: desc, category: 1}))
  }
  
  return (
      <div className='blog-contain'>
      {/* {loading && <p>Loading ...</p>} */}
      {/* {error && <p>{message}</p>} */}
      {/* {success && message} */}
      <form className='blog' onSubmit={handleSubmit}>
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
          Update
        </button>
      </form>
    </div>
    )
}