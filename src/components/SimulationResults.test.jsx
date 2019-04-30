import {Provider} from "react-redux"
import {shallow} from "enzyme"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import {SimulationResults, MapStateToProps} from "./SimulationResults"

describe("<SimulationResults />", () => {
  let store; let SimulationResultsComponent

  beforeEach(() => {
    store = initializeStore({})

    SimulationResultsComponent = shallow(<SimulationResults
      classes={{
        CreatureHealth: `color: "blue"`,
        CreatureName: `color: "orange"`,
      }}
      Victory="A"
      FinalRound={4}
      Survivors={[
        {Name: "Beth", Health: 25},
        {Name: "Jerry", Health: 50},
        {Name: "Frank", Health: 75},
      ]}
    />)
  })

  it("renders", () => {
    expect(typeof SimulationResultsComponent).toBe("object")
  })

  it("snapshots", () => {
    const Tree = toJson(SimulationResultsComponent)
    expect(Tree).toMatchSnapshot()
  })

  describe('MapStateToProps()', () => {
    it('returns correctly', () => {
      const mockState = {
        combat: {
          FinalRound: 5,
          Victory: "D",
          CreatureStatus: {
            somehash: {
              name: "Goplin",
              hp: 4,
            }
          },
          AliveTeamCreatures: {"D": ["somehash"]},
        },
      }
      const result = MapStateToProps(mockState)
      })
  })
})
