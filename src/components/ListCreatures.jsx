import { connect } from "react-redux";
import {
  Table,
  TableHead, TableBody,
  TableRow, TableCell,
  TableSortLabel
} from "@material-ui/core/";

const CreaturesTable = ({data}) => {
  if(data.length>0) {
    const columns = ["Name","CR","Description"];
    return <Table>
      <TableHead>
        <TableRow>
          {columns.map((label)=>{return <TableCell key={label}>{label}</TableCell>})}
        </TableRow>
      </TableHead>
      {data.map((d)=>{
        return <TableRow key={d.hash}>
          <TableCell>{d.name}</TableCell>
          <TableCell>1</TableCell>
          <TableCell>{d.hash}, {d.description}</TableCell>
        </TableRow>;})}
    </Table>;
  }
  return <p>No creatures.</p>
};

const ListCreatures = (props) => {
  const {creatures} = props;
  return <div>
    <p>Showing {creatures.length} Creatures</p>
    <CreaturesTable data={creatures} />
  </div>;
};

const mapStateToProps = (state) => {
  const creatures = state.creatures;
  return {creatures};
};

export default connect(mapStateToProps)(ListCreatures);