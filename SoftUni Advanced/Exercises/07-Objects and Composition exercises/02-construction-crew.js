function solve(obj) {
  if (obj.dizziness) {
    let neededWater = 0.1 * obj.weight * obj.experience;
    obj.levelOfHydrated += neededWater;
    obj.dizziness = false;
  }

  return obj;
}
