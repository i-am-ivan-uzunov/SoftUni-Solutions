function peopleSelection(age) {
  let ageOfPerson = age;
  if (ageOfPerson >= 0 && ageOfPerson <= 2) {
    console.log(`baby`);
  }
  else if (ageOfPerson >= 3 && ageOfPerson <= 13) {
    console.log(`child`);
  }
  else if (ageOfPerson >= 14 && ageOfPerson <= 19){
    console.log(`teenager`);
  }
  else if(ageOfPerson >= 20 && ageOfPerson <= 65){
    console.log(`adult`);
  }
  else if(ageOfPerson >= 66){
    console.log(`elder`);
  }
  else{
    console.log(`out of bounds`);
  }
}