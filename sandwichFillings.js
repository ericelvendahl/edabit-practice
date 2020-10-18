// Sandwich Fillings
// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

// Examples
// getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

// getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

// getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]
// Notes
// The first and last elements will always be "bread".

function getFillings(sandwich) {
  return sandwich.filter((x, index, arr) => x != "bread");
}

console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));
console.log(getFillings(["bread", "sausage", "tomato", "bread"]));
console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]));
