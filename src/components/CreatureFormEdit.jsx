import {connect} from "react-redux"

import CreatureForm from "./CreatureForm"
import CreatureUpdate from "./../store/action/CreatureUpdate"

/**
 * Creates a <CreatureForm /> that edits a single pre-existing creature record
 * @param {obj} props 
 *    @param {func} dispatch redux dispatch function, injected by connect()
 *    @param {obj} router the react url router
 *    @param {obj} creature a creature data object
*/
const CreatureFormEdit = (props) => {
  const {dispatch, router, creature} = props
  return <CreatureForm router={router} creature={creature} onSubmit={(payload)=>{CreatureUpdate(dispatch, payload)}} />
}

export default connect()(CreatureFormEdit)