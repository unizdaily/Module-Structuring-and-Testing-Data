// Predict and explain first...

// =============> I predict that the code will throw an error because the function 'multiply' does not return any value.
/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

/* =============> When I run the code, I get the output "The result of multiplying 10 and 32 is undefined". 
  This happens because the function 'multiply' does not have a return statement, so it returns 'undefined' by default. 
  The console.log inside the function prints the product of 'a' and 'b', but since there is no return value, 
  the outer console.log prints 'undefined'. */

// Finally, correct the code to fix the problem
//  =============> Here is the new code:

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);   // output: The result of multiplying 10 and 32 is 320