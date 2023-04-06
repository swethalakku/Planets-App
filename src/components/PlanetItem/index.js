// Write your code here

import Slider from 'react-slick'

import './index.css'

const PlanetItem = props => {
  const {planetsList} = props

  const renderSlides = () =>
    planetsList.map(eachItem => (
      <div className="planet-item-container">
        <h1 className="main-heading">PLANETS</h1>
        <div className="image-container">
          <img
            src={eachItem.imageUrl}
            alt={`planet ${eachItem.name}`}
            className="planet-image"
          />
        </div>
        <h1 className="name">{eachItem.name}</h1>
        <p className="description">{eachItem.description}</p>
      </div>
    ))

  return (
    <div data-testid="planets">
      <Slider>{renderSlides()}</Slider>
    </div>
  )
}

export default PlanetItem
