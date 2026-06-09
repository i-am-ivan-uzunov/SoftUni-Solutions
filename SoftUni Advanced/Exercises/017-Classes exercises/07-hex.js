class Hex {
  constructor(value) {
    this.value = Number(value);
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return "0x" + this.value.toString(16).toUpperCase();
  }

  plus(number) {
    let resultValue = this.value + Number(number.valueOf());
    return new Hex(resultValue);
  }

  minus(number) {
    let resultValue = this.value - Number(number.valueOf());
    return new Hex(resultValue);
  }

  static parse(string) {
    return parseInt(string, 16);
  }
}
