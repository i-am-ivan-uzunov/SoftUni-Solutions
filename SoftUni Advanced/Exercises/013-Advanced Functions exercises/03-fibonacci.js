function getFibonator() {
  let curr = 0;
  let previous = 1;

  function add() {
    let result = curr + previous;
    previous = curr;
    curr = result;
    return result;
  }
  return add
}
