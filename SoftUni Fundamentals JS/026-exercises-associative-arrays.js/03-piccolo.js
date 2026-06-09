function solve(input) {
  let timeline = new Map();

  for (let i = 0; i < input.length; i++) {
    let data = input[i].split(', ');
    let direction = data[0];
    let car = data[1];

    if (direction === 'IN') {
      timeline.set(car, direction);
    } else {
      timeline.delete(car, direction);
    }
  }

  let parking = [];

  for(let car of timeline.keys()){
    parking.push(car);
  }


  if(parking.length > 0){
    parking.sort();
    for(let i = 0; i < parking.length; i++){
      console.log(parking[i]);
    }
  }else{
    console.log('Parking Lot is Empty');
  }
}