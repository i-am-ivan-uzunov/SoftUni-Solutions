function solve(arr, n) {
  const rotations = n % arr.length;
  let result = [];
  if(rotations === 0){
    console.log(arr.join(' '));
  }else{
    let firstHalf = arr.slice(-rotations);
    let secondHalf = arr.slice(0, arr.length - rotations);
    result = [...firstHalf, ...secondHalf];
    console.log(result.join(' '));
  }
}


