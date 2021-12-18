import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TrendingCard from '../../ui/cards/TrendingCard'
import Hero from '../../components/Hero'
import Card from '../../ui/cards/Card'
import Aside from '../../ui/Aside'
import Error from '../../ui/error'
import LinearProgress from '@material-ui/core/LinearProgress'
import Pagination from '@material-ui/lab/Pagination'
import './styles.scss'

import { getPosts } from '../../Actions/posts'
import { getCategories } from '../../Actions/post'
import { TrendingUp } from '@material-ui/icons'

const Home = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { error, message } = useSelector((s) => s.error)
    const loading = useSelector((state) => state.loading.loading)

    // get posts
    useEffect(() => dispatch(getPosts()), [dispatch])
    return (
        <>
            <Hero name={userLogin?.user?.username} />
            {error && <Error show={error} message={message} />}
            {loading && <LinearProgress style={{ width: '100%', height: '0.5rem' }} />}
            <Trending />
            <Featured />
        </>
    )
}
export default Home

const Trending = () => {
    const { articles } = useSelector((state) => state.posts)
    return (
        <div className="trend">
            <div className="trend__top">
                <TrendingUp color="secondary" className="icon" />
                <span>Trending on Tech-Blogs</span>
            </div>
            <div className="trend__card">
                {articles && articles[0] ? (
                    articles
                        .slice(0, 3)
                        .map((post, index) => (
                            <TrendingCard
                                key={index}
                                author={post.user_detail}
                                title={post.title}
                                date={post.createdAt}
                                id={post.id}
                            />
                        ))
                ) : (
                    <h2>No articles found ... </h2>
                )}
            </div>
        </div>
    )
}

const Featured = () => {
    const dispatch = useDispatch()
    const { articles, count } = useSelector((state) => state.posts)
    const { categories } = useSelector((state) => state.posts)
    const [page, setPage] = useState(1)

    useEffect(() => dispatch(getCategories()), [dispatch])

    const handlePage = (e, v) => {
        setPage(v)
        dispatch(getPosts(v))
    }

    return (
        <>
            <div className="contents">
                <div className="first">
                    {articles && articles[0] ? (
                        articles.map((post, i) => (
                            <Card
                                key={i}
                                id={post.id}
                                title={post.title}
                                author={post.user_detail}
                                thumbnail={post.thumbnail}
                                slug={post.slug}
                            />
                        ))
                    ) : (
                        <h2>Sorry No articles found ... </h2>
                    )}
                </div>
                {/* Categories-- future implementation */} {/* redirect to blogs of that category only */}
                <div className="second">
                    <div className="sticky">
                        {categories && <Aside categories={categories} />}
                        {count > 5 && (
                            <>
                                <hr />
                                <h3>See more blogs</h3>
                                <br />
                                <Pagination
                                    count={Math.ceil(count / 5)}
                                    page={page}
                                    onChange={handlePage}
                                    variant="outlined"
                                    shape="rounded"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
