import React from 'react'

import TrendingCard from './TrendingCard'
import TrendingIcon from '../../Icons/TrendingIcon'

import './styles.scss'

const Trending = () => {
  const x = []
  for (let i = 0; i < 5; i++)
    x.push(
      <li className='trend__card' key={i}>
        <TrendingCard id={i} />
      </li>
    )

  return (
    <div className='trend'>
      <div className='trend__top'>
        <TrendingIcon />
        <span>Trending on techKTM</span>
      </div>
      <ol className='trend__list'>{x}</ol>
    </div>
  )
}

export default Trending
