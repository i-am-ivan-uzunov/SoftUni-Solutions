function printTrainWagons(input) {
  let wagons = input.shift().split(' ').map(Number);
  let maxCapacity = input.shift().split(' ').map(Number);

  for (let index = 0; index < input.length; index++) {
    if (input[index].length > 2) {
      let [command, number] = input[index].split(' ');
      number = Number(number);

      wagons.push(number);
    } else {
      let number = Number(input[index]);
      
      for(let i = 0; i < wagons.length; i++){
        if(wagons[i] + number <= maxCapacity){
          wagons[i] += number;
          break;
        }
      }
    }
  }

  console.log(wagons.join(' '));
}


printTrainWagons(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);