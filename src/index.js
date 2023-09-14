export default class Team {
  constructor() {
    this.teamArr = [
      {
        name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
      },
      {
        name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
      },
      {
        name: 'Маг', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (const i of this.teamArr) {
      yield i;
    }
  }
}
