function add(number){
  let state = 0;

  manipulator(number);
  function manipulator(number){
    state += number;
    return manipulator;
  }

  manipulator.toString = () => state;
  return manipulator;
}
