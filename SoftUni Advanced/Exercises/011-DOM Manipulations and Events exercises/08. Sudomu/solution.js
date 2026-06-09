function solve() {
  const tbodyRef = document.querySelector("tbody");
  const trRef = Array.from(tbodyRef.querySelectorAll("tr"));
  const btnCheck = document.querySelectorAll("button")[0];
  const btnClear = document.querySelectorAll("button")[1];
  const table = document.querySelector("table");

  btnCheck.addEventListener("click", check);
  btnClear.addEventListener("click", clear);

  function check() {
    const td = [];
    for (let row of trRef) {
      const tdatas = Array.from(row.querySelectorAll("td"));
      td.push(tdatas);
    }

    let isSolved = true;

    for (let i = 0; i < td.length; i++) {
      for (let j = 0; j < 2; j++) {
        let current = td[i][j].firstElementChild.value;

        for (let y = j; y < 2; y++) {
          let next = td[i][y + 1].firstElementChild.value;

          if (current === next || !next) {
            isSolved = false;
            break;
          }
        }

        for (let k = i; k < 2; k++) {
          const next = td[k + 1][j].firstElementChild.value;

          if (current === next || !next) {
            isSolved = false;
            break;
          }
        }
      }
      if (isSolved === false) break;
    }

    const result = document.querySelector("#check p");

    if (isSolved) {
      result.textContent = "You solve it! Congratulations!";
      result.style.color = "green";
      table.style.border = "2px solid green";
    } else {
      result.textContent = "NOP! You are not done yet...";
      result.style.color = "red";
      table.style.border = "2px solid red";
    }
  }

  function clear() {
    for (let row of trRef) {
      const arr = row.children;
      for (let i = 0; i < arr.length; i++) {
        const tdata = (arr[i].firstElementChild.value = "");
      }
    }

    const result = document.querySelector("#check p");
    
    result.textContent = "";
    result.style.color = "";
    table.style.border = "";
  }
}
