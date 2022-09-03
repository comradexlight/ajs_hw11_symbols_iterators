import Character from './Character';

export default class Person extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
    this.defence = 100;
  }
}
