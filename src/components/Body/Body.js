import React from 'react'

import Blogs from './Blogs'
import Aside from './Aside'

import './styles.scss'

export const Contents = () => (
  <div className='contents'>
    <div className='first'>
      <Blogs />
    </div>
    <div className='second'>
      <Aside />
    </div>
  </div>
)
