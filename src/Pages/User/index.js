import React from 'react'

const User = () => {
  return (
    <div>
      <Hero />
      <Tabs />
    </div>
  )
}

export default User

const Hero = () => (
  <div>
    <Avatar large />
    <Title />
    <Intro />
    <Button authorName>Follow</Button>
  </div>
)

const Tabs = () => (
  <div>
    <Articles />
    {/* Iterate over 10 fetched articles card */}
    {/* <FavouriteArticles /> */}
  </div>
)

const Articles = () => (
  <>
    <h3>Author name</h3>
    Date
    <h2>Article title </h2>
    <h4>Article introduction</h4>
    <button>Follow Icon</button>
    <p>Read more ...</p>
  </>
)
