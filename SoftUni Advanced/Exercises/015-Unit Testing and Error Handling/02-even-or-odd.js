import { isOddOrEven } from "./functions.js";
import { expect } from "chai";

describe("Checks if the string length is even or odd", function () {
  it("If the parameter type is a number", () => {
    const actual = isOddOrEven(2);

    expect(actual).to.be.equal(undefined);
  });

  it("If the parameter type is an array", () => {
    const actual = isOddOrEven([1, 2, 3]);

    expect(actual).to.be.equal(undefined);
  });

  it("When the string length is even", () => {
    const actual = isOddOrEven("Ivan");

    expect(actual).to.be.equal("even");
  });

  it("When the string length is odd", () => {
    const actual = isOddOrEven("Monsy");

    expect(actual).to.be.equal("odd");
  });

  it("Multiple case scenario", () => {
    expect(isOddOrEven("Ivan")).to.be.equal("even");
    expect(isOddOrEven('Monsy')).to.be.equal("odd");
  });
});
