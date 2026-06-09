let person = {
  'first-name': 'Ivan',
  age: 22,
  printStatus() {return `My name is ${[this["first-name"]]}`}
}
let person1 = {
  'first-name': 'Petar',
  age: 22,
}

person1['printStatus'] = person.printStatus;
console.log(person.printStatus());
console.log(person1.printStatus());