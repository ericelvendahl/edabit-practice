// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples
// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false
// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

function isRepdigit(num) {
  console.log("log:", num, num.toString().split(""));
  if (num >= 0) {
    return num
      .toString()
      .split("")
      .every((x, index, arr) => x === arr[0]);
  } else return false;
}

console.log(isRepdigit(333));
console.log(isRepdigit(31233));
console.log(isRepdigit(-33));
