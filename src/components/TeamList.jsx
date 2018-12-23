import {
  Grid,
} from "@material-ui/core/"
// import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

const TeamList = (Props) => {
  const {
    Creatures,
    Team,
  } = Props
  console.log("Team", Team)
  console.log("Creatures", Creatures)
  return <p>Placeholder</p>
}

const MapStateToProps = (state, props) => {
  const { Team } = props
  const Creatures = state.creatures.filter((Creature)=>{
    return Creature.team === Team
  })
  return {
    Creatures,
  }
}

export default connect(MapStateToProps)(TeamList)
