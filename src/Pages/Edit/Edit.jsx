import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import Editor from '../../ui/text'
import { getOnePost, updatePost, resetPost, getCategories } from '../../Actions/post'

export const Edit = ({history}) => {
  let { id } = useParams()
  const { success } = useSelector((state) => state.postR)
  const post = useSelector((state) => state.postR.post)
  const { categories } = useSelector((state) => state.posts)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOnePost(id))
    dispatch(getCategories())    
    return () => dispatch(resetPost())
  }, [dispatch, id, post.title, post.description])

   if (success) {
    return <Redirect to='/' />
  }
  return (
    <div className='blog-contain'>
      {/* {!post && <p>Loading ...</p>} */}
      {/* {error && <p>{message}</p>} */}
      {/* {success && message} */}

      {post && <Form id={id} post={post} categories={categories} />}
    </div>
  )
}  


export const Form = ({id, post, categories}) => {
    const dispatch = useDispatch()
  // useEffect(() => dispatch(resetPost()), [dispatch])

  const [title, setTitle] = useState(post.title)
  const [desc, setDesc] = useState(post.description)
  const [categ, setCateg] = useState(post.category)
  const [image, setImage] = useState(post.thumbnail)

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('title', title)
    formData.append('description', desc)
    formData.append('thumbnail', image)
    formData.append('category', parseInt(categ))
    dispatch(updatePost(id, formData))
  }

   const loadFile = (e) => {
    setImage(e.target.files[0])
    document.getElementById('img').src = URL.createObjectURL(e.target.files[0])
  }

  return (
    
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

        <div className='form__field'>
          {post && <img src={post.thumbnail} alt='post thumbnail' id='img' />}
          <label>Upload thumbnail: </label>
          <input type='file' name='image' onChange={loadFile} />
        </div>

        <div>
          <label className='form__label'>Description</label>
          <Editor data={desc} setData={setDesc} />
        </div>
       
        <div className='form__field'>
          <label htmlFor='categories'> Categories</label>
          <select name='categories' value={categ} placeholder='Enter category' onChange={(e) => setCateg(e.target.value)} id='categories'>
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
          Update
        </button>
      </form>
  )
}
