import SideBar from "../components/SideBar";
import HeaderBar from "./../components/HeaderBar";
import ListCreatures from "./../components/ListCreatures";

const creatures = () => {
  return <p>
    <HeaderBar />
    <SideBar />
    <ListCreatures />
  </p>;
};

creatures.getInitialProps = async () => {
  let title = "Creatures Database";
  return { title };
};

export default creatures;
