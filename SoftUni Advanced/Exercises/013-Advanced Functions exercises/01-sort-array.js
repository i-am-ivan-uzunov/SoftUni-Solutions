function sort(numbers, order) {
  if (order === "asc") {
    numbers.sort((a, b) => a - b);
  } else {
    numbers.sort((a, b) => b - a);
  }
  return numbers;
}

