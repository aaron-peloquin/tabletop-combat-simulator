
const about = () => {
  return <div>
    <p>Some about page copy.</p>
  </div>;
};

about.getInitialProps = async () => {
  let title = "About";
  return { title };
};

export default about;