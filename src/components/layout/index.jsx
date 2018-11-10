import {Grid,Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";

const styles = (theme) => {
  return {
    content: {
      margin: "0 auto",
      marginTop: "90px",
      //maxWidth: "1000px",
      width: "80%",
    },
    paper: {
      minHeight: "500px",
      padding: theme.spacing.unit * 4,
    }
  };
};

const Layout = ({children="No page content was passed",classes}) => (
  <div>
    <HeaderBar />
    <SideBar />
    <main className={classes.content}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </main>
  </div>
);

export default withStyles(styles)(Layout);