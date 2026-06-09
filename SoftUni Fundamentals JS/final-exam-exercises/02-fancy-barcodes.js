function solve(input) {
  let n = input.shift();
  let validationOfBarcode = new RegExp(/^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$/);

  for (let i = 0; i < n; i++) {
    let barcode = input[i];
    if (validationOfBarcode.test(barcode)) {
      let validationOfGroup = /[0-9]+/g;
      if (validationOfGroup.test(barcode)) {
        let group = barcode.match(validationOfGroup).join('');
        console.log(`Product group: ${group}`);
      } else {
        console.log(`Product group: 00`);
      }
    } else {
      console.log('Invalid barcode');
    }
  }
}

solve([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);
