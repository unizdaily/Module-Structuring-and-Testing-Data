const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?

// Try breaking down the expression and using documentation to explain what it means
/* maximum - minimum + 1 or equals to (100 - 1 + 1) - is the size of the range you want 
   to return by num or basically 100 possible numbers. */
/* Math.random() function - makes up a random decimal number, always between 0 and 1, 
   sample: 0.3, 0.67, 0.284. */
/* Math.random() * (maximum - minimum + 1) - multiplies the random decimal number by the 
   size of the range you want to return, so it will be a decimal number between 0 and 100. */
/* Math.floor() function - takes whatever number the Math.random() * (maximum - minimum + 1) 
   produce and rounds it down to the nearest whole number, taking off the decimal part. */
/* + minimum or equals ro (+ 1) - adds the minimum number to the rounded down number,
   so it will be a whole number between 1 and 100. */


// It will help to think about the order in which expressions are evaluated
// In this exercise , I learned that in Javascript just like math, the order of operations is important.
/* The expression is evaluated from left to right, and the parentheses are used to group expressions
   together and control the order of evaluation. */

// Try logging the value of num and running the program several times to build an idea of what the program is doing
// The value of num is a random whole number between the minimum and maximum values, inclusive.
/* By watching several of these outputs, I start noticing a pattern that the value of num is always 
   between 1 and 100, and it changes every time I run the program. */
