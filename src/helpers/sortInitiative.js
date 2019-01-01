/**
 * Sorts an initiative array.
 * @param {arr} initiativesArray the array we want to sort.
 *  Should be keyed with 1 being their initiative, and 2 being their initiative bonus.
 * @return {arr} the sorted array
 */
const sortInitiative = (initiativesArray) => {
  return initiativesArray.sort((a, b) => {
    let ret = 0
    if (a[1] < b[1]) {
      ret = 1
    } else if (a[1] > b[1]) {
      ret = -1
    } else {
      if (a[2] < b[2]) {
        ret = 1
      } else if (a[2] > b[2]) {
        ret = -1
      }
    }
    return ret
  })
}

export default sortInitiative
