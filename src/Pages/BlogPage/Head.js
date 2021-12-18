import React, { useEffect } from 'react'
import { Delete, Edit } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { deletePost, resetPost } from '../../Actions/post'
import { AuthorDetailed } from '../../components/Author'
import Error from '../../ui/error'

const Head = ({ title, category, id, text, follow, thumb }) => {
    const dispatch = useDispatch()
    const { post, successDelete } = useSelector((state) => state.postR)
    const { error, message } = useSelector((state) => state.error)
    const { categories } = useSelector((state) => state.posts)
    const { user } = useSelector((s) => s.userLogin)

    useEffect(() => {
        return () => dispatch(resetPost())
    }, [dispatch])

    if (successDelete) {
        return <Redirect to="/" />
    }

    const handleDelete = () => {
        window.confirm('Are you sure you want to delete this post?') && dispatch(deletePost(id))
    }
    return (
        <>
            {error && <Error show={error} message={`Delete failed ${message}`} />}
            <div className="head__top">
                <div className="head__top__right">
                    <Title title={title} />
                    {categories && categories[0] && (
                        <SubTitle title={categories.find((cat) => cat.id === category).c_name} />
                    )}
                </div>
                {/* Edit delete functions */}
                {post?.user_detail?.id === user?.id && (
                    <div className="head__top__left">
                        <Link to={`/article/${id}/edit`} className="head__icon">
                            <Edit id={id} />
                        </Link>
                        <button className="head__icon" onClick={handleDelete}>
                            <Delete />
                        </button>
                    </div>
                )}
            </div>

            <AuthorDetailed text={text} follow={follow} />
            <hr />
            {thumb && <FeatImage feat={thumb} alt="thumbnail" />}
        </>
    )
}

export default Head

const Title = ({ title }) => <h1 className="blog__title">{title}</h1>

//description of blog
const SubTitle = ({ title }) => <h3 className="blog__desc">{title}</h3>

const FeatImage = ({ feat, alt }) => (
    <div className="blog__feat">
        <img className="blog__feat__img" src={feat} alt={alt} />
    </div>
)
