import { Grid, TextField, Select, MenuItem } from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"

/** Builds <Grid> input fields for the <CreatureForm /> element */
let CreatureFormGridField = (props) => {
  const {classes, dataKey, field, label, size, onChange, creature} = props
  let wrappedField, DataField

  /** Handle updating creature data, and call onChange callback */
  const updateData = (e, key) => {
    const curValue = e.target.value||""
    creature[key] = curValue

    if(typeof onChange=="function") {
      onChange(key,curValue)
    }
  }

  let FieldProps = {
    "onChange": (e)=>{ updateData(e, dataKey) },
    className: classes.formField,
    defaultValue: creature[dataKey],
    label: label
  }

  switch(field) {
  default:
    DataField = <TextField {...FieldProps} />
    break
  case "multiline":
    DataField = <TextField multiline rows="3" {...FieldProps} />
    break
  }

  switch(size) {
  default:
  case "small":
    wrappedField = <Grid item xs={12} sm={4} md={4}>{DataField}</Grid>
    break
  case "medium":
    wrappedField = <Grid item xs={12} sm={6}>{DataField}</Grid>
    break
  case "large":
    wrappedField = <Grid item xs={12}>{DataField}</Grid>
    break
  }

  return wrappedField
}

const styles = (theme) => {
  return {
    formField: {
      width:"100%",
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
    }
  }
}

CreatureFormGridField = withStyles(styles)(CreatureFormGridField)

export default CreatureFormGridField