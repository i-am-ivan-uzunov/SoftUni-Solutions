function solve(input) {
  for (let data of input) {
    data = data.split(' | ');

    let town = data.shift();
    let lat = Number(data.shift()).toFixed(2);
    let long = Number(data.shift()).toFixed(2);

    let output = {
      town,
      latitude: lat,
      longitude: long
    }

    console.log(output);
  }
}

