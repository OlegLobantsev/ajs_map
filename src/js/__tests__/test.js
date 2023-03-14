import ErrorRepository from '../app';

test.each([
  [1010, 'Недопустимый escape-символ "%.*ls".'],
  [1020, 'Для разрешений уровня сущностей нельзя указывать список вложенных сущностей.'],
  [1030, 'Здесь допустимы только константы. Литерал времени использовать нельзя, поскольку он ссылается на текущую дату.'],
  [11111, 'Unknown error'],
])('error repo', (obj, expected) => {
  const result = new ErrorRepository();
  expect(result.translate(obj)).toBe(expected);
});
