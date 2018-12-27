import {
  Grid,
} from "@material-ui/core/"
// import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

import TeamListCreature from "./TeamListCreature"

const TeamList = (Props) => {
  const {
    /** Attributes */
    Creatures,
    Team,
  } = Props
  return <Grid container>
    <Grid item xs={12}>Team {Team.toUpperCase()}</Grid>
    {Creatures.map((Creature, k)=>{
      return <Grid item md={6} key={k}><TeamListCreature Creature={Creature} /></Grid>
    })}
  </Grid>
}

const MapStateToProps = (state, props) => {
  const { Team } = props
  /** Get all of the creatures on this team */
  const Creatures = state.creatures.filter((Creature)=>{
    return Creature.team === Team
  })
  return {
    Creatures,
  }
}

export default connect(MapStateToProps)(TeamList)
