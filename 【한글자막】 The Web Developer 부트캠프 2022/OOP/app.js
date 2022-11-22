// String.prototype.yell = function () {
//   return console.log(`${this.toUpperCase()}!!!`);
// };

// const str = "popopo";

// str.yell();

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// hex(255, 100, 25);

// rgb(255, 100, 25);

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `(${r}], ${g}, ${b})`;
  }

  rgb() {
    return `rgb(${r}], ${g}, ${b})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

Color.prototype;

const red = new Color(255, 67, 89, "tomato");
