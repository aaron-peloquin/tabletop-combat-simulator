import React from "react"
import TextField from '@material-ui/core/TextField';

let data

const updateData = (e, key) => {
  const curValue = e.target.value||""
  data[key] = curValue
}

const CreatureField = ({type, label}) => {
  return <TextField
    label={label}
    defaultValue={data[type]}
    onChange={(e)=>{ updateData(e, type) }}
  />
}

const CreatureForm = (props) => {
  data = props.creature||{}
  
  return <form noValidate autoComplete="off">
    <fieldset>
      <legend>Hello</legend>
      <CreatureField type="name" label="Name" />
      <CreatureField type="hp" label="HP" />
      <CreatureField type="armor" label="Armor" />
    </fieldset>
  </form>
}

export default CreatureForm