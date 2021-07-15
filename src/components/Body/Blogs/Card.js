import React from 'react'
import Avatar from '../../Avatar'
import './styles.scss'

const Card = ({ id }) => {
  const img = 'https://via.placeholder.com/300.png/09f/fff'

  return (
    <div className='card'>
      <div>
        <Author category={'in future impementation'} />
        <Title title={`Blog Title ${id} Leopard`} />
        <Subtitle title='Blog introduction subtitle Persian british shorthair cougar' />
        <Details categories={'future implementation'} />
      </div>
      <div>
        <FeatImg img={img} />
      </div>
    </div>
  )
}

export default Card

// const Contents = () => (
//   <p>
//     Ocelot bombay tiger bombay, but burmese siamese, yet siamese. Lynx abyssinian burmese yet savannah. Thai bengal
//     mouser yet american bobtail savannah for savannah. Ocicat bombay. Devonshire rex. Birman bobcat. Kitten puma russian
//     blue. Cheetah. Russian blue bombay abyssinian and cheetah kitten. Munchkin cornish rex for lion singapura so tabby
//     savannah munchkin. Thai ocicat. Siamese egyptian mau or kitten cheetah. Donskoy. Malkin. Malkin. Siamese burmese
//     panther. Tiger himalayan and munchkin. Norwegian forest. Persian tomcat, savannah birman. Balinese . Burmese cheetah
//     yet donskoy but bengal, persian so munchkin or malkin. Himalayan. Cheetah himalayan kitty.
//   </p>
// )

const Author = () => (
  <>
    <div className='av-container'>
      <Avatar />
      <h4 className='auth'>Author Name</h4>
    </div>
  </>
)

const Title = ({ title }) => <h2>{title}</h2>
const Subtitle = ({ title }) => <h3>{title}</h3>
const FeatImg = ({ img }) => <img className='featured' src={img} alt='blog-featured' />

const Details = () => (
  <>
    <span>July 10, 2021</span>
    {/* <p>Future implementation- 3 min read</p> */}
    {/* Icon to add favoirite */}
  </>
)
