import React, { Fragment } from "react"

const About = () => {
  return <Fragment>
    <p>Some about page copy.</p>
  </Fragment>
}

About.getInitialProps = async () => {
  let title = "About"
  return { title }
}

export default About