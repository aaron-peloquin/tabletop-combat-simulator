import React, {Fragment} from "react"
import {
  Typography,
} from "@material-ui/core"

const About = () => {
  return <Fragment>
    <Typography variant="h2">About</Typography>
    <Typography variant="body2">
      The goal of this website is to help simulate simple combat scenarios for your tabletop game.
    </Typography>
    <Typography variant="h4">App Code</Typography>
    <Typography variant="body2">
      The code for this web app is open-source,
      see <a href="https://github.com/aaron-peloquin/tabletop-combat-simulator">Github</a>.
    </Typography>
    <Typography variant="h4">Thanks</Typography>
    <Typography variant="body2">
      Special thanks to <a target="_blank" href="https://game-icons.net/">Game-Icons.net</a>,
      who provided the icons on this app under under
      <a target="_blank" href="https://creativecommons.org/licenses/by/3.0/">Creative Commons</a>.
    </Typography>
  </Fragment>
}

About.getInitialProps = async () => {
  const title = "About"
  return {title}
}

export default About
