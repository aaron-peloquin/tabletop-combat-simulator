import {Button, TableRow, TableCell} from "@material-ui/core"
import {Edit, Delete} from "@material-ui/icons"
import Link from "next/link"
import {connect} from "react-redux"

import deleteCreature from "./../store/action/DeleteCreature"

const CreaturesTableRow = (props) => {
  const {creature, funcDeleteCreature, dispatch} = props
  return <TableRow key={creature.hash}>
    <TableCell>
      <Link as={`/creature/${creature.hash}`} href={`/creature?hash=${creature.hash}`}>
        <a>
          <Button variant="contained" color="primary">
            <Edit />
          </Button>
        </a>
      </Link>
      <Button variant="contained" color="secondary" onClick={()=>{
        funcDeleteCreature(dispatch, creature.hash)
      }}>
        <Delete />
      </Button>
    </TableCell>
    <TableCell>{creature.name}</TableCell>
    <TableCell>{creature.cr}</TableCell>
  </TableRow>
}

CreaturesTableRow.defaultProps = {
  funcDeleteCreature: deleteCreature,
}

export default connect()(CreaturesTableRow)
