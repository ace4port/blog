import React from 'react'

import './styles.scss'

const About = () => {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default About

//Source: https://codepen.io/web_designer_sanchit/pen/vVmPjW?editors=1100
const Card = () => (
  <div class='testimonial'>
    <div class='card'>
      <div class='layer'></div>
      <div class='content'>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
        <div class='image'>
          <img src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png' alt='avatar' />
        </div>
        <div class='details'>
          <h2>Someone Famous</h2> <br /> <span>Web Designer</span>
        </div>
      </div>
    </div>
  </div>
)
