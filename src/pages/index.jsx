import React, { Fragment } from "react"
import Link from "next/link"

const index = () => {
  return <Fragment>
    <Link href="/about"><a>About</a></Link>
  </Fragment>
}

export default index