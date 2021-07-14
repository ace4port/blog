import React from 'react'
import './styles.scss'

const Avatar = ({ avImg, variant, border, round }) => {
  let img
  !avImg
    ? (img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    : (img = avImg)
  return (
    <div className={`avatar ${round && 'round'} ${variant} ${border}`}>
      <img src={img} alt='avatar' />
    </div>
  )
}

export default Avatar
