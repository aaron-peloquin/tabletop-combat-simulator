import { ListItem, ListItemIcon, ListItemText  } from "@material-ui/core"
import Link from "next/link"
import { withStyles } from "@material-ui/core/styles"

/**
 * Component for links as list items
 * @param {obj} props
    * @param {str} classes MUI object for CSS
    * @param {str} text The text of this link
    * @param {str} url The href
    * @param {jsx} children Optional icon
    * @return {jsx} <Link /> component intended to be placed inside of an MUI <ListItem />
 */
const SideBarLink = (props) => {
  const {text, url, children, classes} = props
  return <Link href={url}>
    <a className={classes.link}>
      <ListItem button>
        {children?<ListItemIcon>{children}</ListItemIcon>:""}
        <ListItemText primary={text} />
      </ListItem>
    </a>
  </Link>
}

/** MUI Styles for <SideBarLink /> */
const styles = {
  link: { textDecoration: "none", },
}

export default withStyles(styles)(SideBarLink)