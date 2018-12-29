import {
  Grid,
  TextField,
} from "@material-ui/core/"
import {withStyles} from "@material-ui/core/styles"
import {connect} from "react-redux"

/**
 * Builds <Grid> input fields for the <CreatureForm /> element
 * @param {obj} props
 *  @param {obj} classes MUI styles
 *  @param {str} dataKey the data key of this field
 *  @param {str} field the type of field
 *  @param {str} label the display label
 *  @param {str} size the grid width
 *  @param {func} onChange a callback function fired when this input field changes
 * @return {jsx} Component
 */
let CreatureFormGridField = (props) => {
  const {
    classes,
    dataKey,
    field,
    label,
    size,
    onChange,
  } = props
  let wrappedField; let DataField
  let dataValue = props.dataValue

  /**
   * Handle updating creature data, and call onChange callback
   * @param {obj} e event object
   * @param {str} key the key we are going to update
   * @return {void}
   */
  const updateData = (e, key) => {
    const curValue = e.target.value||""
    dataValue = curValue

    if (typeof onChange=="function") {
      onChange(key, curValue)
    }
  }

  const FieldProps = {
    "onChange": (e)=>{
      updateData(e, dataKey)
    },
    "className": classes.formField,
    "value": dataValue,
    "label": label,
  }

  switch (field) {
  default:
    DataField = <TextField {...FieldProps} />
    break
  case "multiline":
    DataField = <TextField multiline rows="3" {...FieldProps} />
    break
  }

  switch (size) {
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
      width: "100%",
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
    },
  }
}

const MapStateToProps = (state, props) => {
  const dataValue = state.editing[props.dataKey]
  return {
    dataValue,
  }
}

CreatureFormGridField = withStyles(styles)(CreatureFormGridField)

export default connect(MapStateToProps)(CreatureFormGridField)
