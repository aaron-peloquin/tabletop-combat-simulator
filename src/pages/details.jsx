import {Fragment} from 'react'
import {Typography} from '@material-ui/core'

const Details = () => {
  return <Fragment>
    <Typography variant="h2">Simulation Explanation</Typography>
    <Typography variant="body2">
      All combat is ran through simulated dice rolls, which are ranomdized using
      <a href="https://www.npmjs.com/package/seedrandom">Seedrandom</a> between every
      roll (initiative, hit rolls, and damage dice rolls).
    </Typography>
    <Typography variant="body2">
      Every part of the dice equation is rolled seperately meaning that 2d8
      generates 2 random numbers between 1 and 8, then sums them together.
    </Typography>
    <Typography variant="body2">
      Initiative is rolled as 1d20 + the creature's modifier
    </Typography>
    <Typography variant="body2">
      Critical hits happen when any of the dice from the hit dice equation equal the maximum
      possible rolled (ie: 20 on a 1d20+5), and they always hit and they roll damage twice (* including the modifier)
    </Typography>
    <Typography variant="body2">
      Critical misses happen when any of the dice from the hit dice equation are
      the mimum possible rolled (ie: 1), and always miss.
    </Typography>
  </Fragment>
}

export default Details
