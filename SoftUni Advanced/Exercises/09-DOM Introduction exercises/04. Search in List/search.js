function search() {
  const searchTextRef = document.querySelector("#searchText");
  const resultRef = document.querySelector("#result");
  const townsRef = document.querySelectorAll("#towns li");
  const searchedTown = searchTextRef.value;

  let matches = 0;

  for (let li of townsRef) {
    li.style.fontWeight = "";
    li.style.textDecoration = "";
  }

  if (searchedTown === "") {
    resultRef.textContent = "";
    return;
  }

  for (let li of townsRef) {
    let town = li.textContent;

    if (town.includes(searchedTown)) {
      matches++;
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";
    }
  }

  resultRef.textContent = `${matches} matches found`;
}
