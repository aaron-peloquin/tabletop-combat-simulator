import {
  Grid, Typography,
} from "@material-ui/core/"
// import { withStyles } from "@material-ui/core/styles"
import {connect} from "react-redux"

import TeamListCreature from "./TeamListCreature"

export const TeamList = ({
  /** Attributes */
  Team,
  /** Redux Data */
  Creatures,
}) => {
  return <Grid data-cy="TeamList" data-team={Team.toLowerCase()} container spacing={24} justify="center">
    <Grid item xs={12}><Typography variant="h4">Team {Team.toUpperCase()}</Typography></Grid>
    <Grid item xs={12}><Typography variant="body2">{Creatures.length} Creatures</Typography></Grid>
    {Creatures.map((Creature, k)=>{
      return <Grid item lg={6} key={k}><TeamListCreature Creature={Creature} /></Grid>
    })}
  </Grid>
}

const MapStateToProps = (state, props) => {
  const {Team} = props
  /** Get all of the creatures on this team */
  const Creatures = state.creatures.filter(Creature => Creature.team === Team)
  return {
    Creatures,
  }
}

export default connect(MapStateToProps)(TeamList)
