export class Animal {
  constructor(name, age, specie) {
    this.name = name
    this.age = age
    this.specie = specie
  }
  getInfo() {
    return this
  }
}

export class Mammal extends Animal {
  constructor(name, age, specie, hasFur) {
    super(name, age, specie)
    this.hasFur = hasFur
  }
  getInfo() {
    return {
      ...this,
      ...this.hasFur
    }
  }
}

export class Dog extends Mammal {
  constructor(name, age, specie = 'dog', breed, hasFur) {
    super(name, age, specie, hasFur)
    this.breed = breed
  }
  getInfo() {
    return this
  }
  bark() {
    return 'woof!'
  }
}
