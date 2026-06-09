function printTriangleArea(a, b, c) {
  let semiPerimeter = (a + b + c) / 2;
  let areaOfTriangle = Math.sqrt(semiPerimeter*(semiPerimeter - a)*(semiPerimeter - b)*(semiPerimeter - c));

  console.log(areaOfTriangle);
}

printTriangleArea(2, 3.5, 4);