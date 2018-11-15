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
    <TableCell>
      <Link as={`/creature/${data.hash}`} href={`/creature?hash=${data.hash}`}>Edit</Link>
      {data.name}
    </TableCell>
    <TableCell>1</TableCell>
    <TableCell>{data.description}</TableCell>
  </TableRow>
}

const CreaturesTable = ({data}) => {
  if(data.length>0) {
    const columns = ["Name","CR","Description"]
    return <Table>
      <TableHead>
        <TableRow>
          {columns.map((label)=>{return <TableCell key={label}>{label}</TableCell>})}
        </TableRow>
      </TableHead>
      {data.map((d)=><CreatureRow data={d} />)}
    </Table>
  }
  return <p>No creatures.</p>
}

const ListCreatures = (props) => {
  const {creatures,numCreatures} = props
  return <div>
    <p>Showing {numCreatures} Creatures</p>
    <CreaturesTable data={creatures} />
  </div>
}

const mapStateToProps = (state) => {
  const creatures = state.creatures
  const numCreatures = state.creatures
  return {creatures,numCreatures}
}

export default connect(mapStateToProps)(ListCreatures)