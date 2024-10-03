export default class HolbertonCourse {
  constructor(name, length, student) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be an integer');
    }
    if (!Array.isArray(student)) {
      throw new TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._student = student;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be an integer');
    }
    this._length = value;
  }

  // getter and setter for student
  get student() {
    return this._student;
  }

  set student(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    this._student = value;
  }
}
