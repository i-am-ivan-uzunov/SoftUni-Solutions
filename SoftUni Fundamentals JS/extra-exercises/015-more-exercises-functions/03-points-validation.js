function validatePoints(input){
  let x1 = input[0];
  let y1 = input[1];
  let x2 = input[2];
  let y2 = input[3];

  
  let result1 = calculateDistance(x1, y1, 0, 0);
  let result2 = calculateDistance(x2, y2, 0, 0);
  let result3 = calculateDistance(x1, y1, x2, y2);

  printResults(result1, x1, y1, 0, 0);
  printResults(result2, x2, y2, 0, 0);
  printResults(result3, x1, y1, x2, y2);

  function calculateDistance(x1, y1, x2, y2){
    let result = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2));
    return result;
  }

  function printResults(result, x1, y1, x2, y2){
    if(result % 1 === 0){
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
  }
}


