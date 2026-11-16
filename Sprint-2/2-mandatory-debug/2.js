// Predict and explain first...

// Predict the output of the following code:
// =============> I predict that the output will be 3 in all the numbers.
/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> The output will be:
/* The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3 */

// Explain why the output is the way it is
/* =============> When getLastDigit() is declared with no parameters, so the arguments 
passed in (42, 105, 806) are discarded. So inside the function body, 'num' refers to the
outer const 'num = 103' via closure, so it always returns the last digit of 103, which is why th output is 3. */

// Finally, correct the code to fix the problem
// =============> 
  const num = 103;

  function getLastDigit(num) {
    return num.toString().slice(-1);
  }
  
  console.log(`The last digit of 42 is ${getLastDigit(42)}`);
  console.log(`The last digit of 105 is ${getLastDigit(105)}`);
  console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
