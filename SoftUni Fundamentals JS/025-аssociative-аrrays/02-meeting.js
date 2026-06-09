function solve(input) {
  let meetings = new Map();

  for (let data of input) {
    [weekday, fullName] = data.split(' ');
    if (meetings.has(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meetings.set(weekday, fullName);
      console.log(`Scheduled for ${weekday}`);
    }
  }

  for (let [day, name] of meetings) {
    console.log(`${day} -> ${name}`);
  }
}

