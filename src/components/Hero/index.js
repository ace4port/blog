import React from 'react'
import './styles.scss'

// 1400-400px image background
const Hero = ({ name }) => (
  <div className='hero'>
    <h1>Welcome to our Tech Blog</h1>
    <h4>Hello {name}</h4>
    <span>Motto line</span>
    <br />
    <button>Join our newsletter</button>
  </div>
)

export default Hero
