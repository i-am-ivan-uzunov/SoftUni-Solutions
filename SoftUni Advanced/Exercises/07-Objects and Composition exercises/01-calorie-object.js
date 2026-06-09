function solve(arr) {
  let foods = {};

  for (i = 0; i < arr.length; i += 2) {
    let foodName = arr[i];
    let calories = Number(arr[i+1]);

    foods[foodName] = calories;
  }

  console.log(foods);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
