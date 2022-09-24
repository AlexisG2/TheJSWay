/* Adding character experience
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description. */

const character = {
    name : "Alexis",
    health: 100, 
    strength: 10,
    XP: 0,

    describe(){
        return `${this.name} has ${this.health} health and ${this.XP} experience points`;
    }
};

character.health -= 20;
character.XP += 10;
character.describe();

