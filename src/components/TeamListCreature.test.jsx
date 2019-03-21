import toJson from "enzyme-to-json"
import {shallow} from "enzyme"

import {RawTeamListCreature} from "./TeamListCreature"
import mockStoreState from "../testHelpers/mockStoreState"

jest.mock("@material-ui/core/")

describe("<TeamListCreature />", () => {
  // const renderShallowUntilComponent = createShallow({"untilSelector": "TeamListCreature"})
  const props = {
    Creature: mockStoreState.creatures[0],
    funcSetEditCreature: jest.fn(()=>{}),
    funcCopyCreature: jest.fn(()=>{}),
    funcDeleteCreature: jest.fn(()=>{}),
    classes: {CreatureCard: true},
  }
  const TeamListCreatureComponent = shallow(<RawTeamListCreature {...props} />)

  it("renders", () => {
    expect(typeof TeamListCreatureComponent).toBe("object")
  })

  it("calls edit function", () => {
    const editButton = TeamListCreatureComponent.find("[data-testid='editButton']")
    expect(editButton.length).toBe(1)
    editButton.simulate("click")
    expect(props.funcSetEditCreature).toHaveBeenCalledTimes(1)
  })

  it("calls copy function", () => {
    const copyButton = TeamListCreatureComponent.find("[data-testid='copyButton']")
    expect(copyButton.length).toBe(1)
    copyButton.simulate("click")
    expect(props.funcCopyCreature).toHaveBeenCalledTimes(1)
  })

  it("calls delete function", () => {
    const deleteButton = TeamListCreatureComponent.find("[data-testid='deleteButton']")
    expect(deleteButton.length).toBe(1)
    deleteButton.simulate("click")
    expect(props.funcDeleteCreature).toHaveBeenCalledTimes(1)
  })

  it("snapshots", () => {
    const Tree = toJson(TeamListCreatureComponent)
    expect(Tree).toMatchSnapshot()
  })
})
