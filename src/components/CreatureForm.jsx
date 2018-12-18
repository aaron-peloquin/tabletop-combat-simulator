import { Button, Grid } from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

import CreatureFormGridField from "./CreatureFormGridField"
import standardizeCreatureData from "./../helpers/standardizeCreatureData"

/**
 * A form for managing creature data. When the form is submitted, it redirects to `/creatures`.
 * @param {obj} props 
 *    @param {obj} creature a creature data object
 *    @param {obj} creatures all of this visitor's creatures
 *    @param {func} onChange called when any field in this form
 *    @param {func} onSubmit called when the form is submitted
 */
const CreatureForm = (props) => {
  const { creature={}, creatures={}, onChange, onSubmit, classes } = props
  let buttonText = (typeof creature.hash === "undefined"?"Create":"Save")
  let _data = standardizeCreatureData(creature, creatures)
  
  const FieldProps = {
    onChange,
    "creature":_data
  }

  /** Handles form submissions and the onSubmit callback */
  const submitData = (e) => {
    e.preventDefault()

    if(_data.team.length === 0) {
      _data.team = "a"
    }

    console.log("_data.team", typeof _data.team, _data.team)

    if(_data.name.length>0 && typeof onSubmit=="function") {
      onSubmit(_data)
    }
    /** Clear the form */
    _data = standardizeCreatureData({}, creatures)
  }

  const submitDataTeamB = (e) => {
    _data.team = "b"
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

const mapStateToProps = (state, props) => {
  return {creatures:state.creatures}
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
const CreatureFormStyledConnected = connect(mapStateToProps)(CreatureFormStyled)
export default CreatureFormStyledConnected