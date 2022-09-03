export default class Team {
  constructor(...team) {
    this.team = [];
    for (const person of team) {
      this.team.push(person);
    }
  }

  iterator() {
    return this.team[Symbol.iterator]();
  }
}
