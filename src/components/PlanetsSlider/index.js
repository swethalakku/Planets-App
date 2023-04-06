// Write your code here
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-container">
      <PlanetItem planetsList={planetsList} />
    </div>
  )
}

export default PlanetsSlider
