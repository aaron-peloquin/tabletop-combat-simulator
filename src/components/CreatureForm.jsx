import { Button, Grid } from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

import CreatureFormGridField from "./CreatureFormGridField"
import standardizeCreatureData from "./../helpers/standardizeCreatureData"
import SaveCreature from "./../store/action/SaveCreature"
import UpdateEditCreature from "./../store/action/UpdateEditCreature"

/**
 * A form for managing creature data.
 * @param {obj} props 
 *    @param {obj} creature a creature data object
 *    @param {obj} AllCreatures all of this visitor's creatures
 *    @param {func} onChange called when any field in this form
 *    @param {func} onSubmit called when the form is submitted
 */
const CreatureForm = (props) => {
  const {
    SaveCreature,
    UpdateEditCreature,
    AllCreatures={},
    onChange,
    onSubmit,
    classes,
  } = props
  let {
    EditingCreature = {}
  } = props
  let buttonText = (typeof EditingCreature.hash === "undefined"?"Create":"Save")

  /** Ensure we have all the proper data keys, and a unique hash */
  // EditingCreature = standardizeCreatureData(EditingCreature, AllCreatures)

  const WrappedChange = (k, v) => {
    if(typeof onChange === "function") {
      onChange(k, v)
    }
    UpdateEditCreature(k, v)
  }

  const FieldProps = {
    onChange: WrappedChange,
    creature: EditingCreature
  }

  /** Handles form submissions and the onSubmit callback */
  const submitData = (e) => {
    e.preventDefault()

    if(EditingCreature.team.length === 0) {
      EditingCreature.team = "a"
    }

    if(EditingCreature.name.length>0 && typeof onSubmit=="function") {
      onSubmit(EditingCreature)
    }
    SaveCreature()
  }

  const submitDataTeamB = (e) => {
    EditingCreature.team = "b"
    submitData(e)
  }

  return <form autoComplete="off" onSubmit={submitData}>
    <fieldset>
      <legend>Creature</legend>
      <Grid container>
        <CreatureFormGridField {...FieldProps} size="large" dataKey="name" label="Name" />

        <CreatureFormGridField {...FieldProps} dataKey="hp" label="Hit Points" />
        <CreatureFormGridField {...FieldProps} dataKey="armor" label="Armor" />
        <CreatureFormGridField {...FieldProps} dataKey="initiative" label="Initiative" />

        <CreatureFormGridField {...FieldProps} size="medium" dataKey="hitDiceEquation" label="Hit Dice Equation" placeholder="eg. 1d20+4" />
        <CreatureFormGridField {...FieldProps} size="medium" dataKey="damageDiceEquation" label="Damage Dice Equation" placeholder="eg. 1d6+2d4+2" />
      </Grid>
      <Grid container justify="center">
        <Grid item sm={6}>
          <Button className={classes.submitButtons} type="submit" variant="contained" color="primary" onClick={submitData}>{buttonText} to Team A</Button>
        </Grid>
        <Grid item sm={6}>
          <Button className={classes.submitButtons} type="submit" variant="contained" color="secondary" onClick={submitDataTeamB}>{buttonText} to Team B</Button>
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
    SaveCreature: data => { SaveCreature(dispatch, data) },
    UpdateEditCreature: (key, value) => { UpdateEditCreature(dispatch, key, value) }
  }
}

const styles = (theme) => {
  return {
    submitButtons: {
      width: "90%",
      //justify: "center",
      marginTop: theme.spacing.unit
    }
  }
}

const CreatureFormStyled = withStyles(styles)(CreatureForm)
const CreatureFormStyledConnected = connect(mapStateToProps, MapActionsToProps)(CreatureFormStyled)
export default CreatureFormStyledConnected