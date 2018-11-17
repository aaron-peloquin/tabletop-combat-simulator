import {connect} from "react-redux"

import CreatureForm from "./CreatureForm"
import CreateCreature from "./../store/action/CreateCreature"

let data = {name:"", hp:""}

const handleSubmit = (dispatch, data) => {
  CreateCreature(dispatch, data)
}

const CreatureFormNew = (props) => {
  const {dispatch} = props
  return <CreatureForm creature={data} onSubmit={()=>{handleSubmit(dispatch, data)}} />
}

export default connect()(CreatureFormNew)