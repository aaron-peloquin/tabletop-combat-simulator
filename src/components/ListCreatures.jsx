import { connect } from "react-redux";

const ListCreatures = (props) => {
  console.log("<ListCreatures /> Props:",props);
  return <p>List of {props.creatures.length} Creatures</p>;
};

const mapStateToProps = (state) => {
  const creatures = state.creatures;
  return {creatures};
};

export default connect(mapStateToProps)(ListCreatures);