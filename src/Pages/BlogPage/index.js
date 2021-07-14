import React from 'react'

import { Container } from '@material-ui/core'
import Head from './Head'
import Body from './Body'
import Footer from './Footer'
import './styles.scss'

const BlogPage = () => {
  return (
    <Container>
      <div className='blog'>
        <Head />
        <Body />
        <Footer />
      </div>
    </Container>
  )
}

export default BlogPage
