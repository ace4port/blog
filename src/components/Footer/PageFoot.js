import React from 'react'
import { Link } from 'react-router-dom'

export const PageFoot = () => {
    return (
        <div className="foot">
            <div className="cols">
                <div className="item">
                    <div>
                        <Link to="/about">
                            <h2>Learn more</h2>
                        </Link>
                    </div>
                    <p>
                        Tech Blog is an open platform- a side project from two friends where readers come to find tech
                        news. Find new, exciting and undiscovered ideas and bring new ideas to the surface.
                        <a href="/" rel="noopener">
                            Learn more
                        </a>
                    </p>
                </div>

                <div className="item">
                    <div>
                        <Link to="/about">
                            <h2>Hello from Tech Blog.</h2>
                        </Link>
                    </div>
                    <p>
                        Follow the writers, publications, and topics all about tech world, and you’ll see them on your
                        homepage and in your inbox.
                    </p>
                </div>

                <div className="item">
                    <div>
                        <Link to="/logIn" rel="noopener">
                            <h2>Write a story on Tech Blog</h2>
                        </Link>
                    </div>
                    <p>
                        If you have a story to tell, news, knowledge to share, or a perspective to offer — welcome home.
                        It’s easy and free to post your thinking on any topic. Start a blog.
                    </p>
                </div>
            </div>

            <hr />

            <div className="buttom">
                <Link to="/" className="logo">
                    <h2>Tech Blog</h2>
                </Link>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/logIn">Write</Link>
                    </li>
                    <li>
                        <Link to="/help">Get started</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
