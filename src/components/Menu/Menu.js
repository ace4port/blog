import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Avatar from '../Avatar'
import './menu.scss'
import { logOut } from '../../Actions/user'

const Menu = () => {
  const { isAuthenticated, user } = useSelector((s) => s.userLogin)
  const dispatch = useDispatch()
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <Link to='/'>
          <h2>Tech Blog</h2>
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
            <a href='/blogs/1' className='hvr-underline-from-left'>
              Random
            </a>
          </li>
          <li>
            <a href='/about' className='hvr-underline-from-left'>
              Our Story
            </a>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to='/create' className='hvr-underline-from-left'>
                  Create Post
                </Link>
              </li>
              <li>
                <Link to='/' className='button_slide slide_in' onClick={() => dispatch(logOut())}>
                  Log Out
                </Link>
              </li>
              <li>
                <Link to='/user/settings'>
                  <Avatar round variant='lg' />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className='button_slide slide_in' to='/logIn'>
                  Sign In
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && <li>{user?.username}</li>}
          {/* <li className='theme__select'>
            <label>Select theme</label>
            <select>
              <option>Light</option>
              <option>Dark</option>
            </select>
            <select>
              <option>Blue</option>
              <option>Green</option>
            </select>
            {/* 4 way switch- black-white blue-green 
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Menu
