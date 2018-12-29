// import {connect} from "react-redux"
import {Button} from "@material-ui/core"

// import runSimulation from "./../store/action/RunSimulation"

const SimulateCombat = (props) => {
  // const {simulateCombat} = props
  return <Button data-id="delete-all" variant="contained" color="primary">
    Run Combat Simulation
  </Button>
}

// const MapStateToProps = () => {
//   return { }
// }

// const MapActionsToProps = (dispatch) => {
//   return {
//     simulateCombat: () => {
//       runSimulation(dispatch)
//     },
//   }
// }

// export default connect(MapStateToProps, MapActionsToProps)(SimulateCombat)
export default SimulateCombat
