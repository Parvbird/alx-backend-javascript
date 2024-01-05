export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be  string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be  number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('must be  array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(na) {
    if (typeof na !== 'string') {
      throw new TypeError('Name must be  string');
    }
    this._name = na;
  }

  get length() {
    return this._length;
  }

  set length(zise) {
    if (typeof zise !== 'number') {
      throw new TypeError('Length must be  number');
    }
    this._length = zise;
  }

  get students() {
    return this._students;
  }

  set students(stu) {
    if (!Array.isArray(stu)) {
      throw new TypeError('must be array');
    }
    this._students = stu;
  }
}
