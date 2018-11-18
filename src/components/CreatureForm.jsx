import React from "react"
import {Button,Grid,TextField} from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"

let data
let originalData
let _cb

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

const updateData = (e, key) => {
  const curValue = e.target.value||""
  data[key] = curValue
}

const submitData = (e) => {
  e.preventDefault()
  if(data.name.length>0) {
    _cb(data)
  }
  data = originalData
}

let GridField = (props) => {
  const {classes, dataKey, label, size} = props
  let wrappedField

  let DataField = <TextField
    onChange={(e)=>{ updateData(e, dataKey) }}
    className={classes.formField}
    defaultValue={data[dataKey]}
    label={label}
  />

  if(size=="large") {
    wrappedField = <Grid item xs={12}>{DataField}</Grid>
  }
  else if(size=="medium") {
    wrappedField = <Grid item xs={12} sm={6}>{DataField}</Grid>
  }
  else {
    wrappedField = <Grid item xs={12} sm={6} md={3}>{DataField}</Grid>
  }

  return wrappedField
}
GridField = withStyles(styles)(GridField)

const CreatureForm = (props) => {
  data = props.creature||{}
  originalData = Object.assign({}, data)
  _cb = props.onSubmit||function(){}
  return <form noValidate autoComplete="off" onSubmit={submitData}>
    <fieldset>
      <legend>Creature</legend>
      <Grid container>
        <GridField size="large" dataKey="name" label="Name" />
        <GridField size="large" field="textarea" dataKey="description" label="Description" />

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

export default (CreatureForm)