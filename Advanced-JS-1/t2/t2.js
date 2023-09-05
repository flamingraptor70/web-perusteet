// Sample user data array
const userArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", },
  { age: 30 },
  { name: "Eve", age: null }
];


for (const user of userArray) {
  const userData =`Welcome, ${user.name ?? 'Guest'}! You are ${
    user.age ?? 18
  } years old.`;
  console.log(userData);
}


// The correct output should be:
// Welcome, Alice! You are 25 years old.
// Welcome, Bob! You are 18 years old.
// Welcome, Guest! You are 30 years old.
// Welcome, Eve! You are 18 years old.
