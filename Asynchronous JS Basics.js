// Promise example
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(5000).then(() => console.log("Waited 1 second"));

// Async/Await example
async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user);
  } catch (err) {
    console.error("Error fetching user:", err);
  }
}

fetchUser();
