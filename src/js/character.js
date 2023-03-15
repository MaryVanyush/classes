export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('error name');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  inputType(type) {
    const heroes = [
      { type: 'Bowerman', attack: 25, defence: 25 },
      { type: 'Swordsman', attack: 40, defence: 10 },
      { type: 'Magician', attack: 10, defence: 40 },
      { type: 'Daemon', attack: 10, defence: 40 },
      { type: 'Undead', attack: 25, defence: 25 },
      { type: 'Zombie', attack: 40, defence: 10 },
    ];

    heroes.find((el) => {
      if (el.type === type) {
        this.type = type;
        this.attack = el.attack;
        this.defence = el.defence;
      }
    });
    if (!this.type) {
      throw new Error('error type');
    }
  }
}
