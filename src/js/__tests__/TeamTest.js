import Team from '../Team';
import Person from '../Person';

test('Positive test of the constructor of the Team class', () => {
  const swordsman = new Person('Мечник', 'Swordsman');
  const bowman = new Person('Лучник', 'Bowman');
  const magician = new Person('Кастер', 'Magician');
  const enemyTeam = new Team(swordsman, bowman, magician);
  expect(enemyTeam).toEqual({
    team: [{
      attack: 100, defence: 100, health: 100, level: 1, name: 'Мечник', type: 'Swordsman',
    }, {
      attack: 100, defence: 100, health: 100, level: 1, name: 'Лучник', type: 'Bowman',
    }, {
      attack: 100, defence: 100, health: 100, level: 1, name: 'Кастер', type: 'Magician',
    }],
  });
});

test('Positive test of the iterator method of the Team class', () => {
  const swordsman = new Person('Мечник', 'Swordsman');
  const bowman = new Person('Лучник', 'Bowman');
  const magician = new Person('Кастер', 'Magician');
  const enemyTeam = new Team(swordsman, bowman, magician);
  const testArray = [];
  for (const person of enemyTeam.iterator()) {
    testArray.push(person);
  }
  expect(testArray).toEqual(
    [{
      attack: 100, defence: 100, health: 100, level: 1, name: 'Мечник', type: 'Swordsman',
    }, {
      attack: 100, defence: 100, health: 100, level: 1, name: 'Лучник', type: 'Bowman',
    }, {
      attack: 100, defence: 100, health: 100, level: 1, name: 'Кастер', type: 'Magician',
    }],
  );
});

test('Positive test of the iterator method with using next() of the Team class', () => {
  const swordsman = new Person('Мечник', 'Swordsman');
  const bowman = new Person('Лучник', 'Bowman');
  const magician = new Person('Кастер', 'Magician');
  const enemyTeam = new Team(swordsman, bowman, magician);
  expect(enemyTeam.iterator().next()).toEqual({
    done: false,
    value: {
      attack: 100, defence: 100, health: 100, level: 1, name: 'Мечник', type: 'Swordsman',
    },
  });
});
