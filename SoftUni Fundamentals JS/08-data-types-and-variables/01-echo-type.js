function printInput(variable){
  let input = variable;
  let typeInput = typeof(input);

  if(typeInput === 'string' || typeInput === 'number'){
    console.log(typeInput);
    console.log(input);
  }else{
    console.log(typeInput);
    console.log('Parameter is not suitable for printing');
  }
}
