import {shallow} from "enzyme"

import {TeamList} from "./TeamList"

jest.mock('./TeamListCreature')

describe("<TeamList />", () => {
  let props; let TeamListComponent

  beforeEach(() => {
    props = {
      Team: "a",
      Creatures: [
        { name: "foo" }
      ],
    }
    TeamListComponent = shallow(<TeamList {...props} />)
  })

  it("renders", () => {
    expect(typeof TeamListComponent).toBe("object")
  })

  it("snapshots", () => {
    expect(TeamListComponent.debug()).toMatchSnapshot()
  })
})
