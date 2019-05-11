import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {
  Grid,
  Typography,
} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const Styles = (theme) => {
  return {
    CreatureName: {
      textAlign: 'left',
    },
    CreatureHealth: {
      textAlign: 'right',
      paddingRight: theme.spacing.unit,
    },
  }
}

export const SimulationResults = ({
  /** MUI Styles */
  classes,

  /** State */
  FinalRound,
  Survivors,
  Victory,
}) => {
  if (!Victory) return ''

  return <Fragment>
    {Victory.length && <Typography variant="h4">Team <strong>{Victory.toUpperCase()}</strong> Won</Typography>}
    {FinalRound && <Typography variant="body1">Combat resolved after <strong>{FinalRound}</strong> rounds.</Typography>}
    {Survivors.length && <Grid container>
      {Survivors.map((Creature, k) => {
        return <Fragment key={k}>
          <Grid className={classes.CreatureHealth} item xs={6}>{Creature.Health} HP</Grid>
          <Grid className={classes.CreatureName} item xs={6}>{Creature.Name}</Grid>
        </Fragment>
      })}</Grid>}
  </Fragment>
}

export const MapStateToProps = (state) => {
  const Victory = state.combat.Victory
  let Survivors = false
  const FinalRound = state.combat.FinalRound
  if (Victory.length) {
    Survivors = state.combat.AliveTeamCreatures[Victory].map((hash) => {
      const creature = state.combat.CreatureStatus[hash]
      return {
        Name: creature.name,
        Health: creature.hp,
      }
    })
  }

  return {
    FinalRound,
    Survivors,
    Victory,
  }
}

const ConnectedComponent = connect(MapStateToProps)(SimulationResults)
const StyledComponent = withStyles(Styles)(ConnectedComponent)

StyledComponent.displayName = 'SimulationResults'
export default StyledComponent
