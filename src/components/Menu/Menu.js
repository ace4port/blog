import React from 'react'
import './menu.scss'

const Menu = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <h3>TechKTM</h3>
      </div>
      <div>
        <ul className='nav__links'>
          <li>
            <a href='/' className='hvr-underline-from-left'>
              Home
            </a>
          </li>
          <li>
            <a href='/blog' className='hvr-underline-from-left'>
              Recent
            </a>
          </li>
          <li>
            <a href='/blog' className='hvr-underline-from-left'>
              Our Story
            </a>
          </li>
          <li>
            <div className='button_slide slide_in'>Sign In </div>
          </li>
          <li>
            <div className='button_slide slide_right'>Sign Up </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
