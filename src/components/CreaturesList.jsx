import { connect } from "react-redux"
import Link from "next/link"
import {
  Table,
  TableHead, TableBody,
  TableRow, TableCell,
  TableSortLabel
} from "@material-ui/core/"

const CreatureRow = ({data}) => {
  return <TableRow key={data.hash}>
    <TableCell><Link as={`/creature/${data.hash}`} href={`/creature?hash=${data.hash}`}><a>Edit</a></Link></TableCell>
    <TableCell>{data.name}</TableCell>
    <TableCell>{data.cr}</TableCell>
  </TableRow>
}

const CreaturesTable = ({data}) => {
  if(data.length>0) {
    const columns = ["Edit","Name","CR"]
    return <Table>
      <TableHead>
        <TableRow>
          {columns.map((label)=>{return <TableCell key={label}>{label}</TableCell>})}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((d)=><CreatureRow key={d.hash} data={d} />)}
      </TableBody>
    </Table>
  }
  return <p>No creatures.</p>
}

const CreaturesList = (props) => {
  const {creatures,numCreatures} = props
  return <div>
    <p>Showing {numCreatures} Creatures</p>
    <CreaturesTable data={creatures} />
  </div>
}

const mapStateToProps = (state) => {
  const creatures = state.creatures
  const sortedCreatures = creatures.sort((a,b)=>{
    let r = 0
    if(a.name<b.name){ r = -1 }
    else if(a.name>b.name) { r = 1 }
    return r
  })
  const numCreatures = state.creatures.length
  return {creatures:sortedCreatures, numCreatures}
}

export default connect(mapStateToProps)(CreaturesList)