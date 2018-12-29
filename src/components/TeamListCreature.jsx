import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core/"
// import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

import SetEditCreature from "./../store/action/SetEditCreature"
import DeleteCreature from "./../store/action/DeleteCreature"
import {
  Heart,
  Boot,
  Shield,
  Aim,
  Blade,
} from "./../helpers/Icons"

const TeamListCreature = (props) => {
  const {
    classes,
    /** Actions */
    FuncSetEditCreature,
    FuncDeleteCreature,

    /** Attributes */
    Creature,
  } = props
  return <Card className={classes.CreatureCard}>
    <CardContent>
      <Grid container spacing={24} alignItems="center" justify="center">
        <Grid item sm={12}><Typography variant="body1"><strong>{Creature.name}</strong></Typography></Grid>
        <Grid item sm={4}><Typography variant="body2"><Heart className={classes.CardIcon} /> {Creature.hp}</Typography></Grid>
        <Grid item sm={4}><Typography variant="body2"><Shield className={classes.CardIcon} /> {Creature.armor}</Typography></Grid>
        <Grid item sm={4}><Typography variant="body2"><Boot className={classes.CardIcon} /> {Creature.initiative}</Typography></Grid>
        <Grid item sm={6}><Typography variant="body2"><Aim className={classes.CardIcon} /> {Creature.hitDiceEquation}</Typography></Grid>
        <Grid item sm={6}><Typography variant="body2"><Blade className={classes.CardIcon} /> {Creature.damageDiceEquation}</Typography></Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button variant="contained" color="primary" onClick={() => { FuncSetEditCreature(Creature) }}>Edit</Button>
      <Button variant="contained" color="secondary" onClick={() => { FuncDeleteCreature(Creature.hash) }}>Delete</Button>
    </CardActions>
  </Card>
}

const MapStateToProps = () => {
  return {}
}

const MapActionsToProps = (dispatch) => {
  return {
    FuncSetEditCreature: (Creature) => {
      SetEditCreature(dispatch, Creature)
    },
    FuncDeleteCreature: (Hash) => {
      DeleteCreature(dispatch, Hash)
    },
  } 
}

const Styles = () => {
  return {
    CreatureCard: {
      width: "100%",
      textAlign: "center",
    },
  }
}

const StyledComponent = withStyles(Styles)(TeamListCreature)
const ConnectedComponent = connect(MapStateToProps, MapActionsToProps)(StyledComponent)
export default ConnectedComponent
