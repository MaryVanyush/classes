import Character from '../character';

test('check clase Character', () => {
  const received = new Character('Ivan');
  received.inputType('Swordsman');
  const expected = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Ivan', type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});

test('check clase Character with error name', () => {
  expect(() => {
    const received = new Character('O');
    received.inputType('Swords');
  }).toThrow('error name');
});

test('check clase Character', () => {
  const received = new Character('Oleg');
  expect(() => {
    received.inputType('Swords');
  }).toThrow('error type');
});
