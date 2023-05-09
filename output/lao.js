const prompt = require("prompt-sync")();

function main() {
  // Declare an array to store the values.
  let array = [];

  // Prompt the user to enter 10 values.

  for (let i = 0; i < 10; i++) {
    const value = prompt("Please enter a value: ");
    array.push(value);
  }

  // Sort the array in ascending order.
  array.sort((a, b) => a - b);
  // Display the sorted array.
  console.log("The is array value: ", array);
}
main();