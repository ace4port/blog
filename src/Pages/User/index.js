import React from 'react'
import Avatar from '../../components/Avatar'
import Title from '../../components/misc/Title'

const User = () => {
    return (
        <div>
            <h3>This section structure is not decided yet. It is being used for component testing purposes.</h3>
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
        {/* <Intro /> */}
        <button authorName>Follow</button>
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
