import {Button,Grid} from "@material-ui/core/"
import { connect } from "react-redux"

import CreatureFormGridField from "./CreatureFormGridField"
import standardizeCreatureData from "./../helpers/standardizeCreatureData"




const CreatureForm = (props) => {
  const {creature={}, creatures={}, router, onChange, onSubmit} = props
  let _data = standardizeCreatureData(creature, creatures)

  const FieldProps = {
    onChange,
    _data
  }

  /** Handle the form submissions callback */
  const submitData = (e) => {
    e.preventDefault()
    if(_data.name.length>0 && typeof onSubmit=="function") {
      onSubmit(_data)
    }
    if(typeof router === "object") {
      /** does not seem to work yet */
      router.push("/creatures")
    }
  }

  return <form autoComplete="off" onSubmit={submitData}>
    <fieldset>
      <legend>Creature</legend>
      <Grid container>
        <CreatureFormGridField {...FieldProps} size="large" dataKey="name" label="Name" />

        <CreatureFormGridField {...FieldProps} dataKey="cr" label="Challenge Rating" />
        <CreatureFormGridField {...FieldProps} dataKey="hp" label="Hit Points" />
        <CreatureFormGridField {...FieldProps} dataKey="armor" label="Armor" />
        <CreatureFormGridField {...FieldProps} dataKey="defaultInitiative" label="Default Initiative" />

        <CreatureFormGridField {...FieldProps} size="medium" dataKey="hitDiceEquation" label="Hit Dice Equation" placeholder="eg. 1d20+4" />
        <CreatureFormGridField {...FieldProps} size="medium" dataKey="damageDiceEquation" label="Damage Dice Equation" placeholder="eg. 1d6+2d4+2" />

        <CreatureFormGridField {...FieldProps} size="large" field="multiline" dataKey="description" label="Description" />
      </Grid>
      <Button type="submit" variant="contained" color="primary" onClick={submitData}>Save</Button>
    </fieldset>
  </form>
}

const mapStateToProps = (state) => {
  return {creatures:state.creatures}
}

const CreatureFormConnected = connect(mapStateToProps)(CreatureForm)
export default CreatureFormConnected