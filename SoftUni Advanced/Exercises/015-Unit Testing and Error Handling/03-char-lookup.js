import { lookupChar } from "./functions.js";
import { expect } from "chai";

describe("Returning the character at the specified index", function () {
  it("If the type of the first parameter is not a string", () => {
    const actual = lookupChar(23, 2);

    expect(actual).to.be.equal(undefined);
  });

  it("If the type of the second parameter is not a number", () => {
    const actual = lookupChar('string', "also a string");

    expect(actual).to.be.equal(undefined);
  });

  it("If the index is a floating number", () => {
    const actual = lookupChar("string", 5.6);

    expect(actual).to.be.equal(undefined);
  });

  it("If the index is a negative number", () => {
    const actual = lookupChar("string", -1);

    expect(actual).to.be.equal("Incorrect index");
  });

  it("If the index is out of bound", () => {
    const actual = lookupChar("string", 20);

    expect(actual).to.be.equal("Incorrect index");
  });

  it("If the index is out of bound", () => {
    const actual = lookupChar("string", 6);

    expect(actual).to.be.equal("Incorrect index");
  });

  it("If the actual result is equal to the expected one", () => {
    const actual = lookupChar("string", 0);

    expect(actual).to.be.equal("s");
  });
});
