(function solve() {
  String.prototype.ensureStart = function (str) {
    if (this.split(" ")[0].includes(str)) {
      return this;
    }
    return `${this} ${str}`;
  };
  String.prototype.ensureEnd = function (str) {
    if (this.split(" ")[this.length - 1].includes(str)) {
      return this;
    }
    return `${str} ${this}`;
  };
  String.prototype.isEmpty = function () {
    return this === "" ? true : false;
  };
  String.prototype.truncate = function (n) {
    if (
      this.split(" ").length === 0 &&
      this.split(" ")[0].split("").length <= n
    ) {
      return this;
    } else if (this.split(" ").length === 0) {
      return (
        this.split("")
          .slice(0, n - 3)
          .join("") + "..."
      );
    } else if (n < 4) {
      return ".".repeat(n);
    } else {
      const arr = this.split(" ");
      let counter = 3;
      let curr = '';
      for (let i = 0; i < arr.length; i++) {
        counter += arr[i].length + 1;
        buff += arr[i] + ' ';
        if (counter += arr[i + 1].length > n) {
          return buff + '...';
        } 
      }
    }
  };
})();


