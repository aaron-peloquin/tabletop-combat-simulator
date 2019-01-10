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
import {connect} from "react-redux"

import setEditCreature from "./../store/action/SetEditCreature"
import deleteCreature from "./../store/action/DeleteCreature"
import copyCreature from "./../store/action/CopyCreature"

import {
  Heart,
  Boot,
  Shield,
  Aim,
  Blade,
} from "./../helpers/Icons"

import {
  FileCopy,
  Edit,
  Delete,
} from "@material-ui/icons"

const TeamListCreature = (props) => {
  const {
    classes,
    /** Actions */
    funcCopyCreature,
    funcSetEditCreature,
    funcDeleteCreature,

    /** Attributes */
    Creature,
  } = props
  return <Card className={classes.CreatureCard}>
    <CardContent>
      <Grid container spacing={8} alignItems="stretch" justify="center">
        <Grid item xs={12}><Typography variant="body1"><strong>{Creature.name}</strong></Typography></Grid>
        <Grid item xs={4}><Typography variant="body2"><Heart /> {Creature.hp}</Typography></Grid>
        <Grid item xs={4}><Typography variant="body2"><Shield /> {Creature.armor}</Typography></Grid>
        <Grid item xs={4}><Typography variant="body2"><Boot /> {Creature.initiative}</Typography></Grid>
        <Grid item xs={6}><Typography variant="body2"><Aim /> {Creature.hitDiceEquation}</Typography></Grid>
        <Grid item xs={6}><Typography variant="body2"><Blade /> {Creature.damageDiceEquation}</Typography></Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Grid container spacing={8} alignItems="stretch" justify="center">
        <Grid item xs={4}><Button variant="contained" color="primary" onClick={() => {
          funcSetEditCreature(Creature)
        }}><Edit /></Button></Grid>
        <Grid item xs={4}><Button variant="contained" color="primary" onClick={() => {
          funcCopyCreature(Creature.hash)
        }}><FileCopy /></Button></Grid>
        <Grid item xs={4}><Button variant="contained" color="secondary" onClick={() => {
          funcDeleteCreature(Creature.hash)
        }}><Delete /></Button></Grid>
      </Grid>
    </CardActions>
  </Card>
}

const MapStateToProps = () => {
  return {}
}

const MapActionsToProps = (dispatch) => {
  return {
    funcCopyCreature: (Hash) => {
      copyCreature(dispatch, Hash)
    },
    funcSetEditCreature: (Creature) => {
      setEditCreature(dispatch, Creature)
    },
    funcDeleteCreature: (Hash) => {
      deleteCreature(dispatch, Hash)
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
