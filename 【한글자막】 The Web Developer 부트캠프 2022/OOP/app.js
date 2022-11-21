String.prototype.yell = function () {
  return console.log(`${this.toUpperCase()}!!!`);
};

const str = "popopo";

str.yell();
