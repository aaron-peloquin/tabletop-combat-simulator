import {Grid, Paper} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

import HeaderBar from './HeaderBar'
import SideBar from './SideBar'
import {initGA, logPageView} from './../../helpers/analytics'

/**
 * Default page layout, wraps the <HeaderBar />, <SideBar /> and main content area for each page.
 * @param {jsx} children is the page contents
 * @param {obj} classes is the wrapping MUI styles for all pages
 * @return {jsx} Component
 */
const Layout = ({children='No page content was passed', classes}) => {
  React.useEffect(() => {
    try {
      if (window && !window.GA_INITIALIZED) {
        initGA()
      }
      window.GA_INITIALIZED = true
      logPageView()
    } catch (e) {
      console.warn('no metrics recorded')
    }
  }, [])
  return (
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
  )
}

const styles = (theme) => {
  return {
    content: {
      margin: '0 auto',
      marginTop: '90px',
      width: '90%',
    },
    paper: {
      padding: theme.spacing.unit * 4,
    },
  }
}

export default withStyles(styles)(Layout)
