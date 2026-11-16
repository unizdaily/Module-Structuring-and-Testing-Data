
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

/* =============> I predict that the code will throw an error because the parameter name '3' is not a 
    valid identifier in JavaScript. */

    /*
function square(3) {
    return num * num;
}
*/

// =============> When I run the code, I get a syntax error that says "Unexpected number". 

/* =============> I get this error because the parameter name '3' is not a valid identifier in JavaScript. 
    Function parameters must be valid variable names (with letters), and '3' is a number, which cannot be used as a variable name. */

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3)); // I put an example number and the output was 9