// 1. Save string of places
// 2. Validate every string
// 3. Store their values 
// 4. Calculate travel points(sum of valid places lengths)
// 5. Print the results in the right format

function solve(input) {
  const regex = new RegExp(/([=\/])[A-Z][A-Za-z]{2,}\1/gm, 'g');
  input = input.match(regex);
  let destinations = [];

  if(input === null){
    console.log('Destinations: ');
    console.log('Travel Points: 0');
    return;
  }
  
  for(let i = 0; i < input.length; i++){
    let current = '';
    if(input[i][0] === '='){
      current = input[i].split('=').join('');
      destinations.push(current);
    }else{
      current = input[i].split('/').join('');
      destinations.push(current);
    }
  }

  let travelPoints = destinations.reduce((acc, curr) => acc + curr.length, 0);
  
  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}

