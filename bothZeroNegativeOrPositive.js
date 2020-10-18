// Both Zero, Negative or Positive
// Write a function that returns true if both numbers are:

// Smaller than 0, OR ...
// Greater than 0, OR ...
// Exactly 0
// Otherwise, return false.

// Examples
// both(6, 2) ➞ true

// both(0, 0) ➞ true

// both(-1, 2) ➞ false

// both(0, 2) ➞ false
// Notes
// Inputs will always be two numbers.

function bothZeroNegPos(firstNumber, secondNumber) {
  if (firstNumber && secondNumber < 0) {
    return true;
  } else if (firstNumber && secondNumber > 0) {
    return true;
  } else if (firstNumber && secondNumber === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(bothZeroNegPos(12, -1));
console.log(bothZeroNegPos(0, 2));
console.log(bothZeroNegPos(6, -2));
