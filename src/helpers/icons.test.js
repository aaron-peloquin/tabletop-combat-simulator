import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {SvgIcon} from "@material-ui/core"

import {Heart, Boot, Shield, Aim, Blade} from "./Icons"

describe("Icons", ()=>{
  const Components = [
    createShallow({"untilSelector": "Heart"})(<Heart />),
    createShallow({"untilSelector": "Boot"})(<Boot />),
    createShallow({"untilSelector": "Shield"})(<Shield />),
    createShallow({"untilSelector": "Aim"})(<Aim />),
    createShallow({"untilSelector": "Blade"})(<Blade />),
  ]

  Components.map((component) => {
    it("loads", () => {
      expect(typeof component).toBe("object")
    })

    it("snapshots", () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
