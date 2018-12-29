import {
  Table,
  TableHead, TableBody,
  TableRow, TableCell,
} from "@material-ui/core/"
import {connect} from "react-redux"

import CreaturesTableRow from "./CreaturesTableRow"

const CreaturesList = (props) => {
  const {creatures, numCreatures} = props
  const columns = ["", "Name", "CR"]
  let html
  if (creatures.length===0) {
    html = <p>No creatures exist yet</p>
  } else {
    html = <div>
      <p>Showing {numCreatures} Creatures</p>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((label)=>{
              return <TableCell key={`heading-${label}`}>{label}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {creatures.map((c)=><CreaturesTableRow key={`creature-${c.hash}`} creature={c} />)}
        </TableBody>
      </Table>
    </div>
  }
  return html
}

export const mapStateToProps = (state) => {
  const {creatures=[]} = state
  const sortedCreatures = creatures.sort((a, b)=>{
    let r = 0
    if (a.name<b.name) {
      r = -1
    } else if (a.name>b.name) {
      r = 1
    }
    return r
  })
  const numCreatures = creatures.length
  return {creatures: sortedCreatures, numCreatures}
}

export default connect(mapStateToProps)(CreaturesList)
