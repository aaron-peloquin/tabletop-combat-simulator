import React, {Fragment} from "react"
import {connect} from "react-redux"
import {
  Grid,
  Typography,
} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

const Styles = (theme) => {
  return {
    CreatureName: {
      textAlign: "left",
    },
    CreatureHealth: {
      textAlign: "right",
      paddingRight: theme.spacing.unit,
    },
  }
}

const SimulationResults = (props) => {
  const {classes, Victory, Survivors} = props

  return <Fragment>
    {(Victory.length > 0?<Typography variant="h4">Team <strong>{Victory.toUpperCase()}</strong> Won</Typography>:"")}
    {(Survivors.length > 0?<Grid container>
      {Survivors.map((Creature, k) => {
        return <Fragment key={k}>
          <Grid className={classes.CreatureHealth} item xs={6}>{Creature.Health} HP</Grid>
          <Grid className={classes.CreatureName} item xs={6}>{Creature.Name}</Grid>
        </Fragment>
      })}</Grid>:"")}
  </Fragment>
}

const MapStateToProps = (state) => {
  const Victory = state.combat.Victory
  let Survivors = false
  if (Victory.length > 0) {
    Survivors = state.combat.AliveTeamCreatures[Victory].map((hash) => {
      const creature = state.combat.CreatureStatus[hash]
      return {
        Name: creature.name,
        Health: creature.hp,
      }
    })
  }

  return {
    Victory,
    Survivors,
  }
}

const ConnectedComponent = connect(MapStateToProps)(SimulationResults)
const StyledComponent = withStyles(Styles)(ConnectedComponent)

export default StyledComponent
