// Edabit
const myObject = { one: 1, two: 2, three: 3 };

function hasKey(obj, key) {
  return key in obj;
}

console.log(hasKey(myObject, "three"));
