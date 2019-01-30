import {Stack} from "immutable"

import roll from "./../../helpers/diceRolling/"
import sortInitiative from "./../../helpers/sortInitiative"
import actionTypes from "./../actionTypes"

const defaultState = {
  AliveTeamCreatures: {a: [], b: []},
  CreatureStatus: [],
  FinalRound: 0,
  Log: Stack(), // eslint-disable-line
  TurnOrder: [],
  Victory: "",
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
     *    A) Fill `AliveTeamCreatures` with creature hashes `{a: [hash, hash], b: [hash]}`
     *    B) Roll Inititive and fill `TurnOrder` like `[hash, hash, hash]`
     *    C) Fill `CreatureStatus` `{hash:Data}`
     * 2) Run a while loop for combat rounds (end when 1 team is fully knocked out, or 100 rounds)
     *    A) Loop through `TurnOrder`
     *    B) rolling attacks against random creatures found in the oposite team of `AliveTeamCreatures`
     *    C) if it hits their armor, roll and deal damage
     *    D) if this damage reduces them to 0 or lower, remove the enemy from `AliveTeamCreatures`
     *    E) insert a row into `Log`, describing what happened
     * 3) Set `Victory`
     */
    if (payload.length>0) {
      /** Always reset state back to default */
      // state = Object.assign({}, defaultState)
      // AliveTeamCreatures = Object.assign({}, defaultAliveTeamCreatures)
      // AliveTeamCreatures.a = defaultAliveTeamCreatures.a.slice()
      // AliveTeamCreatures.b = defaultAliveTeamCreatures.b.slice()
      // CreatureStatus = defaultCreatureStatus.slice()
      // TurnOrder = defaultTurnOrder.slice()
      // Log = defaultLog.slice()
      // Victory = defaultVictory.slice()

      const AliveTeamCreatures = {a: [], b: []}
      const CreatureStatus = []
      let TurnOrder = []
      let Log = Stack() // eslint-disable-line
      let Victory = ""
      let FinalRound = 0

      /** Iterate through all creatures */
      payload.map((creature) => {
        if (creature.hp > 0) {
          /** Set enemy team */
          creature.enemy = "a"
          if (creature.team === "a") {
            creature.enemy = "b"
          }

          /** Sort concious creatures into teams A and B in `AliveTeamCreatures` */
          AliveTeamCreatures[creature.team].push(creature.hash)

          /** Add creature into `CreatureStatus` */
          CreatureStatus[creature.hash] = creature

          /** Roll inititive, to later sort into `TurnOrder` */
          const initRoll = roll(`1D20+${creature.initiative}`).result
          Log = Log.push({
            Round: "Initiative",
            Message: `Rolled a ${initRoll} initiative`,
            Creature: creature.name,
            Team: creature.team,
          })
          TurnOrder.push([creature.hash, parseInt(initRoll), parseInt(creature.initiative)])
        }
      })
      if (AliveTeamCreatures.a.length > 0 && AliveTeamCreatures.b.length > 0) {
        /** Sort creatures by init */
        TurnOrder = sortInitiative(TurnOrder).map((init) => {
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
      while (round < 999 && AliveTeamCreatures.a.length > 0 && AliveTeamCreatures.b.length > 0) {
        round++
        for (const turnHash of TurnOrder) {
          turnCreature = CreatureStatus[turnHash]
          logMessage = "Skips their turn since they are unconcious"

          if (turnCreature.hp > 0) {
            enemyTeam = AliveTeamCreatures[turnCreature.enemy]
            enemyTeamLength = enemyTeam.length
            if (enemyTeamLength > 0) {
              randomTargetNum = roll(`1d${enemyTeamLength}`).result
              randomTargetNum -= 1
              attackTargetHash = enemyTeam[randomTargetNum]
              attackTarget = CreatureStatus[attackTargetHash]
              hitResult = roll(turnCreature.hitDiceEquation)
              /** did this attack hit? */
              if (hitResult.critHit || (!hitResult.critMiss && hitResult.result >= attackTarget.armor)) {
                /** Roll and deal damage */
                damageResult = roll(turnCreature.damageDiceEquation).result
                /** On critical hits, roll damage twice. */
                if (hitResult.critHit) {
                  damageResult += roll(turnCreature.damageDiceEquation).result
                }
                CreatureStatus[attackTargetHash].hp -= damageResult
                if (CreatureStatus[attackTargetHash].hp <= 0) {
                  /** hit, target is knocked unconcious */
                  logMessage = `${hitResult.critHit?"Critically knocked":"Knocked"} out ${attackTarget.name}`
                    +` with ${damageResult} damage`
                  removeCreatureKey = AliveTeamCreatures[turnCreature.enemy].indexOf(attackTargetHash)
                  AliveTeamCreatures[turnCreature.enemy].splice(removeCreatureKey, 1)
                } else {
                  /** hit, target is not unconcious */
                  logMessage = `${hitResult.critHit?"Critically hit":"Hit"} `
                    +`${attackTarget.name} for ${damageResult} damage`
                }
              } else {
                /** missed */
                if (hitResult.critMiss) {
                  logMessage = `Critically missed ${attackTarget.name}`
                } else {
                  logMessage = `Missed ${attackTarget.name}`
                }
              }
            } else {
              /** Combat is over */
              logMessage = "Has nothing to do"
            }
            Log = Log.push({
              Round: `#${round}`,
              Creature: turnCreature.name,
              Message: logMessage,
              Team: turnCreature.team,
            })
          }
        }
      }
      FinalRound = round
      if (AliveTeamCreatures.a.length > 0) {
        /** Team A won */
        Victory = "a"
      } else {
        /** Team B won */
        Victory = "b"
      }
      state = {
        AliveTeamCreatures,
        CreatureStatus,
        FinalRound,
        Log: Log.toArray(),
        TurnOrder,
        Victory,
      }
    }
    break
  }
  return state
}

export default combatReducer
