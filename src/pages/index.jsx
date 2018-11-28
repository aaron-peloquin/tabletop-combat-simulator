import React, { Fragment } from "react";

const Index = () => {
  return <Fragment>
    Hello, homepage.
  </Fragment>;
}

Index.getInitialProps = () => {
  const title = "Tabletop Combat Simulator"
  return { title }
}
export default Index