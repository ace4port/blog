import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Head from './Head'
import Footer from './Footer'

import { MyLoader2 } from '../../ui/Loader'
import Error from '../../ui/error'

import './styles.scss'
import { getOnePost, resetPost } from '../../Actions/post'
import { followUser } from '../../Actions/user'

const BlogPage = () => {
  let { id } = useParams()
  const author_id = useSelector((state) => state.postR.post.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOnePost(id))
    return () => dispatch(resetPost())
  }, [dispatch, id])

  const { error } = useSelector((state) => state.error)
  const { loading } = useSelector((state) => state.loading)
  const { post } = useSelector((state) => state.postR)

  // const follows = followers.find((v) => v === user_id)
  // const following = follows ? 'Follows' : 'Unfollow'
  // const [text, setText] = useState('Follow')
  const text = 'Follow'

  // const user_id = useSelector((s) => s.userLogin?.user?.id)

  // const followers = useSelector((state) => state.postR.post.user_detail.profile.follower)
  const follow = () => {
    //make api call to follow
    dispatch(followUser(author_id))
    //change ui
  }

  return (
    <div className='blog-contain'>
      {error && <Error show={error} message='Page does not exist' />}
      <div className='blog'>
        {loading && <MyLoader2 />}
        {post.id && (
          <>
            <Head title={post.title} desc={post.description} id={id} text={text} follow={follow} />
            <Body body={post.description} />
            <Footer likes={post.likes} comment={post.comments} id={id} text={text} follow={follow} />
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPage

const Body = ({ body }) => <div className='blog__body'>{body}</div>
