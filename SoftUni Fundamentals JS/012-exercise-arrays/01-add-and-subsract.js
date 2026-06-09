function printNewArray(arr) {
  let array = arr;
  let modifiedArr = [];
  let sumOriginal = 0;
  let sumModified = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      modifiedArr[i] = Number(array[i]) + i;
    } else {
      modifiedArr[i] = Number(array[i]) - i;
    }

    sumModified += modifiedArr[i];
    sumOriginal += Number(array[i]);
  }

  console.log(modifiedArr);
  console.log(sumOriginal);
  console.log(sumModified);
}

