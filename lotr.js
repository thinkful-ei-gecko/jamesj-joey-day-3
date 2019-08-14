'use strict';

function createCharacter (name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe () {
      return `${this.name} is a ${this.race} from ${this.origin}`;
    },
    evaluateFight (character) {
      let opponentDamage = character.defense > this.attack ? 0 : this.attack - character.defense;
      let ownDamage = this.defense > character.attack ? 0 : character.attack - this.defense;
      return `Your opponent takes ${opponentDamage} and you receive ${ownDamage}`;
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 6, 9));
characters.find(char => char.nickname === 'aragorn');
characters.filter(char => char.race === 'Hobbit');
characters.filter(char => char.attack > 5);