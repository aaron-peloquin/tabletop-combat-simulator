import { connect } from "react-redux"
import {Button} from "@material-ui/core"

import DeleteAll from "./../store/action/DeleteAllCreatures"

const DeleteAllCreatures = (props) => {
  const { dispatch, DeleteAll } = props
  return <Button data-id="delete-all" onClick={()=>{
    DeleteAll(dispatch,"delete all")
  }} variant="contained" color="secondary">Delete All Creatures</Button>
}

DeleteAllCreatures.getInitialProps = async () => {
  return { ActionDeleteAll: DeleteAll }
}

export default connect()(DeleteAllCreatures)
