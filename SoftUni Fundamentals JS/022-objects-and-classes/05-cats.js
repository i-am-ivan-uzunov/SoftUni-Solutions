function solve(input){
  class Cats{
    constructor(name, age){
      this.name = name;
      this.age = age;
    }

    meow(){
      console.log(`${this.name}, age ${this.age} says Meow`)
    }
  }

  let cats = [];

  for(let data of input){
    let name = data.split(' ')[0];
    let age = data.split(' ')[1];
    let cat = new Cats(name, age);

    cat.meow();
  }

  
}

solve(['Mellow 2', 'Tom 5']);