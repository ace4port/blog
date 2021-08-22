import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import Editor from '../../ui/text'
import { getOnePost, updatePost, resetPost, getCategories } from '../../Actions/post'

export const Edit = () => {
  let { id } = useParams()
  const { success } = useSelector((state) => state.postR)
  const { categories } = useSelector((state) => state.posts)


  const post = useSelector((state) => state.postR.post)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOnePost(id))
    dispatch(getCategories())
    setTitle((s) => post.title)
    setDesc((s) => post.description)

    return () => dispatch(resetPost())
  }, [dispatch, id, post.title, post.description])

  // useEffect(() => dispatch(resetPost()), [dispatch])

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [categ, setCateg] = useState()
  const [image, setImage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    
    let formData = new FormData()

    formData.append('title', title)
    formData.append('description', desc)
    formData.append('thumbnail', image)
    formData.append('category', categ + 1)

    // dispatch(createPost(formData))
    dispatch(updatePost(id, { title, description: desc, category: 1 }))
  }

  if (success) {
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
          <Editor data={desc} setData={setDesc} />
        </div>
       
         <div className='form__field'>
          <label>Upload thumbnail: </label>
          <input type='file' name='image' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <br />

        <div className='form__field'>
          <label htmlFor='categories'> Categories</label>
          <select name='categories' value={categ} onChange={(e) => setCateg(e.target.value)} id='categories'>
            {categories &&
              categories.map((categ, id) => {
                return (
                  <option key={id} value={id}>
                    {categ.c_name}
                  </option>
                )
              })}
          </select>
        </div>

        <button type='submit' className='form__btn'>
          Update
        </button>
      </form>
    </div>
  )
}
