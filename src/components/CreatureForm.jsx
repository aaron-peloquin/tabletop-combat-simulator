import {Button, Grid} from '@material-ui/core/'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'

import CreatureFormGridField from './CreatureFormGridField'
import standardizeCreatureData from './../helpers/standardizeCreatureData'
import saveCreature from './../store/action/SaveCreature'
import updateEditCreature from './../store/action/UpdateEditCreature'
import setEditCreature from './../store/action/SetEditCreature'

/**
 * A form for managing creature data.
 * @param {obj} props
 *    @param {obj} creature a creature data object
 *    @param {obj} AllCreatures all of this visitor's creatures
 *    @param {func} onChange called when any field in this form
 *    @param {func} onSubmit called when the form is submitted
 * @return {jsx} Component
 */
const CreatureForm = (props) => {
  const {
    funcSaveCreature,
    funcUpdateEditCreature,
    funcSetEditCreature,
    AllCreatures,
    onChange,
    onSubmit,
    classes,
  } = props
  const EditingCreature = props.EditingCreature
  const buttonText = (typeof EditingCreature.hash === 'undefined'?'Create':'Save')

  /** Ensure we have all the proper data keys, and a unique hash */
  const StandardizedEditingCreature = standardizeCreatureData(EditingCreature, AllCreatures)
  if (JSON.stringify(StandardizedEditingCreature) !== JSON.stringify(EditingCreature)) {
    funcSetEditCreature(StandardizedEditingCreature)
  }

  const WrappedChange = (k, v) => {
    if (typeof onChange === 'function') {
      onChange(k, v)
    }
    funcUpdateEditCreature(k, v)
  }

  const FieldProps = {
    onChange: WrappedChange,
    // creature: EditingCreature
  }

  /**
   * Handles form submissions and the onSubmit callback
   * @param {obj} e the event object
   * @return {void}
   */
  const submitData = (e) => {
    e.preventDefault()

    if (EditingCreature.name.length > 0) {
      if (typeof onSubmit=='function') {
        onSubmit(EditingCreature)
      }
      funcSaveCreature(EditingCreature)
    }
  }

  const submitDataTeamA = (e) => {
    EditingCreature.team = 'a'
    submitData(e)
  }

  const submitDataTeamB = (e) => {
    EditingCreature.team = 'b'
    submitData(e)
  }

  return <form autoComplete="off" onSubmit={submitData}>
    <button type="submit" className={classes.hidden} />
    <fieldset>
      <legend>Player or Creature</legend>
      <Grid container>
        <CreatureFormGridField {...FieldProps} size="large" dataKey="name" label="Name (Required)" />

        <CreatureFormGridField {...FieldProps} dataKey="hp" label="Starting Hit Points" />
        <CreatureFormGridField {...FieldProps} dataKey="armor" label="Armor" />
        <CreatureFormGridField {...FieldProps} dataKey="initiative" label="Initiative Bonus" />

        <CreatureFormGridField {...FieldProps} size="medium"
          dataKey="hitDiceEquation" label="Hit Dice Equation" placeholder="eg. 1d20+4" />
        <CreatureFormGridField {...FieldProps} size="medium"
          dataKey="damageDiceEquation" label="Damage Dice Equation" placeholder="eg. 1d6+2d4+2" />
      </Grid>
      <Grid container justify="center">
        <Grid item sm={6}>
          <Button className={classes.submitButtons} type="submit" variant="contained"
            color="primary" onClick={submitDataTeamA}>{buttonText} to Team A</Button>
        </Grid>
        <Grid item sm={6}>
          <Button className={classes.submitButtons} type="submit" variant="contained"
            color="secondary" onClick={submitDataTeamB}>{buttonText} to Team B</Button>
        </Grid>
      </Grid>
    </fieldset>
  </form>
}

const mapStateToProps = (state) => {
  const EditingCreature = state.editing
  const AllCreatures = state.creatures
  return {
    AllCreatures,
    EditingCreature,
  }
}

const MapActionsToProps = (dispatch) => {
  return {
    funcSaveCreature: (data) => {
      saveCreature(dispatch, data)
    },
    funcSetEditCreature: (data) => {
      setEditCreature(dispatch, data)
    },
    funcUpdateEditCreature: (key, value) => {
      updateEditCreature(dispatch, key, value)
    },
  }
}

const styles = (theme) => {
  return {
    hidden: {
      display: 'none',
    },
    submitButtons: {
      width: '90%',
      marginTop: theme.spacing.unit,
    },
  }
}

const CreatureFormStyled = withStyles(styles)(CreatureForm)
const CreatureFormStyledConnected = connect(mapStateToProps, MapActionsToProps)(CreatureFormStyled)
export default CreatureFormStyledConnected
