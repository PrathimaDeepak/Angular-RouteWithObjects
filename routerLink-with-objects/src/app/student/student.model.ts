export class Student {
  id: number;
  name: string;
  age: number;
  gender: string;
  subjects: Array<string>;

  constructor(id, name, age, gender, subjects) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.subjects = subjects;
  }
}

