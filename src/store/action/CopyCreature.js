import actionTypes from "../actionTypes"

/**
 * Clones a creature
 * @param {func} dispatch the redux dispatcher action
 * @param {str} hash the hash of the source creature to clone
 * @return {void}
 */
const CopyCreature = (dispatch, hash) => {
  if (typeof hash === "string") {
    const data = {
      type: actionTypes.CopyCreature,
      payload: hash,
    }
    dispatch(data)
  }
}


export default CopyCreature
