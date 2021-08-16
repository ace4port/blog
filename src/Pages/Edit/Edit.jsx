import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { getOnePost, updatePost, resetPost } from '../../Actions/post'

export const Edit = () => {
  let { id } = useParams()
  const { success } = useSelector((state) => state.postR)

  const post = useSelector(state => state.postR.post)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOnePost(id))
    setTitle(s => post.title)
    setDesc(s => post.description)

    return () =>  dispatch(resetPost())
  }, [dispatch, id, post.title, post.description])

  // useEffect(() => dispatch(resetPost()), [dispatch])

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updatePost(id, {title, description: desc, category: 1}))
  }

  if(success) {
    return <Redirect to='/' />
  }

  return (
      <div className='blog-contain'>
      {/* {loading && <p>Loading ...</p>} */}
      {/* {error && <p>{message}</p>} */}
      {/* {success && message} */}
      <form className='blog form' onSubmit={handleSubmit}>
        <h2>Update post</h2>
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