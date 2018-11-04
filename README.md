# Overview of Tabletop Combat Simulator
Allows a user to create a number of creature objects. Creature objects can be added to **Team A** or **Team B**. The user may then simulate tabletop combat between Team A and Team B, rolling attacks and damage at random.

# Redux spec
## Creatures
On update, sync to localStorage
### Actions
* CreateCreature {_this takes a payload of the data listed below_}
* UpdateCreature {hash, data:{_keys from data, listed below_}}
* DeleteCreature {hash}
### Data
This is an array of objects. Those objects have the following keys:
* {str} Name
* {str} Hash (unique ID)
* {str} Description
* {num} Default Initiative
* {num} HP
* {num} Armor
* {str} Hit Dice equation
* {str} Damage dice equation
## Teams
### Actions
* AddToTeam {creatureHash, team}
* RemoveFromTeam {Key, team}
* UpdateInititive {Key, team}
### Data
* TeamA (array of objects)
  * {str} CreatureHash
  * {num} Inititive
  * {num} Times Hit
  * {num} Current HP
* TeamB (array of objects)
  * {str} CreatureHash
  * {num} Inititive
  * {num} Times Hit
  * {num} Current HP
