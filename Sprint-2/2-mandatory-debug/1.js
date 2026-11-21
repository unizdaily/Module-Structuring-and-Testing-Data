// Predict and explain first...
/*  =============> I predict that the code will throw an error because the function 'sum' has a return statement 
  that is not returning any value. */

/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

/* =============> When I run the code, it prints "The sum of 10 and 32 is undefined". 
This happens because the function 'sum' has a return statement that is not returning any value.
The line 'a + b:' below it is never reached because the function has already returned,
means it is a dead code. */

// Finally, correct the code to fix the problem
//  =============> Here is the new code:

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // output: The sum of 10 and 32 is 42
