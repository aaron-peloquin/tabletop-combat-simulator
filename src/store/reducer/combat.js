import roll from "./../../helpers/diceRolling/"
import sortInitiative from "./../../helpers/sortInitiative"
import actionTypes from "./../actionTypes"

const defaultState = {
  AliveTeamCreatures: {a: [], b: []},
  CreatureStatus: [],
  Log: [],
  TurnOrder: [],
}
/**
 * Simulates combat between two teams of creatures.
 * @param {obj} state The current state of `combat`
 * @param {obj} data
 *  @param {str} type The redux action type
 *  @param {obj} payload The data used to update the stae, based upon the type
 * @return {obj} the new state
 */
const combatReducer = (state=defaultState, {type=false, payload={}}) => {
  switch (type) {
  case actionTypes.RunSimulation:
    /**
     * 1) Parse and set all creatures (all payload) into state
     *    A) Fill `state.AliveTeamCreatures` with creature hashes `{a: [hash, hash], b: [hash]}`
     *    B) Roll Inititive and fill `state.TurnOrder` like `[hash, hash, hash]`
     *    C) Fill `state.CreatureStatus` `{hash:Data}`
     * 2) Run a while loop for combat rounds (end when 1 team is fully knocked out, or 100 rounds)
     *    A) Loop through `state.TurnOrder`
     *    B) rolling attacks against random creatures found in the oposite team of `state.AliveTeamCreatures`
     *    C) if it hits their armor, roll and deal damage
     *    D) if this damage reduces them to 0 or lower, remove the enemy from `state.AliveTeamCreatures`
     *    E) insert a row into `state.Log`, describing what happened
     */
    if (payload.length>0) {
      /** Always reset state back to default */
      state = Object.assign({}, defaultState)
      state.AliveTeamCreatures = Object.assign({}, defaultState.AliveTeamCreatures)
      state.AliveTeamCreatures.a = defaultState.AliveTeamCreatures.a.slice()
      state.AliveTeamCreatures.b = defaultState.AliveTeamCreatures.b.slice()
      state.CreatureStatus = defaultState.CreatureStatus.slice()
      state.TurnOrder = defaultState.TurnOrder.slice()
      state.Log = defaultState.Log.slice()
      state.Log[0] = []

      /** Iterate through all creatures */
      payload.map((creature) => {
        if (creature.hp > 0) {
          /** Set enemy team */
          creature.enemy = "a"
          if (creature.team === "a") {
            creature.enemy = "b"
          }

          /** Sort concious creatures into teams A and B in `AliveTeamCreatures` */
          state.AliveTeamCreatures[creature.team].push(creature.hash)

          /** Add creature into `state.CreatureStatus` */
          state.CreatureStatus[creature.hash] = creature

          /** Roll inititive, to later sort into `TurnOrder` */
          const initRoll = roll(`1D20+${creature.initiative}`)
          state.Log[0].push(`${creature.name}  rolled a ${initRoll} initiative`)
          state.TurnOrder.push([creature.hash, parseInt(initRoll), parseInt(creature.initiative)])
        }
      })
      if (state.AliveTeamCreatures.a.length > 0 && state.AliveTeamCreatures.b.length > 0) {
        /** Sort creatures by init */
        state.TurnOrder = sortInitiative(state.TurnOrder).map((init) => {
          return init[0]
        })
      }

      /** Loop through combat rounds (max 100) */
      let round = 0
      let turnCreature
      let enemyTeamLength; let enemyTeam
      let randomTargetNum; let attackTargetHash; let attackTarget; let removeCreatureKey
      let hitResult; let damageResult
      let logMessage
      while (round < 100 && state.AliveTeamCreatures["a"].length > 0 && state.AliveTeamCreatures["b"].length > 0) {
        round++
        state.Log[round] = []
        for (const turnHash of state.TurnOrder) {
          turnCreature = state.CreatureStatus[turnHash]
          logMessage = `${turnCreature.name} is unconcious`

          if (turnCreature.hp > 0) {
            enemyTeam = state.AliveTeamCreatures[turnCreature.enemy]
            enemyTeamLength = enemyTeam.length
            if (enemyTeamLength > 0) {
              randomTargetNum = roll(`1d${enemyTeamLength}`)
              randomTargetNum -= 1
              attackTargetHash = enemyTeam[randomTargetNum]
              attackTarget = state.CreatureStatus[attackTargetHash]
              hitResult = roll(turnCreature.hitDiceEquation)
              /** did this attack hit? */
              if (hitResult >= attackTarget.armor) {
                /** Roll and deal damage */
                damageResult = roll(turnCreature.damageDiceEquation)
                state.CreatureStatus[attackTargetHash].hp -= damageResult
                if (state.CreatureStatus[attackTargetHash].hp <= 0) {
                  /** hit, target is knocked unconcious */
                  logMessage = `${turnCreature.name} knocked out ${attackTarget.name} with ${damageResult} damage`
                  removeCreatureKey = state.AliveTeamCreatures[turnCreature.enemy].indexOf(attackTargetHash)
                  state.AliveTeamCreatures[turnCreature.enemy].splice(removeCreatureKey, 1)
                } else {
                  /** hit, target is not unconcious */
                  logMessage = `${turnCreature.name} hit ${attackTarget.name} for ${damageResult} damage`
                }
              } else {
                /** missed */
                logMessage = `${turnCreature.name} missed ${attackTarget.name}`
              }
            } else {
              /** Combat is over */
            }
            state.Log[round].push(logMessage)
          }
        }
      }
      // console.log("state.TurnOrder", state.TurnOrder)
      // console.log("state.CreatureStatus", state.CreatureStatus)
      // console.log("state.AliveTeamCreatures", state.AliveTeamCreatures)
      console.log(`Team ${(state.AliveTeamCreatures.a.length>0?"A":"B")} won`)
      console.log("state.Log", state.Log)
    }
    break
  }
  return state
}

export default combatReducer
