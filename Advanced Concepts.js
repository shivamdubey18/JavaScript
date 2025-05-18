// Closure example: counter
function makeCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = makeCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  
  // this example
  const obj = {
    name: 'Alice',
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  };
  const greet = obj.greet;
  greet();              // undefined or error, because this lost
  const boundGreet = greet.bind(obj);
  boundGreet();         // Hello, Alice
  