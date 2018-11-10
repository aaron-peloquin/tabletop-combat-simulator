import ListCreatures from "./../components/ListCreatures";

const creatures = () => {
  return <p>
    <ListCreatures />
  </p>;
};

creatures.getInitialProps = async () => {
  let title = "Creatures Database";
  return { title };
};

export default creatures;
