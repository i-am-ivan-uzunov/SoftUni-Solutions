//const { createElement } = require("react");

function solve() {
  const textareas = document.querySelectorAll('textarea');
  const inputRef = textareas[0];
  const outputRef = textareas[1];
  const buttons = document.querySelectorAll('button');
  const buttonGenerate = buttons[0];
  const buttonBuy = buttons[1];
  const tableBody = document.querySelector('tbody');
  const fragment = document.createDocumentFragment();

  buttonGenerate.addEventListener("click", () => {
    const input = inputRef.value;
    const items = JSON.parse(input);

    for (let item of items) {
      const n = item.name;
      const image = item.img;
      const pr = item.price;
      const decF = item.decFactor;

      const tr = document.createElement("tr");

      const buff = document.createDocumentFragment();

      for (let i = 0; i < 5; i++) {
        const td = document.createElement("td");
        if (i === 0) {
          const img = document.createElement("img");
          img.src = item.img;

          td.append(img);
          buff.append(td);
        } else if (i === 4) {
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";

          td.append(checkbox);
          buff.append(td);
        } else {
          const p = document.createElement("p");
          if (i === 1) {
            p.textContent = n;
          } else if (i === 2) {
            p.textContent = pr;
          } else if (i === 3) {
            p.textContent = decF;
          }

          td.append(p);
          buff.append(td);
        }
      }

      tr.append(buff);
      tableBody.append(tr);
    }
  });

  function buy() {
    let total = 0;
    let totalDecor = 0;
    let furniture = [];

    const rows = Array.from(tableBody.children);

    for (let r of rows) {
      const tdatas = Array.from(r.children);
      const tdata = tdatas[4];
      const chbox = tdata.firstElementChild;

      if (chbox.checked) {
        const name = tdatas[1].firstElementChild.textContent;
        const price = tdatas[2].firstElementChild.textContent;
        const decorFactor = tdatas[3].firstElementChild.textContent;

        total += Number(price);
        totalDecor += Number(decorFactor);
        furniture.push(name);
      }
    }

    const avgDecor = furniture.length > 0 ? totalDecor / furniture.length : 0;

    outputRef.value = `Bought furniture: ${furniture.join(", ")}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${avgDecor}`;
  }

  buttonBuy.addEventListener("click", buy);
}
