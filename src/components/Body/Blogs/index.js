import React from 'react'
import Card from './Card'

const Blogs = () => {
  let x = []
  for (let i = 0; i < 10; i++) {
    x.push(<Card key={i} id={i + 1} />)
  }
  return <div>{x}</div>
}

export default Blogs
