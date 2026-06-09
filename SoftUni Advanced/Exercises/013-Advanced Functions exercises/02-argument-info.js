function argumentsType(...arg){
  const arr = arg;

  types = {};

  for(let arg of arr){
    const type = typeof arg;
    console.log(`${type}: ${arg}`);

    types.hasOwnProperty(type) ? types[type] += 1 : types[type] = 1;
  }

  let sortedTypes = Object.entries(types).sort((a, b) => b[1] - a[1]);

  for(let [key, value] of sortedTypes){
    console.log(`${key} = ${value}`);
  }
}
