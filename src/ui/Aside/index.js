import React from 'react'
import './styles.scss'

const Aside = () => {
  let x = []
  for (let i = 0; i < 10; i++) {
    x.push(<Button key={i} id={i + 1} />)
  }
  return (
    <div className='aside'>
      <h4>Discover more</h4>
      <div>{x}</div>
      <a href='/'>See all topics</a>
    </div>
  )
}

export default Aside

const Button = ({ id }) => <button>Category{id}</button>
