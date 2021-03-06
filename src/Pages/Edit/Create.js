import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getCategories, resetPost } from '../../Actions/post'
import Editor from '../../ui/text'
import './styles.scss'

export const Create = ({ history }) => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState('')
  const [image, setImage] = useState()
  const [categ, setCateg] = useState()

  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.postR)
  const { loading } = useSelector((state) => state.loading)
  const { error, message } = useSelector((state) => state.error)
  const { categories } = useSelector((state) => state.posts)

  const handleSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData()

    formData.append('title', title)
    formData.append('thumbnail', image)
    formData.append('description', data)
    formData.append('category', parseInt(categ))

    dispatch(createPost(formData))
  }

  useEffect(() => {
    dispatch(getCategories())
    return () => dispatch(resetPost())
  }, [dispatch])

  const loadFile = (e) => {
    setImage(e.target.files[0])
    document.getElementById('img').src = URL.createObjectURL(e.target.files[0])
  }

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

        <div className='form__field'>
          {<img src='#' alt='post thumbnail' id='img' />}
          <label>Upload thumbnail: </label>
          <input type='file' name='image' onChange={loadFile} />
        </div>

        <div>
          <label className='form__label' htmlFor='title'>
            Description
          </label>
          <Editor data={data} setData={setData} />
        </div>
        <br />

        <div className='form__field'>
          <label htmlFor='categories'> Categories</label>
          <select
            name='categories'
            value={categ}
            onChange={(e) => setCateg(e.target.value)}
            placeholder='Categories'
            id='categories'>
            {categories &&
              categories.map((categ, id) => {
                return (
                  <option key={id} value={categ.id}>
                    {categ.c_name}
                  </option>
                )
              })}
          </select>
        </div>

        <button type='submit' className='form__btn'>
          Create
        </button>
      </form>
    </div>
  )
}
