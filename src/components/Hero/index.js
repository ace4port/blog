import React from 'react'
import './styles.scss'

// 1400-400px image background
const Hero = ({ name }) => (
    <div className="hero">
        <h1>Welcome to Tech Blog</h1>
        <h2>Hello {name || 'Guest'}</h2>
        <span>Motto line</span>
        {/* No back end yet- so disabled */}
        {/* <button disabled>Join our newsletter</button> */}
    </div>
)

export default Hero
