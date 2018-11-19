import {connect} from "react-redux"

import CreatureForm from "./CreatureForm"
import CreatureCreate from "./../store/action/CreatureCreate"

let data = {name:"", hp:""}

const handleSubmit = (dispatch, data) => {
  CreatureCreate(dispatch, data)
}

const CreatureFormNew = (props) => {
  const {dispatch} = props
  return <CreatureForm creature={data} onSubmit={()=>{handleSubmit(dispatch, data)}} />
}

export default connect()(CreatureFormNew)