import {connect} from "react-redux"

import CreatureForm from "./CreatureForm"
import CreatureCreate from "./../store/action/CreatureCreate"

let data = {}

const CreatureFormNew = (props) => {
  const {dispatch} = props
  return <CreatureForm creature={data} onSubmit={(payload)=>{CreatureCreate(dispatch, payload)}} />
}

export default connect()(CreatureFormNew)