import ListCreatures from "./../components/ListCreatures";

const creatures = () => {
  return <ListCreatures />;
};

creatures.getInitialProps = async () => {
  let title = "Creatures Database";
  return { title };
};

export default creatures;
