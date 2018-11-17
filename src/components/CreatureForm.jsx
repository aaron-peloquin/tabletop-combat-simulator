import React from "react"
import {Button,TextField} from "@material-ui/core/"

let data
let originalData
let _cb

const updateData = (e, key) => {
  const curValue = e.target.value||""
  data[key] = curValue
}

const submitData = () => {
  _cb(data)
  data = originalData
  window.location.href = "/creatures"
}

const CreatureForm = (props) => {
  data = props.creature||{}
  _cb = props.onSubmit||function(){}
  return <form noValidate autoComplete="off" onSubmit={submitData}>
    <fieldset>
      <legend>Hello</legend>
      <TextField label="Name" defaultValue={data.name} onChange={(e)=>{ updateData(e, "name") }}/>
      <TextField label="HP" defaultValue={data.hp} onChange={(e)=>{ updateData(e, "hp") }}/>
      <TextField label="Armor" defaultValue={data.armor} onChange={(e)=>{ updateData(e, "armor") }}/>
      <Button onClick={submitData}>Submit</Button>
    </fieldset>
  </form>
}

export default CreatureForm