function solve(input) {
  let phoneBook = new Map();

  for (let data of input) {
    [fullName, phone] = data.split(' ');

    phoneBook.set(fullName, phone);
  }

  for (let [fullName, phone] of phoneBook) {
    console.log(`${fullName} -> ${phone}`)
  }
}

