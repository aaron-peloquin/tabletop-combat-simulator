import {connect} from "react-redux"

import CreatureForm from "./CreatureForm"
import CreatureUpdate from "./../store/action/CreatureUpdate"

const CreatureFormEdit = (props) => {
  const {dispatch, router, creature} = props
  return <CreatureForm router={router} creature={creature} onSubmit={(payload)=>{CreatureUpdate(dispatch, payload)}} />
}

export default connect()(CreatureFormEdit)