# Tabletop Combat Simulator
Allows a user to create a number of creature objects, assigned to either **Team A** or **Team B**. The user may then simulate tabletop combat between Team A and Team B, rolling attacks and damage at random.

![](https://travis-ci.com/aaron-peloquin/tabletop-combat-simulator.svg?branch=master)

# Running Docker
Open your computer's port 80 if you want to load it from other machines.
- Install docker globally with either yarn or npm.
- `yarn docker:build`
- `yarn docker:run`

# Redux Data
## Creatures
On update, sync to localStorage

### Data
Array of objects. Those objects have the following keys:
* {str} Name
* {str} Team
* {str} Hash (hidden unique ID)
* {num} Initiative
* {num} HP
* {num} Armor
* {str} Hit Dice equation
* {str} Damage dice equation

## Combat
### Data
* {obj} AliveTeamCreatures `{a: [hash, hash, ...], b: [hash, ...]}`
* {arr} TurnOrder `[hash, hash, hash]`
* {obj} CreatureStatus `{hash: {CreatureData}, hash: {...}}`
* {arr} Log `["description of what happens", ...]`
* {str} Victory `a||b`

# Redux Actions
* CopyCreature(`"hash"`)
  * Creatures a copy of the creature who has this `hash`, generating a new hash for the new creature.
* DeleteAllCreatures(`"confirm"`)
  * Removes **all** creature from the state & localStorage when given a string of "confirm"
* DeleteCreature(`"hash"`)
  * Removes a creature from our dataset & localStorage
* RunSimulation(`[State.Creatures]`)
  * Running the simulation using the creatures it's given
* SaveCreature(`{CreatureData}`)
  * This can both creature or update a creature
* SetEditCreature(`{CreatureData}`)
  * Sets a new `{CreatureData}` object as `store.editing`
* ToggleSidebar()
  * Open or Close the side navigation drawer
* UpdateEditCreature(`"key"`, `"NewValue"`)
  * Updating a key in `State.editing`

## Editing
### Data
_This is a single creature object, see the Creature's Data listed above for keys_

## SideBar
### Data
Boolean to track if the sidebar navigation is open or not.
