/**
 * Locates the key of a creature based on their hash
 * @param {str} hash the hash you want to find
 * @param {obj} state the state of characters
 * @return {int} of the key that was found, or -1
 */
const lookupCreatureHash = (hash, state) => {
  let key = -1
  state.forEach((v, k)=>{
    if (v.hash===hash) {
      key = k
    }
  })
  return key
}

export default lookupCreatureHash
