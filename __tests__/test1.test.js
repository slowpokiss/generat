import Team from '../src/index';

test('test for generator1', () => {
  const tm = new Team();
  const data = tm[Symbol.iterator]();
  const result = data.next();
  const expected = {
    value: {
      name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    },
    done: false,
  };
  expect(result).toStrictEqual(expected);
});

test('test for generator2', () => {
  const tm = new Team();
  const data = tm[Symbol.iterator]();
  data.next();
  const result = data.next();
  const expected = {
    value: {
      name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    },
    done: false,
  };
  expect(result).toStrictEqual(expected);
});

