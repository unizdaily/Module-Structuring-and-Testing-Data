// Predict and explain first...

// Why will an error occur when this program runs?
/* =============> I predict that the code will throw an error because the variable 'decimalNumber' is 
  being declared twice in the same scope, which is not allowed in JavaScript. The first declaration 
  is in the function parameter, and the second declaration is inside the function body.
  This will cause a syntax error.*/

// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

/* =============> When I run the code, I get a syntax error that says "Identifier 'decimalNumber' has 
already been declared". This error occurs because I am trying to declare a new variable 'decimalNumber' 
inside the function body, but 'decimalNumber' is already declared as a parameter of the function. 
In JavaScript, you cannot declare a variable with the same name in the same scope.*/

// Finally, correct the code to fix the problem
// =============> Here is the new code:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.80)); // I put an example number and the output was 80%