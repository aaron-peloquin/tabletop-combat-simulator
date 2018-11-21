import { connect } from "react-redux"
import Link from "next/link"
import {
  Button,
  Table,
  TableHead, TableBody,
  TableRow, TableCell,
  TableSortLabel,
} from "@material-ui/core/"
import {FilterList, Edit, Delete} from "@material-ui/icons"

import CreatureDeleteOne from "./../store/action/CreatureDeleteOne"

const CreatureRow = ({data, dispatch}) => {
  return <TableRow key={data.hash}>
    <TableCell>
      <Link as={`/creature/${data.hash}`} href={`/creature?hash=${data.hash}`}>
        <a>
          <Button variant="contained" color="primary">
            <Edit />
          </Button>
        </a>
      </Link>
      <Button variant="contained" color="secondary" onClick={()=>{CreatureDeleteOne(dispatch, data.hash)}}>
        <Delete />
      </Button>
    </TableCell>
    <TableCell>{data.name}</TableCell>
    <TableCell>{data.cr}</TableCell>
  </TableRow>
}

const CreaturesTable = ({data, dispatch}) => {
  if(data.length>0) {
    const columns = ["","Name","CR"]
    return <Table>
      <TableHead>
        <TableRow>
          {columns.map((label)=>{return <TableCell key={label}>{label}</TableCell>})}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((d)=><CreatureRow key={d.hash} data={d} dispatch={dispatch} />)}
      </TableBody>
    </Table>
  }
  return <p>No creatures.</p>
}

const CreaturesList = (props) => {
  const {creatures, numCreatures, dispatch} = props
  return <div>
    <p>Showing {numCreatures} Creatures</p>
    <CreaturesTable data={creatures} dispatch={dispatch} />
  </div>
}

const mapStateToProps = (state) => {
  const creatures = state.creatures
  const sortedCreatures = creatures.sort((a,b)=>{
    let r = 0
    if(a.name<b.name) { r = -1 }
    else if(a.name>b.name) { r = 1 }
    return r
  })
  const numCreatures = state.creatures.length
  return {creatures:sortedCreatures, numCreatures}
}

export default connect(mapStateToProps)(CreaturesList)