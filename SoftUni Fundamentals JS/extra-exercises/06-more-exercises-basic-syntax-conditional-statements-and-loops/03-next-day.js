function printNextDate(y, m, d) {
  let year = y;
  let month = m;
  let day = d;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day < 31) {
        day += 1;
        console.log(`${year}-${month}-${day}`);
      } else {
        if (month < 12) {
          day = 1;
          month += 1;
          console.log(`${year}-${month}-${day}`);
        } else {
          day = 1;
          month = 1;
          year += 1;
          console.log(`${year}-${month}-${day}`);
        }
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (day < 30) {
        day += 1;
        console.log(`${year}-${month}-${day}`);
      } else {
        day = 1;
        month += 1;
        console.log(`${year}-${month}-${day}`);
      }
      break;

    case 2:
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        if (day < 29) {
          day += 1;
          console.log(`${year}-${month}-${day}`);
        } else {
          day = 1;
          month += 1;
          console.log(`${year}-${month}-${day}`);
        }
      } else {
        if (day < 28) {
          day += 1;
          console.log(`${year}-${month}-${day}`);
        } else {
          day = 1;
          month += 1;
          console.log(`${year}-${month}-${day}`);
        }
      }
      break;
  }
}
