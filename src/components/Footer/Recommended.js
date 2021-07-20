import React from 'react'

export const Recommended = () => {
  let x = []
  for (let i = 0; i < 8; i++) x.push(<RecommendCard key={i} title='Catt Kitten Kitty' author='Jane Doe' />)

  return (
    <div className='recommended'>
      <h3>More from techBlog</h3>
      <hr />
      <div className='list'>{x}</div>
    </div>
  )
}

const RecommendCard = ({ title, author }) => (
  <>
    <div className='item'>
      <h3>{title}</h3>
      <h4>{author}</h4>
    </div>
    <div>
      <img src='' alt='' />
    </div>
  </>
)
