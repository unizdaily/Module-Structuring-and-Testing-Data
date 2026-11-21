// Predict and explain first...
/*  =============> I predict that the code will throw an error because the variable 'str' is 
being declared twice in the same scope, which is not allowed in JavaScript. The first declaration
 is in the function parameter, and the second declaration is inside the function body. 
 This will cause a syntax error.*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/

/* =============> When I run the code, I get a syntax error that says "Identifier 'str' 
   has already been declared". This error occurs because I am trying to declare a new variable 
  'str' inside the function body, but 'str' is already declared as a parameter of the function.
  In JavaScript, you cannot declare a variable with the same name in the same scope. */
// =============> Here is the new code:
  
function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}

console.log(capitalise("how are you?")); 