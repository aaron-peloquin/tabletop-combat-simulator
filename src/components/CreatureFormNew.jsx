import {connect} from "react-redux"

import CreatureForm from "./CreatureForm"
import CreatureCreate from "./../store/action/CreatureCreate"

/**
 * Creates a <CreatureForm /> that create a new creature record
 * @param {obj} props 
 *    @param {func} dispatch redux dispatch function, injected by connect()
 *    @param {obj} router the react url router
*/
const CreatureFormNew = (props) => {
  const {dispatch, router} = props
  return <CreatureForm router={router} creature={{}} onSubmit={(payload)=>{CreatureCreate(dispatch, payload)}} />
}

export default connect()(CreatureFormNew)