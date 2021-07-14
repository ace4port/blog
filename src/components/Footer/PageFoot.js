import React from 'react'

export const PageFoot = () => {
  return (
    <div className='footConain'>
      <div className='foot'>
        <div className='cols'>
          <div className='item'>
            <div>
              <a href='/'>
                <h2>Learn more.</h2>
              </a>
            </div>

            <p>
              Tech Blog is an open platform where thousands readers come to find tech news. Here, new, exciting and
              undiscovered ideasbring new ideas to the surface.
              <a href='/' rel='noopener'>
                Learn more
              </a>
            </p>
          </div>

          <div className='item'>
            <div>
              <a href='/blogs/1'>
                <h2>Hello from Tech Blog.</h2>
              </a>
            </div>
            <p>
              Follow the writers, publications, and topics all about tech world, and you’ll see them on your homepage
              and in your inbox.
            </p>
          </div>

          <div className='item'>
            <div>
              <a href='https://medium.com' rel='noopener'>
                <h2>Write a story on Medium .</h2>
              </a>
            </div>
            <p>
              If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It’s easy and
              free to post your thinking on any topic. Start a blog.
            </p>
          </div>
        </div>

        <hr />

        <div className='buttom'>
          <h2>Tech Blog</h2>
          <ul>
            <li>About</li>
            <li>Write</li>
            <li>Help</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
