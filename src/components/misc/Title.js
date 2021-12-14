import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Title = ({ title, link }) => {
    return (
        <Link to={`/blog/${link}`}>
            <h2>{title}</h2>
        </Link>
    )
}

export default Title
