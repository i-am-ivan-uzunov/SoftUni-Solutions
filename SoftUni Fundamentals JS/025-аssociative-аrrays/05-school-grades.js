function solve(input) {
  let gradeBook = new Map();
  let newGradeBook = new Map();

  for (let data of input) {
    [fullName, ...grades] = data.split(' ');

    if (gradeBook.has(fullName)) {
      let currentGrades = gradeBook.get(fullName);
      let newGrades = currentGrades.concat(grades);

      gradeBook.set(fullName, newGrades);
    } else {
      gradeBook.set(fullName, grades);
    }
  }

  for (let [fullName, grades] of gradeBook) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += Number(grades[i]);
    }

    let avg = sum / grades.length;

    newGradeBook.set(fullName, avg);
  }

  let sortedGradeBook = new Map(
    [...newGradeBook].sort((a, b) => a[0].localeCompare(b[0]))
  );

  for(let [fullName, avg] of sortedGradeBook){
    console.log(`${fullName}: ${avg.toFixed(2)}`)
  }
}
