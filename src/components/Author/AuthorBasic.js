import React from 'react'
import Avatar from '../Avatar'
import { Link } from 'react-router-dom'
import './styles.scss'

const AuthorBasic = ({ name = 'John Dow', img }) => {
  return (
    <div className='authorSimple'>
      <Avatar avImg={img} />
      <Link to='/'>
        <h4>{name}</h4>
      </Link>
    </div>
  )
}

export default AuthorBasic
