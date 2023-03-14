export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1010, 'Недопустимый escape-символ "%.*ls".'],
      [1020, 'Для разрешений уровня сущностей нельзя указывать список вложенных сущностей.'],
      [1030, 'Здесь допустимы только константы. Литерал времени использовать нельзя, поскольку он ссылается на текущую дату.'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
