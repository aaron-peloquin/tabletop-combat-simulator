import {connect} from 'react-redux'
import {Button} from '@material-ui/core'

import runSimulation from './../store/action/RunSimulation'

const SimulateCombat = (props) => {
  const {
    /** Actions */
    funcSimulateCombat,

    /** Props from State */
    Creatures,
  } = props
  return <Button
    data-cy="SimulateCombat"
    variant="contained"
    color="primary"
    onClick={()=>{
      funcSimulateCombat(Creatures)
    }}>Run Combat Simulation</Button>
}

const MapStateToProps = (state) => {
  const Creatures = state.creatures
  return {
    Creatures,
  }
}

const MapActionsToProps = (dispatch) => {
  return {
    funcSimulateCombat: (Creatures) => {
      runSimulation(dispatch, Creatures)
    },
  }
}

export default connect(MapStateToProps, MapActionsToProps)(SimulateCombat)
