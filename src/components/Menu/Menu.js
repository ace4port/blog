import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import './menu.scss'

const Menu = () => {
  const isLoggedIn = false
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
            <Avatar round variant='lg' />
          ) : (
            <>
              <li>
                <Link className='button_slide slide_in' to='signIn'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to='signIn' className='button_slide slide_in'>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Menu
