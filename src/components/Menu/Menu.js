import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './menu.scss'

import Avatar from '../Avatar'
import { getUser, logOut } from '../../Actions/user'

const Menu = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, user } = useSelector((s) => s.userLogin)

    useEffect(() => {
        if (isAuthenticated) {
            const u = JSON.parse(localStorage.getItem('user'))
            u && dispatch(getUser(u.id))
        }
    }, [dispatch, user, isAuthenticated])

    const userData = useSelector((state) => state.userData)

    return (
        <div className="nav">
            <div className="nav__logo">
                <Link to="/">
                    <h2>Tech Blog</h2>
                </Link>
            </div>
            <div>
                <ul className="nav__links">
                    <li>
                        <a href="/" className="hvr-underline-from-left">
                            Home
                        </a>
                    </li>
                    <li>
                        {/* To do: Select random number from number of blogs */}
                        <a href="/blogs/1" className="hvr-underline-from-left">
                            Random
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hvr-underline-from-left">
                            Our Story
                        </a>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/create" className="hvr-underline-from-left">
                                    Create Post
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="button_slide slide_in" onClick={() => dispatch(logOut())}>
                                    Log Out
                                </Link>
                            </li>
                            <li>
                                <Link to="/user/settings">
                                    {userData && <Avatar round variant="lg" avImg={userData?.user?.profile?.avatar} />}
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link className="button_slide slide_in" to="/logIn">
                                    Sign In
                                </Link>
                            </li>
                        </>
                    )}

                    {/* For themes sselection -- future feature -- */}
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
