function solve(arr, step) {
  let result = [];

  for (i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }

  return result;
}


