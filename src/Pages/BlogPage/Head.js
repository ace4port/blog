import React, { useEffect } from 'react'
import { Delete, Edit } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { deletePost, resetPost } from '../../Actions/post'
import { AuthorDetailed } from '../../components/Author'
import Error from '../../ui/error'

const Head = ({ title, desc, featImg, id, text, follow }) => {
  const dispatch = useDispatch()
  const { post, successDelete } = useSelector((state) => state.postR)
  const { error, message } = useSelector((state) => state.error)
  const { user } = useSelector((s) => s.userLogin)

  let img =
    'https://images.unsplash.com/photo-1619683172106-ff242162eb4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp'
  let cap = 'black and red computer keyboard'

  useEffect(() => {
    return () => dispatch(resetPost())
  }, [dispatch])

  if (successDelete) {
    return <Redirect to='/' />
  }

  return (
    <>
      {error && <Error show={error} message={`Delete failed ${message}`} />}
      <div className='head__top'>
        <div className='head__top__right'>
          <Title title={title} />
          {/* <SubTitle title='One line description of the blog' /> */}
        </div>
        {/* Edit delete functions */}
        {post?.user_detail?.id === user?.id && (
          <div className='head__top__left'>
            <Link to={`/article/${id}`} className='head__icon'>
              <Edit id={id} />
            </Link>
            <button className='head__icon' onClick={() => dispatch(deletePost(id))}>
              <Delete />
            </button>
          </div>
        )}
      </div>

      <AuthorDetailed text={text} follow={follow} />
      <FeatImage feat={img} alt={cap} />
    </>
  )
}

export default Head

const Title = ({ title }) => <h1 className='blog__title'>{title}</h1>

//description of blog
// const SubTitle = ({ title }) => <h3 className='blog__desc'>{title}</h3>

const FeatImage = ({ feat, alt }) => (
  <div className='blog__feat'>
    <img className='blog__feat__img' src={feat} alt={alt} />
  </div>
)
