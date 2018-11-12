import toJson from "enzyme-to-json"

import NewCreature from "./NewCreature"

describe("<New Creature />", ()=>{
  const ReactComponent = () => <NewCreature />
  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
  })

  it("Snapshots", () => {
    expect(toJson(ReactComponent)).toMatchSnapshot()
  })
})