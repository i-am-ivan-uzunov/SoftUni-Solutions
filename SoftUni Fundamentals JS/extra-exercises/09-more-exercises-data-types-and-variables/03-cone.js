function printConeAspects(r, h) {
  let slantHeight = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
  const pi = Math.PI;
  let volume = (pi * Math.pow(r, 2) * h) / 3;
  let area = pi * r *(r + slantHeight);

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
