import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Blogs = () => {
  const articles = useSelector((state) => state.posts.state)
  console.log(articles)

  let x = []
  for (let i = 0; i < 10; i++) {
    x.push(<Card key={i} id={i + 1} />)
  }
  return (
    <>
      {articles === undefined ? (
        <h2>Soemthing went wrong</h2>
      ) : !articles.length ? (
        <div>Loading ...</div>
      ) : (
        articles.map((post, i) => <Card key={i} id={i} title={post.title} author={post.author} />)
      )}
      {/* {x} */}
    </>
  )
}

export default Blogs
