import React from "react"
import {Button,Grid,TextField} from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"

import standardizeCreatureData from "./../helpers/standardizeCreatureData"

let data, originalData, _cbSubmit, _cbUpdate

const styles = (theme) => {
  return {
    formField: {
      width:"100%",
      marginTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
    }
  }
}

/** Handle updating data */
const updateData = (e, key) => {
  const curValue = e.target.value||""
  data[key] = curValue

  if(typeof _cbUpdate=="function") {
    _cbUpdate(key,curValue)
  }
}

/** Handle the form submissions callback */
const submitData = (e) => {
  e.preventDefault()
  if(data.name.length>0 && typeof _cbSubmit=="function") {
    _cbSubmit(data)
  }
  data = originalData
}

/** Builds <Grid> input fields for the <CreatureForm /> element */
let GridField = (props) => {
  const {classes, dataKey, field, label, size} = props
  let wrappedField, DataField

  let attributes = {
    onChange: (e)=>{ updateData(e, dataKey) },
    className: classes.formField,
    defaultValue: data[dataKey],
    label: label
  }
  if(field=="multiline") {
    DataField = <TextField multiline rows="3" {...attributes} />
  }
  else {
    DataField = <TextField {...attributes} />
  }

  switch(size) {
  default:
  case "small":
    wrappedField = <Grid item xs={12} sm={6} md={3}>{DataField}</Grid>
    break
  case "medium":
    wrappedField = <Grid item xs={12} sm={6}>{DataField}</Grid>
    break
  case "large":
    wrappedField = <Grid item xs={12}>{DataField}</Grid>
    break
  }

  return wrappedField
}
GridField = withStyles(styles)(GridField)

const CreatureForm = (props) => {
  const {creature={}} = props
  /** If this object does not has a hash, set it to null so we generate one */
  if(!creature.hasOwnProperty("hash")) {
    creature.hash = null
  }
  data = standardizeCreatureData(props.creature)
  originalData = Object.assign({}, data)
  _cbSubmit = props.onSubmit||function(){}
  _cbUpdate = props.onUpdate||function(){}
  return <form noValidate autoComplete="off" onSubmit={submitData}>
    <fieldset>
      <legend>Creature</legend>
      <Grid container>
        <GridField size="large" dataKey="name" label="Name" />
        <GridField size="large" field="multiline" dataKey="description" label="Description" />

        <GridField dataKey="cr" label="Challenge Rating" />
        <GridField dataKey="hp" label="Hit Points" />
        <GridField dataKey="armor" label="Hit Points" />
        <GridField dataKey="defaultInitiative" label="Default Initiative" />

        <GridField size="medium" dataKey="hitDiceEquation" label="Hit Dice Equation" placeholder="eg. 1d20+4" />
        <GridField size="medium" dataKey="damageDiceEquation" label="Damage Dice Equation" placeholder="eg. 1d6+2d4+2" />
      </Grid>
      <Button type="submit" onClick={submitData}>Submit</Button>
    </fieldset>
  </form>
}

export default CreatureForm