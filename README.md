# Overview of Tabletop Combat Simulator
Allows a user to create a number of creature objects, assigned to either **Team A** or **Team B**. The user may then simulate tabletop combat between Team A and Team B, rolling attacks and damage at random.

# Redux Data
## Creatures
On update, sync to localStorage

### Data
This is an array of objects. Those objects have the following keys:
* {str} Name
* {str} Team
* {str} Hash (hidden unique ID)
* {num} Initiative
* {num} HP
* {num} Armor
* {str} Hit Dice equation
* {str} Damage dice equation

## Editing
### Data
_This is a single creature object, see the Creature's Data listed above for keys_

# Redux Actions
* DeleteCreature { hash }
  * Removes a creature from our dataset
* SaveCreature { _CreatureObject_ }
  * This can both creature or update a creature
* ToggleSidebar { bool }
  * Opens and closes the side navigation drawer