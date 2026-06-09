import { mathEnforcer } from "./functions.js";
import { expect } from "chai";
//test each operation with wrong type, integer, negative and floating number

describe("MathEnforcer", function () {
  describe("addFive", function () {
    it("should return undefined with a non-number parameter", () => {
      expect(mathEnforcer.addFive('string')).to.be.equal(undefined);
    });
    it("should return the correct result with an integer parameter", () => {
      expect(mathEnforcer.addFive(5)).to.be.equal(10);
    })
    it("should return the correct result with a floating number parameter", () => {
      expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
    })
    it("should return the correct result with a negative integer parameter", () => {
      expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    })
    it("should return the correct result with a floating negative parameter", () => {
      expect(mathEnforcer.addFive(-10.5)).to.be.closeTo(-5.5, 0.01);
    })
  });

  describe("subtractTen", function () {
    it("should return undefined with a non-number parameter", () => {
      expect(mathEnforcer.subtractTen('string')).to.be.equal(undefined);
    });
    it("should return the correct result with an integer parameter", () => {
      expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
    })
    it("should return the correct result with a floating number parameter", () => {
      expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
    })
    it("should return the correct result with a negative integer parameter", () => {
      expect(mathEnforcer.subtractTen(-15)).to.be.equal(-25);
    })
    it("should return the correct result with a floating negative parameter", () => {
      expect(mathEnforcer.subtractTen(-10.5)).to.be.closeTo(-20.5, 0.01);
    })
  });

  describe("sum", function () {
    it("should return undefined with non-number parameters", () => {
      expect(mathEnforcer.sum('string1', 'string2')).to.be.equal(undefined);
    });
    it("should return undefined with non-number parameters", () => {
      expect(mathEnforcer.sum('string1', 2)).to.be.equal(undefined);
    });
    it("should return undefined with non-number parameters", () => {
      expect(mathEnforcer.sum(1, 'string2')).to.be.equal(undefined);
    });
    it("should return the correct result with integer parameters", () => {
      expect(mathEnforcer.sum(15, 5)).to.be.equal(20);
    })
    it("should return the correct result with a floating number parameter", () => {
      expect(mathEnforcer.sum(10.5, 5.6)).to.be.closeTo(16.1, 0.01);
    })
    it("should return the correct result with a negative integer parameter", () => {
      expect(mathEnforcer.sum(-15, -5)).to.be.equal(-20);
    })
    it("should return the correct result with a floating negative parameter", () => {
      expect(mathEnforcer.sum(-10.5, -5)).to.be.closeTo(-15.5, 0.01);
    })
  });
});
