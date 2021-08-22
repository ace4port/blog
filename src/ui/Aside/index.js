import React from 'react'
import './styles.scss'

const Aside = ({ categories }) => {
  return (
    <div className='aside'>
      <h4>Discover more</h4>
      <div>
        {categories.map((categ, i) => (
          <Button key={i} category={categ.c_name} />
        ))}
      </div>
      {/* <a href='/'>See all topics</a> */}
    </div>
  )
}

export default Aside

const Button = ({ category }) => <button>{category}</button>
