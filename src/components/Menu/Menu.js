import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import './menu.scss'

const Menu = () => {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <Link to='/'>
          <h2>TechKTM</h2>
        </Link>
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
          {isLoggedIn ? (
            <>
              <li>
                <Link to='/' className='button_slide slide_in' onClick={() => setLoggedIn((c) => !c)}>
                  Log Out
                </Link>
              </li>
              <Avatar round variant='lg' />
            </>
          ) : (
            <>
              <li>
                <Link className='button_slide slide_in' to='/logIn' onClick={() => setLoggedIn((c) => !c)}>
                  Sign In
                </Link>
              </li>
            </>
          )}
          <li>
            Switch Dark mode
            {/* 4 way switch- black-white blue-green */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
