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

import SetEditCreature from "./../store/action/SetEditCreature"

const TeamList = (Props) => {
  const {
    SetEditCreature,
    Creatures,
    Team,
  } = Props
  console.log("Team", Team, Creatures)
  return <Grid container>
    <Grid item xs={12}>Team {Team.toUpperCase()}</Grid>
    {Creatures.map((Creature, k)=>{
      return <Grid item sm={6} key={k}>
        <Card>
          <CardContent>
            <Typography variant="body2">{Creature.name}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => { SetEditCreature(Creature) }}>Edit</Button>
            <Button>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
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

const MapActionsToProps = (dispatch) => {
  return {
    SetEditCreature: (Creature) => { SetEditCreature(dispatch, Creature) }
  }
}

export default connect(MapStateToProps, MapActionsToProps)(TeamList)