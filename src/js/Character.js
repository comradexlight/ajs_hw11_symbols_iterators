export default class Character {
  constructor(name, type) {
    const typesArray = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name === 'string' && name.trim().length >= 2 && name.trim().length <= 10) {
      this.name = name;
    } else {
      throw new Error('Вы ввели неверное имя');
    }
    if (typesArray.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Вы ввели неверный тип');
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
