// Variables
const name = "Alice";
let age = 25;
var isStudent = true;

// Function types
function greet(person) {
  return `Hello, ${person}!`;
}
const greetArrow = person => `Hi, ${person}!`;

// Arrays & Objects + destructuring
const colors = ["red", "green", "blue"];
const [firstColor, ...otherColors] = colors;

const user = { id: 1, username: "alice123" };
const { username } = user;

console.log(greet(name));        // Hello, Alice!
console.log(greetArrow("Bob"));  // Hi, Bob!
console.log(firstColor);         // red
console.log(otherColors);        // [ 'green', 'blue' ]
console.log(username);           // alice123