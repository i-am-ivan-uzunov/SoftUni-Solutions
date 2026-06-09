function solve(commands) {
  let arr = [];
  for (i = 0; i < commands.length; i++) {
    if (commands[i] === "add") {
      arr.push(i + 1);
    } else {
      arr.pop();
    }
  }

  if (arr.length > 0) {
    arr.forEach((el) => console.log(el));
  } else {
    console.log("Empty");
  }
}


