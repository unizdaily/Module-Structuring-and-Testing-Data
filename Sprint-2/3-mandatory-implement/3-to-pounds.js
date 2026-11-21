// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
    const penceStringWithoutTrailingP = penceString.substring(
      0,
      penceString.length - 1
    );
  
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
  
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
  
    return `£${pounds}.${pence}`;
  }

  
/* Using the code  from Sprint 1, I wrapped all of it in a  function called toPounds that takes a string 
representing a price in pence as an argument. The function processes the input string to convert it into 
a formatted string representing the price in pounds and pence. I replaced the fixed value 'const penceString = "399p";
and made 'penceString the function's parameter instead, so whatever value  I pass in while calling toPounds(...)
is used. Next, I changed 'console.log(\£${pounds}.${pence}`);' that prints the result directly and gave nothing 
back to use elsewhere and change it to 'return `£${pounds}.${pence}`;' so the function hands the formatted string
back to whoever called it. */ 

console.log(toPounds("399p")); // Output: £3.99
console.log(toPounds("5p"));   // Output: £0.05
console.log(toPounds("1250p")); // Output: £12.50