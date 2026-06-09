function calculator() {
  let selector1;
  let selector2;
  let resultSelector;

  const functions = {
    init(select1, select2, resultSelect) {
      selector1 = document.querySelector(select1);
      selector2 = document.querySelector(select2);
      resultSelector = document.querySelector(resultSelect);
    },
    add() {
      const value1 = Number(selector1.value);
      const value2 = Number(selector2.value);
      resultSelector.value = value1 + value2;
    },
    subtract() {
      const value1 = Number(selector1.value);
      const value2 = Number(selector2.value);
      resultSelector.value = value1 - value2;
    },
  };

  return functions;
}


