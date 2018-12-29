import actionTypes from "./../actionTypes"

const UpdateEditCreature = (dispatch, key, value) => {
  /** Cleanse data */
  switch (key) {
  case "hp":
  case "armor":
    value = value.replace(/\D/g, "")
    break
  case "initiative":
    value = value.replace(/\-\D/g, "")
    break
  case "hitDiceEquation":
  case "damageDiceEquation":
    value = value.replace(/([^\d|d|\+|\-|\*|\/|\(|\)])/gi, "").toLowerCase()
    break
  }

  const data = {
    type: actionTypes.UpdateEditCreature,
    payload: {key, value},
  }
  return dispatch(data)
}

export default UpdateEditCreature
