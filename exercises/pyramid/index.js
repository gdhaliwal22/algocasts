// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const steps = require("../steps");

function pyramid(n, row = 0, steps = "") {
  if (row === n) {
    return;
  }
  if (steps.length === 2 * n - 1) {
    console.log(steps);
    return pyramid(n, row + 1);
  }
  const mid = Math.floor((2 * n - 1) / 2);
  let add;
  if (mid - row <= steps.length && mid + row >= steps.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, steps + add);
}

module.exports = pyramid;

// Solution #1

// function pyramid(n) {
//     const mid = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//       let steps = "";

//       for (let col = 0; col < 2 * n - 1; col++) {
//         if (mid - row <= col && mid + row >= col) {
//           steps += "#";
//         } else {
//           steps += " ";
//         }
//       }
//       console.log(steps);
//     }
//   }
