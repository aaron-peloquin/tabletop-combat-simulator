import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,

} from "@material-ui/core/"
// import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

const TeamList = (Props) => {
  const {
    Creatures,
    Team,
  } = Props
  console.log("Team", Team, Creatures)
  return <Grid container>
    <Grid item xs={12}>Team {Team.toUpperCase()}</Grid>
    {Creatures.map((Creature, k)=>{
      return <Grid item sm={6} key={k}>Name: {Creature.name}</Grid>
    })}
  </Grid>
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
