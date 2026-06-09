function solve(input) {
  let food = {};
  let regex = new RegExp(
    /[#|][A-Z][a-z\sA-Za-z]+[#|][0-3][0-9]\/[0-1][0-9]\/[0-9][0-9][#|][\d]{0, 5}[#|]/gm,
  );
  let values = input.match(regex);
}

solve(
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
);
