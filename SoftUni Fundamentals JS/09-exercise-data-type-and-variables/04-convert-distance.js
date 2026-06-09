function printDistance(distance){
  let meters = distance;
  const metersInKm = 1000;
  const mileInKm = 0.621371;

  let distanceInKm = meters / metersInKm;
  let distanceInMiles = distanceInKm * mileInKm;

  console.log(`${meters} meters is equal to ${distanceInKm} kilometers.`);
  console.log(`${distanceInKm} kilometers is equal to ${distanceInMiles.toFixed(2)} miles.`);
}

