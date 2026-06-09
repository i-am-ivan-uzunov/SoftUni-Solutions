function printFirstAndLastKElements(input) {
  let k = input.splice(0, 1);

  console.log(input.slice(0, k).join(' '));
  console.log(input.slice(input.length - k, k + 1).join(' '));
}
