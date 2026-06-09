function solve(input) {
  input = input.slice(1);
  let coordinates = [];

  for(let inp of input){
    let tokens = inp.slice(2, -1).split(' | ');
    let [Town, Latitude, Longitude] = tokens;
    
    Latitude = +Number(Latitude).toFixed(2);
    Longitude = +Number(Longitude).toFixed(2);

    coordinates.push({Town, Latitude, Longitude});
  }

  let parsed = JSON.stringify(coordinates);
  console.log(parsed);
}

